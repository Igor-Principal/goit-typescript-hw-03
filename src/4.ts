class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];
  constructor(protected key: Key) {}

  abstract openDoor(personKey: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    } else {
      console.log("The door is closed.");
    }
  }
}

class MyHouse extends House {
  openDoor(personKey: Key): void {
    if (personKey.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is unlocked.");
    } else {
      console.log("Your key is wrong");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
