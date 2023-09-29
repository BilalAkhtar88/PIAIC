export class Player {
    name;
    health;
    attack;
    maxHealth;
    score;
    healingPotions;
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
    setName(name) {
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
    reduceHealth(amount) {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }
    increaseHealth(amount) {
        this.health += amount;
        if (this.health > this.maxHealth) {
            this.health = this.maxHealth;
        }
    }
    setHealth(health) {
        this.health = health;
    }
    useHealingPotion() {
        this.healingPotions--;
    }
    receiveHealingPotion() {
        this.healingPotions++;
    }
    increaseScore(points) {
        this.score += points;
    }
}
export class Enemy {
    name;
    health;
    attack;
    constructor(name, health, attack) {
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
    reduceHealth(amount) {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }
}
export function getRandomNumber(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}
