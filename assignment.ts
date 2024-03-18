/*Basic Types
let a:number=8;
let b:string="girija";
let c:boolean=true;
let arr:number[]=[1,2,3,4,5];
let d:[number,string]=[1,"girija"];
enum days{monday,tuesday,wednesday,thursday,friday,saturday};
console.log(a);
console.log(b);
console.log(c); 
console.log(arr);
console.log(d);
console.log(days);*/

/*function add
function sum(x:number,y:number){
    let  z=x+y;
   console.log(z);
}
sum(3,2);*/


/*function captialize
let log=(s:string)=>console.log(s.toUpperCase());
var s="girija";
log(s);*/


/*interface
interface Person{
    name:string;
    age:number;
    email:string;
}
function data(user:Person){
    console.log("my name is "+user.name);
    console.log("my  age is "+user.age);
    console.log("my mail id is "+user.email);

}
let obj={name:"girija",age:21,email:"girijagala22@gmail.com"};
data(obj);*/

/*class
class Car{
    make:string;
    model:string;
    year:number;
    displayinfo(){
        console.log("Make: "+this.make,"Model: "+this.model,"year: "+this.year);
    }
    
}
let obj1=new Car();
obj1.make="ford";
obj1.model="Jetta";
obj1.year=2020;
obj1.displayinfo();*/

/*generic function
function reverseArray(arr: any[]): any[] {
    //:any[] to accept array of any data type
    let rev = [...arr]; //spread operator to unpack the array
    return rev.reverse();
  }
  let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let tup: [string, number, string, boolean] = [
    "anil",
    21,
    "ragamanil29@gmail.com",
    false,
  ];
  console.log("reverse of ", numbers, "is", reverseArray(numbers));
  console.log("reverse of ", tup, " is ", reverseArray(tup));*/







 






