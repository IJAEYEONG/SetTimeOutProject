let counter=10000000;
const timer = function(){
  setTimeout(()=>{
    console.log(counter);
    counter--;
    if(counter ==0){
      console.log("초세기가 종료되었습니다.")
    }else{
      timer()
    }
    timer();
  },500)
}
timer()