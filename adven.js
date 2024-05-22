// setTimeout(function(){
//   for(let i =0; i<10; i++){
//     console.log("1.너구리가 공중부양 합니다.");
//   }
//   a();
// },500)
// function a(){
//   setTimeout(function(){
//     console.log("3.test")
//   },3)
// }
setTimeout(function() {
  console.log("1.배성빈");
  setTimeout(function() {
    console.log("2.김정수");
    setTimeout(function() {
      console.log("3.조우식");
    }, 1000);
  }, 2000);
}, 3000);