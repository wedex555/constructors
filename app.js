let Character = function(name="", profession="", gender="", age=0, strength=0, hitpoints=0){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;

    // getter 
    this.getName = function(){
        return this.name;
    }

    this.getProfession = function(){
        return this.profession;
    }

    this.getGender = function(){
        return this.gender;
    }

    this.getHitpoints = function(){
        return this.hitpoints;
    }

    this.getStrength = function(){
        return this.strength;
    }


    // setter 
    this.setName = function(name){
        this.name = name;
    }

    this.setProfession = function(profession){
        this.profession = profession;
    }

    this.setAge = function(age){
        this.age = age;
    }

    this.setStrength = function(strength){
        this.strength = strength;
    }

    this.setHitpoints = function(points){
        this.hitpoints = points;
    }

    this.levelUp = function(){
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    }
    this.printStats = function(){
        console.log(`Name: ${this.name}`);
        //console.log('Name: ' + this.name);
        console.log(`Gender: ${this.gender}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`HitPoints ${this.hitpoints}`);
    }

    this.isAlive = function(){
        if(this.hitpoints > 0){
            console.log(`${this.name} is alive!`);
            return true;
        }

        
    }
}


let peasant = new Character();
console.log(peasant)
peasant.setProfession('Farmer');
peasant.setName('Marko Ted');
peasant.setHitpoints(3);
peasant.setStrength(800);

peasant.setAge(2000);
console.log(peasant)
peasant.printStats()

let warrior = new Character('Crusher', 'Warrior', 'F');
let wizard = new Character('Mage', 'Item Dealer', 'M', 90, 10, 100);

console.log(warrior);
console.log(wizard);

warrior.setStrength(200);
warrior.setHitpoints(1000);
warrior.setAge(25);

warrior.printStats()
