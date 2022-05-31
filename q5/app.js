// function testApp() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(5);
//     }, 2000)
//   })

// }


// testApp.then((d) => {
//     console.log(d);

//   }).catch(e => {
//     console.log(e);

  // })


  function loadScript() {
    return new Promise(function(resolve, reject) {
      resolve(10)
     

    });
  }