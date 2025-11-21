{
    class Person {
        constructor(name, age, country) {
            this.name = name
            this.age = age
            this.country = country
        }
        details() {
            return console.log(`I'm ${this.name} and I'm ${this.age} years old and I'm from${this.country} and`);
        }
    }
    const yi = new Person('yi', 20, 'China')
    yi.details()
}

{
    class Vehicle {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        displayDetails() {
            console.log(`Make: ${this.make}`);
            console.log(`Model: ${this.model}`);
            console.log(`Year: ${this.year}`);
        }
    }
    class Car extends Vehicle {
        constructor(make, model, year, doors) {
            super(make, model, year)
            this.doors = doors
        }
        displayDetails() {
            super.displayDetails()
            console.log(`Doors: ${this.doors}`);
        }
    }
}

{
    class Shape {
        calculateArea() {
            throw new Error('must been call in sub class')
        }
    }
    class Circle  extends Shape{
        constructor(radius) {
            super()
            this.radius = radius
        }
        calculateArea() {
            return Math.PI * this.radius * this.radius
        }
    }
}
{
    class BankAccount {
        constructor(accountNumber, accountHolder, balance) {
            this.accountNumber = accountNumber
            this.accountHolder = accountHolder
            this.balance = balance
        }
        deposit(amount) {
            this.balance += amount
            console.log(`Amount $${amount} deposited into account ${this.accountNumber}.`);
        }
        withdraw(amount) {
            if (amount <= this.balance) {
                this.balance -= amount
                console.log(`Amount $${amount} withdrawn from account ${this.accountNumber}.`);
            }
            else {
                throw new Error('no enough money')
            }
        }
        transfer(amount, recipientAccount) {
            if (amount > this.balance) {
                throw new Error('no enough money')
            } else {
                this.balance -= amount
                recipientAccount.deposit(amount)
                console.log(`Amount $${amount} transferred from account ${this.accountNumber} to account ${recipientAccount.accountNumber}.`);
            }
        }
        displayBalance() {
            console.log(`${this.balance}`);
        }
    }

    // Create multiple instances of the BankAccount class
    const account1 = new BankAccount('SB-012', 'Karishma Hedy', 2000);
    const account2 = new BankAccount('SB-019', 'Phokas Intan', 3000);

    // Transactions on the bank accounts
    account1.displayBalance(); // Account SB-012 balance: $2000
    account2.displayBalance(); // Account SB-019 balance: $3000

    account1.deposit(500); // Amount $500 deposited into account SB-012.
    account1.displayBalance(); // Account SB-012 balance: $2500

    account1.withdraw(200); // Amount $200 withdrawn from account SB-012.
    account1.displayBalance(); // Account SB-012 balance: $2300

    account1.transfer(700, account2); // Amount $700 transferred from account SB-01 to account SB-019.
    account1.displayBalance(); // Account SB-012 balance: $1600
    account2.displayBalance(); // Account SB-019 balance: $3700
}