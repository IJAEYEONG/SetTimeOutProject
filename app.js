
// 스탑워치(하고싶은것,기다려야하는 시간);
let fromData={
  a:"1. 꽁꽁 얼어붙은",
  b:"2. 대전천 위로",
  c:"3. 고양이가 날아다닙니다."
}

function a(){
  console.log(fromData.a);
}
function b(){
  console.log(fromData.b);
}
function c(){
  console.log(fromData.c);
}
setTimeout(function(){
  console.log('4.고양이가 날라다닙니다.')
},3000);
setTimeout(function(){
  console.log('5.고양이가 날라다닙니다.')
},3000);
setTimeout(function(){
  console.log('6.고양이가 날라다닙니다.')
},3000);
// a();
// c();
// b();

// setTimeout(function(){
//   alert("Hello World");
// }, 1000);

// console.log("setTimeout() example...");