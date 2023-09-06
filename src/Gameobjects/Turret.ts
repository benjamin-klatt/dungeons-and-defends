import { Gameobject } from "../Gameobject";
import { gameobjects } from "../index";
import { Enemy } from "./Enemy";
import { Projectile } from "./Projectile";

enum AttackType {
  AURA,
  NEAREST,
  FARTHEST,
  LOWEST,
  HIGHEST,
  FIRST,
  LAST,
}

export class Turret extends Gameobject {
  //Eigenschaften
  attackspeed: number = 1;
  attackdamage: number = 25;
  reach: number = 250;
  critchance: number = 0;
  price: number = 0;
  xPos: number = 0;
  yPos: number = 0;
  cooldown: number = 0;
  attackType: AttackType = AttackType.FIRST;

  constructor() {
    super(3);
  }

  getEnemyCoveredPathCpNumber(enemy: Enemy) {
    let cpNumber = enemy.cpNumber;
    return cpNumber;
  }

  getEnemyCoveredPathPercent(enemy: Enemy) {
    let xPercent = 0;
    let yPercent = 0;
    if (enemy.cpNumber < enemy.map.checkpoints.length) {
      xPercent = enemy.xPos / enemy.getCurrentCheckpoint().xPosCp;
      yPercent = enemy.yPos / enemy.getCurrentCheckpoint().yPosCp;
      return xPercent * yPercent;
    } else {
      return 0;
    }
  }

  getEnemyLife(enemy: Enemy) {
    return enemy.life;
  }

  getEnemyDistance(enemy: Enemy) {
    let xDiff = enemy.xPos - this.xPos;
    let yDiff = enemy.yPos - this.yPos;
    return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
  }

  enemiesInRange(radius: number) {
    let results: Array<Enemy> = [];
    for (let i = 0; i < gameobjects.length; i++) {
      let enemy = gameobjects[i];
      if (enemy instanceof Enemy) {
        let distance = this.getEnemyDistance(enemy);
        if (distance < radius) {
          results.push(enemy);
        }
      }
    }
    return results;
  }

  tick(time: number, dt: number) {
    Object.keys(AttackType);
    let enemies = this.enemiesInRange(this.reach);
    if (this.attackType === AttackType.AURA) {
      for (let i = 0; i < enemies.length; i++) {
        this.shootEnemy(enemies[i], dt);
      }
    }
    if (this.attackType === AttackType.NEAREST) {
      enemies.sort(
        (a, b) => this.getEnemyDistance(a) - this.getEnemyDistance(b)
      );
      if (enemies.length > 0) {
        this.shootEnemy(enemies[0], dt);
      }
    }
    if (this.attackType === AttackType.FARTHEST) {
      enemies.sort(
        (a, b) => this.getEnemyDistance(b) - this.getEnemyDistance(a)
      );
      if (enemies.length > 0) {
        this.shootEnemy(enemies[0], dt);
      }
    }
    if (this.attackType === AttackType.LOWEST) {
      enemies.sort((a, b) => this.getEnemyLife(a) - this.getEnemyLife(b));
      if (enemies.length > 0) {
        this.shootEnemy(enemies[0], dt);
      }
    }
    if (this.attackType === AttackType.HIGHEST) {
      enemies.sort((a, b) => this.getEnemyLife(b) - this.getEnemyLife(a));
      if (enemies.length > 0) {
        this.shootEnemy(enemies[0], dt);
      }
    }
    if (this.attackType === AttackType.FIRST) {
      enemies.sort((a, b) => {
        let pathNumberDiffrence =
          this.getEnemyCoveredPathCpNumber(b) -
          this.getEnemyCoveredPathCpNumber(a);
        if (pathNumberDiffrence === 0) {
          return (
            this.getEnemyCoveredPathPercent(a) -
            this.getEnemyCoveredPathPercent(b)
          );
        } else {
          return pathNumberDiffrence;
        }
      });
      if (enemies.length > 0) {
        this.shootEnemy(enemies[0], dt);
      }
    }
    if (this.attackType === AttackType.LAST) {
      enemies.sort((b, a) => {
        let pathNumberDiffrence =
          this.getEnemyCoveredPathCpNumber(b) -
          this.getEnemyCoveredPathCpNumber(a);
        if (pathNumberDiffrence === 0) {
          return (
            this.getEnemyCoveredPathPercent(a) -
            this.getEnemyCoveredPathPercent(b)
          );
        } else {
          return pathNumberDiffrence;
        }
      });
      if (enemies.length > 0) {
        this.shootEnemy(enemies[0], dt);
      }
    }
  }

  shootEnemy(enemy: Enemy, dt: number) {
    if (this.cooldown <= 0) {
      gameobjects.push(new Projectile(this.xPos, this.yPos, enemy, this.attackdamage));
      this.cooldown = 1000 / this.attackspeed;
    } else {
      this.cooldown = this.cooldown - dt;
    }
  }

  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "cyan";
    ctx.fillRect(this.xPos - 10, this.yPos - 10, 20, 20);
  }
}
