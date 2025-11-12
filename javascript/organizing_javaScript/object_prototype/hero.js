function Hero(name, level) {
    this.name = name
    this.level = level
}
function Person(name) {
    this.name = name
}
Person.prototype.greet = function () {
    console.log(`hi,this is ${this.name}`);
}

function Warrior(name, level, weapon) {
    Hero.call(this, name, level)
    this.weapon = weapon
}
function Healer(name, level, spell) {
    Hero.call(this, name, level)
    this.spell = spell
}
Warrior.prototype.attack = function () {
    console.log(`use ${this.weapon} attack`);
}
Healer.prototype.heal = function () {
    console.log(`use ${this.spell} hell`);
}

Object.setPrototypeOf(Hero.prototype, Person.prototype)
Object.setPrototypeOf(Warrior.prototype, Hero.prototype)
Object.setPrototypeOf(Healer.prototype, Hero.prototype)

const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

hero1.attack()
hero2.heal()
hero1.greet()



const animal = {
    eats: true,
    __proto__: Object.prototype
}

const rabbit = {
    jumbs: true,
    __proto__: animal
}

for (const prop in rabbit) {
    if (rabbit.hasOwnProperty(prop)) {
        console.log(`own property ${prop}`);
    } else {
        console.log(`others property ${prop}`);
    }

}
