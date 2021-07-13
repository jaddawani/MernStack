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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();