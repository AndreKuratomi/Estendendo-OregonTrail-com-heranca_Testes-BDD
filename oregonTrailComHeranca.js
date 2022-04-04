// Traveler:
class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }
    
    hunt() {
        this.food += 2;
    }
    
    eat() {
        if (this.food > 0) {
            this.food--;
        }
        this.isHealthy = false;
    }
};


// Wagon:
class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passengers = [];
    }
    
    getAvailableSeatCount() {
        if (this.capacity > this.passengers.length) {
            let available = this.capacity - this.passengers.length;
            return available; 
        }
        return 0;
    }
    
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler);
        }
    }
    
    shouldQuarantine() {
        for (let count = 0; count < this.passengers.length; count++) {
            if (this.passengers[count].isHealthy === false) {
                return true;
            }
        }
        return false;
    }

    totalFood() {
        let amountOfFood = 0;
        for (let count = 0; count < this.passengers.length; count++) {
            amountOfFood += this.passengers[count].food;
        }
        return amountOfFood;
    }
};


class Doctor extends Traveler {
    constructor(name) {
        super(name)
        this.food = 1;
        this.isHealthy = true;
    }
    
    heal(traveler) {
        traveler.isHealthy = true;
    }
};

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2;
        this.isHealthy = true;
    }

    hunt() {
        this.food += 5;
    }

    eat() {
        if (this.food < 2) {
            this.isHealthy = false;
            this.food = 0;
        }
        this.food -= 2;
    }

    giveFood(traveler, numOfFoodUnits) {//getter
        if (this.food > numOfFoodUnits) {
            this.food -= numOfFoodUnits;
            traveler.food += numOfFoodUnits;
        }
    }
};
