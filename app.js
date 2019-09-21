const firstVote=10; //оценка первого
const secondVote=10; //оценка второго
const thirdVote=1;

let promotersCount = 0;
let detractorsCount=0;

if(firstVote >= 9){
  promotersCount = promotersCount+1;
}
if(firstVote<=6){
    detractorsCount= detractorsCount+1;
}
if(secondVote >= 9){
    promotersCount = promotersCount+1;
  }
if(secondVote<=6){
      detractorsCount= detractorsCount+1;
  }
if(thirdVote >= 9){
    promotersCount = promotersCount+1;
  }
if(thirdVote<=6){
      detractorsCount= detractorsCount+1;
  }
const nps = (promotersCount/3-detractorsCount/3)*100;
console.log(nps);
console.log(promotersCount);
console.log(detractorsCount);



