function f1() {

  return "i love you";
  
}
function f2(input) {

  console.log(input);
  
}
let promise = new Promise(function(resolve , reject){
  resolve(f1());
})

promise.then(value=>{

  console.log(value);

})