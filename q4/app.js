let promise = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});
promise.then(console.log("saalm"));


//first throw log after run code
//after 1 second execute finish.