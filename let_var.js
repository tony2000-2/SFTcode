function let(){
  let i = 1;
  console.log(i); //1
  {
    let i = 2;
    console.log(i); //2
  }
  console.log(i); //1
}

function var(){
  var i = 1;
  console.log(i); //1
  {
    var i = 2;
    console.log(i); //2
  }
  console.log(i); //2
}
