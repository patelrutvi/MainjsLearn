//......parant class
class Student {
    id;
    name;

    constructor(i,n){
        this.id = i;
        this.name = n;
    }

    basic_info(){
        console.log("Id:" + this.id);
        console.log("Name:" +  this.name);
    }
    admition_pro (){
        console.log("Admition date 01-11-22");
    }
}

// ......chiled class
class Coursec extends  Student{
    course_name;

    constructor(i,n,cn) {
        super(i,n)   //pass value to parant constructor
        this.course = cn
    }

    course_ditails(){
        console.log("Id:" + this.id);
        console.log("Name:" + this.name);
        console.log("Course:" + this.course);
        console.log("Cource_Duration:" + this.cource_duration);
    }

    // methode override &  polymorphysem//
    admition_pro (){
        console.log("per month one tecnology");
    }
    
}
let c1 = new Coursec(101,'abc','React')
c1.admition_pro()
// c1.__proto__.cource_duration="10 Months"  //....Prototypr thi add karaviyu 1 item
// c1.basic_info()
// c1.course_ditails()

// let arr = [10,20,30]
// console.log(arr);

// function demo () {

// }