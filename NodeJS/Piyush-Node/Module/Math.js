console.log("Module Index File Loaded");

/*      ==== One  way to  export the functions  ====== */
// function  add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// module.exports=add;
// //here we can export only one function at a time:
// module.exports=sub;
//if we want to export multiple functions we can use object:
// -- one way to  write----
// module.exports={
//     addFn:add,
//     subFn:sub
// }
//-- another way to write---- ***** good way to  write object *****
// module.exports={
//     add,
//     sub
// }
/*      ==== Another way to  export the mutiple functions with  using modules   ====== */
exports.add= (a,b)=>a+b;
exports.sub= (a,b)=>a-b;