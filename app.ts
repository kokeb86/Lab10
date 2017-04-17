
// Kokeb A Beyene
// Id No 108424
// Date 4/16/2017

// (111111111111111111111111111111111111111111111111111111
var money:number;

let bankAcount ={
    money:2000,
    deposit(value:number){
        this.money+=value;
    }

};

var name:string;
var hobbies:string[];
let myself={
    name:"Assad",
    bankAcount:bankAcount,
    hobbies:["violin","Cooking"]

    

};

var yourself=myself.bankAcount.deposit(3000);
console.log(yourself);


//22222222222222222222222222222222222222222222222222

class Car{
    name: string;
    acceleration:number=0;
    constructor(name:string){
        this.name=name;

    }
    honk(){
        console.log('${this.name} is saying tooooooot!');

    };
    accelerate(speed){
         this.acceleration=this.acceleration + speed;
    }


};

var car= new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);


//33333333333333333333333333333333333333333333333

class baseObject{
    
    width: number=0;
    length:number=0;

    constructor(width:number, length:number){
        this.width=width;
        this.length=length;
    }
    calSize(){
        console.log(this.width * this.length);
    }
};
class rectangle extends baseObject{
    constructor(width:number,length:number){
    super(width,length);
    }

}

const myrec= new rectangle(5,2);
console.log(myrec.calSize());

//444444444444444444444444444444444444444444444

class person {
   private _firstName: string ="";

    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        this._firstName= value.toUpperCase();
    }
    enumerable:boolean =true;
    configurable:boolean = true
};
let myperson= new person();
myperson.firstName= "Assad";
console.log(myperson.firstName); 
