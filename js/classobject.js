// Class is a tamplate or blueprint to create an object

class Buliding{
    //Initialize our object (Give inital value to the object)
    constructor(l,w){
        this.lenth = l;
        this.width = w;
    }
    area(){
        let ans;
        ans = this.lenth * this.width;
        console.log("Area is"+ans);
    }
    estimation(y){
        console.log("Estimation Time"+y+"Month");
    }
}

// Object is an entity that have properties and methods(behaviour).
// Ex. Laptop 
    //    Properties : color,Company,price
    //    Method : performance,bootTime()
const b1 = new Buliding(100,200)
b1.area();
b1.estimation(6);

const b2 = new Buliding(500,400)
b1.area();
b1.estimation(8);