class Employee {

    id;
    name;
    #salary;
    #instenvie;

    constructor (i,n,s) {
        this.id = i;
        this.name = n;
        this.#salary = s;
    }

    //setter method
    set instenvie (i){
        this.#instenvie = i
    }

        //getter method
    get instenvie (){
        return this.#instenvie;
    }

    #bonus (){
        let bonus = this.#salary * 0.10;
        console.log("your bonus is :" ,bonus);
    }

    information (){
        console.log("Id:",this.id);
        console.log("Name:",this.name);
        console.log("salary:" ,this.#salary);

       this.#bonus ()
    }

}
let e1 = new Employee(101,"abc",50000)
//e1.#salary = 500000//error
e1.information();
//e1.#bonus()  //error
e1.instenvie = 2000
let res = e1.instenvie ;
console.log('your instenvie is: ' + res);