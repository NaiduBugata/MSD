// console.log("hi");
// let a=null;
// console.log(a);
// let first_name="mahesh";

// console.log(`hi this is ${first_name}`)
// function name(abc="hi all", def){
//     // console.log("hi, everyone");
//     console.log(abc, def);
// };
// name("vignan");;

// let b = function(){
//     console.log("anonymous function")
// }

// b();

// let arrow = ()=> {
//   console.log("arrow function")  
// }

// arrow();

var persons = ['Chandra', 'Varun', 'Nrupul', 'Prateek', 'Aman'];

// function vaccinate(person) { 
//     console.log(person + 'has been vaccinated.')
// }

// for (var i = 0; i < persons.length; i++) {  
// vaccinate(persons[i]);  
// }

let result = persons.map((element, i)=>{
console.log(element, i);
// return element;
});

// console.log(result);


let numbers = [1,2,3,4,5,6,7,8,9,10];

// let output = numbers.filter((element)=>{

//     if(element%2 === 0) {
//         return element;
//     }
// });
// console.log(output)


//forEach

let output = numbers.forEach((element)=>{
    return element %2 ==0;
});
console.log(output)



//sort 

let array = [898,6,-1,34,4,0, 12];

let sortedArray = array.sort((a,b)=>{

    return b-a;
});
console.log(sortedArray)