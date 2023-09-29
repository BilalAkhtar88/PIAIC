export class Player {
    private name: string;
    private health: number;
    private attack: number;
    private maxHealth: number;
    private score: number;
    private healingPotions: number;
  
    constructor() {
      this.name = '';
      this.health = 100;
      this.attack = 50;
      this.maxHealth = 100;
      this.score = 0;
      this.healingPotions = 3;
    }
  
    getName() {
      return this.name;
    }
  
    setName(name: string) {
      this.name = name;
    }
  
    getScore() {
      return this.score;
    }
  
    getHealth() {
      return this.health;
    }
  
    getAttack() {
      return this.attack;
    }
  
    getMaxHealth() {
      return this.maxHealth;
    }
  
    getHealingPotions() {
      return this.healingPotions;
    }
  
    reduceHealth(amount: number) {
      this.health -= amount;
      if (this.health < 0) {
        this.health = 0;
      }
    }
  
    increaseHealth(amount: number) {
      this.health += amount;
      if (this.health > this.maxHealth) {
        this.health = this.maxHealth;
      }
    }
  
    setHealth(health: number) {
      this.health = health;
    }
  
    useHealingPotion() {
      this.healingPotions--;
    }
  
    receiveHealingPotion() {
      this.healingPotions++;
    }
  
    increaseScore(points: number) {
      this.score += points;
    }
  }
  
  export class Enemy {
    private name: string;
    private health: number;
    private attack: number;
  
    constructor(name: string, health: number, attack: number) {
      this.name = name;
      this.health = health;
      this.attack = attack;
    }
  
    getName() {
      return this.name;
    }
  
    getHealth() {
      return this.health;
    }
  
    getAttack() {
      return this.attack;
    }
  
    reduceHealth(amount: number) {
      this.health -= amount;
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
  
export function getRandomNumber(minimum: number, maximum: number): number {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
  }
  