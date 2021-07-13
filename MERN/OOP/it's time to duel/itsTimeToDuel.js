class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
constructor(name,cost,power,res){
    super(name,cost);
    this.power=power;
    this.res=res;

}
attack(target){
    target.res-=this.power
}
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitud){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitud=magnitud;
    }
    play( target ) {
        if( target instanceof Unit ) {
            // implement card text here
            if(this.text[0]=="i"&&this.stat[0]=="r")target.res+=this.magnitud;
            if(this.text[0]=="i"&&this.stat[0]=="p")target.power+=this.magnitud;
            if(this.text[0]=="r"&&this.stat[0]=="p")target.power-=this.magnitud;
            if(this.text[0]=="r"&&this.stat[0]=="r")target.res-=this.magnitud;
        } else 
            throw new Error( "Target must be a unit!" );
        }
    }
    const RedBeltNinja = new Unit("Red Belt Ninja",3,3,4);
    const BlackBeltNinja = new Unit("Black Belt Ninja",4,5,4);
    const HardAlgorithm = new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",3);
    const UnhandledPromiseRejection     = new Effect("Hard Unhandled Promise Rejection",1,"reduce target's resilience by 2    ","resilience",2);
    const PairProgramming= new Effect("Pair Programming    ",3,"increase target's power by 2","power",2);

    PairProgramming.play(RedBeltNinja);
    console.log(RedBeltNinja.power);