//.......Inheritance 1.....

class Train {
    id;
    trainname;

    constructor (i,tn){
        this.id = i;
        this.trainname = tn;
    }

    basic_info(){
        console.log("Id:" + this.id);
        console.log("Train:" + this.trainname);
    }
}

class Tickite extends Train{
    tickites_name;

    constructor(i,tn,tk){
        super(i,tn)
        this.tickites = tk
    }

    tickite(){
        console.log("Id:" + this.id);
        console.log("Train:" + this.trainname);
        console.log("Tickite:" + this.tickites);
    }
}

let t1 = new Tickite (101,'gujrat','superfast')
t1.tickite()

//......Inheritance 2.......

class Mall {
    
}