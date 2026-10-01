class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    barks() {
        console.log(`${this.name} barks`);
    }
}

const doggy = new Dog("Fluffyboi");
doggy.barks();