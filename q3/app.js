let obj = "{name ahmad}"


function jsonValidator(obj) {

  try {
   let user =  JSON.parse(obj);

  } catch (e) {
    console.log("invalid object");

  }
}

jsonValidator(obj);