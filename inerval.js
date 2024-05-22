// setInterval("반복실행","실행간격");


let setInterval1 = 0;
let timer = setInterval(()=>{
  console.log('1초'+setInterval1);
  setInterval1++;
  if(setInterval1>10){
    clearInterval(timer);
  }
},1000);