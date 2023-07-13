//.......Inheritance 1.....

class Train {
    inhex;
    id;
    trainname;
    plateform;

    constructor(ine,i, tn, p) {
        this.inhex = ine
        this.id = i;
        this.trainname = tn;
        this.plateform = p
    }

    basic_info() {
        console.log("Example-1:" + this.inhex);
        console.log("Id:" + this.id);
        console.log("Train:" + this.trainname);
        console.log("plateform:" + this.plateform);
    }

    train_poly(){
        console.log("please book your tickite");
    }
}

class Tickite extends Train {
    tickites_name;

    constructor(ine,i, tn, tk) {
        super(ine,i, tn)
        this.tickites = tk
    }

    tickite() {
        console.log("Example-1:" + this.inhex);
        console.log("Id:" + this.id);
        console.log("Train:" + this.trainname);
        console.log("Tickite:" + this.tickites);
    }
// .........polymorphysem....1........
    train_poly(){
        console.log("poly ==> ..Your tickits is booked ");
        console.log("many form === polymophysem Example...1");
    }
}

let t1 = new Tickite('inheritance-1',101, 'gujratSuperfast', 'bilimora', 'superfastexpress')
// t1. basic_info()
t1.tickite()
t1.train_poly()

//......Inheritance 2.......

class Book {
    inhexm;
    id;
    bookname;

    constructor(inh,i, bn) {
        this.inhexm = inh;
        this.id = i;
        this.bookname = bn

    }

    // Book_ditails(){
        // console.log("Example-2:" + this.inhexm);
    //     console.log("Book Id: " + this.id);
    //     console.log("Book Name: " + this.bookname);
    // }

    book_poly (){
        console.log("max 3 books avalible ");
    }

}

class BPrice extends Book {
    book_price;

    constructor(inh,i, bn, bprice) {
        super(inh,i, bn)
        this.book_price = bprice
    }

    price() {
        console.log("Example-2:" + this.inhexm);
        console.log("Book Id: " + this.id);
        console.log("Book Name: " + this.bookname);
        console.log("Book Price :" + this.book_price);
    }
    // .........polymorphysem..2.......
    book_poly (){
        console.log("poly..==>..book price is 100");
        console.log("many form === polymophysem Example...2");
    }
}

let b1 = new BPrice('inheritance-2',234245, 'C++', 235)
// b1.Book_ditails()
b1.price()
b1.book_poly()

// ........Prototype  1.......//////////////////////////////////////////////////////////

let arr = ["abc", 34, "xyz", 56]

console.log('Array', arr,"proto example-1");






// .............encapsulation 1.............

class Medicine {
    id;
    Medicine_name;
    #Medicine_exp;

    constructor (i,mn,md) {
        this.id = i;
        this. Medicine_name = mn;
        this.#Medicine_exp = md;
    }

    ditails (){
        
        console.log("Id:",this.id);
        console.log("Medicine name:" + this.Medicine_name);
        console.log("Exp_date:"+ this.  #Medicine_exp);
    }
}
let m1 = new Medicine (245,'dolo500','15-12-2023')
m1.ditails()
// m1.#Medicine_exp()



// .............encapsulation 2.............
class  Syllabus {
    course_name;
    time;
    #fees;
    #course_language;

    constructor (cn,t,f,cl) {
        this.course_name = cn;
        this.time = t;
        this.#fees = f;
        this.#course_language = cl;
    }

    courseditails(){
        console.log("Course Name:",this.course_name);
        console.log("Time:", this.time);
        console.log("Fees:",this.#fees);
        console.log("Cource Language:",this.#course_language );
    }
}
let s1 = new Syllabus ('FullStack','12 Month',62500,'c,c++,javascript,react,node')
s1.courseditails()