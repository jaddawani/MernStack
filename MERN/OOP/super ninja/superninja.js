class Ninja{
    constructor(name){
        this.name=name;
        this.health=50;
        this.speed=3;
        this.strenth=3;

    }
    
    sayName(){
        console.log(`the name of ninja ${this.name}`);
    }

    showStats(){
        console.log(`the name of ninja ${this.name}\nthe speed of ninja ${this.speed}\nthe strenth of ninja ${this.strenth}`)
    }

    drinkSake(){
        this.health+=10;
    }

}
class Sensei extends Ninja {
    
    constructor(name){
        super(name)
        this.health=200;
        this.speed=10;
        this.strenth=10;
        this.wisdom=10;

    }

    speakWisdom(){
        this.drinkSake()
        console.log(`the wisdom of sinsi ${this.wisdom}`)
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"