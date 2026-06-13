console.log("saikumar");
const math=require("./Math");
//importing single function:
// console.log("Math value is ",math(2,6));
/*========if we want to import multiple functions we can use object: =======*/
//1.using object .method:
// console.log("Addition is ",math.addFn(4,5));
// console.log("Subtraction is ",math.subFn(10,3));
console.log("Addition is ",math.add(10,15));
console.log("Subtraction is ",math.sub(20,5));

//2. using destructuring :
const {add,sub}=require("./Math");
console.log("Addition using destructuring is ",add(7,8));
console.log("Subtraction using destructuring is ",sub(18,4));



