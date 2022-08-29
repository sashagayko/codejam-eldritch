import cardsDataBlue from './data/mythicCards/blue/index.js';
import cardsDataBrown from './data/mythicCards/brown/index.js';
import cardsDataGreen from './data/mythicCards/green/index.js';
import ancientsData from './data/ancients.js';


const ancientList = document.querySelector('.ancients-list')
const difficultyContainer = document.querySelector('.difficulty-container')
const difficultyItem= document.querySelectorAll('.difficulty');
const shuffleButton = document.querySelector('.shuffle-button');
const dotsContainer1 = document.querySelector('.dots-container1')
const dotsContainer2 = document.querySelector('.dots-container2')
const dotsContainer3 = document.querySelector('.dots-container3')
const dotsContainer1Green = dotsContainer1.querySelector('.green')
const dotsContainer2Green = dotsContainer2.querySelector('.green')
const dotsContainer3Green = dotsContainer3.querySelector('.green')
const dotsContainer1Brown = dotsContainer1.querySelector('.brown')
const dotsContainer2Brown = dotsContainer2.querySelector('.brown')
const dotsContainer3Brown = dotsContainer3.querySelector('.brown')
const dotsContainer1Blue = dotsContainer1.querySelector('.blue')
const dotsContainer2Blue = dotsContainer2.querySelector('.blue')
const dotsContainer3Blue = dotsContainer3.querySelector('.blue')

let cartNumber;
let ancient;
let stagesResultBlue =[];
let stagesResultBrown =[];
let stagesResultGreen =[];
let allStagesResult=[];

ancientList.addEventListener('click', function(e) {
  const ancientItems = document.querySelectorAll('.ancient-item')
	const target = e.target.parentNode
  cartNumber = 0;
  difficultyContainer.style.display = 'flex';
  for (let i = 0; i < difficultyItem.length; i++) {
    if (difficultyItem[i].classList.contains('active-difficulty')) {
      shuffleButton.style.display='block';
    }
  }
  for (let i = 0; i < ancientItems.length; i++) {
    ancientItems[i].classList.remove('active-ancient')
  }
  target.classList.add('active-ancient');
  ancient=ancientsData[target.dataset.id];
  dotsContainer1Green.innerHTML = ancient.firstStage.greenCards;
  dotsContainer2Green.innerHTML = ancient.secondStage.greenCards;
  dotsContainer3Green.innerHTML = ancient.thirdStage.greenCards;
  dotsContainer1Brown.innerHTML = ancient.firstStage.brownCards;
  dotsContainer2Brown.innerHTML = ancient.secondStage.brownCards;
  dotsContainer3Brown.innerHTML = ancient.thirdStage.brownCards;
  dotsContainer1Blue.innerHTML = ancient.firstStage.blueCards;
  dotsContainer2Blue.innerHTML = ancient.secondStage.blueCards;
  dotsContainer3Blue.innerHTML = ancient.thirdStage.blueCards;
  return ancient;
})


difficultyContainer.addEventListener('click', function(e) {
  cartNumber = 0;
  const shuffleButton = document.querySelector('.shuffle-button')
  shuffleButton.style.display = 'block'
	const target = e.target
  for (let i = 0; i < difficultyItem.length; i++) {
    difficultyItem[i].classList.remove('active-difficulty')
  }
  target.classList.add('active-difficulty');
  console.log(ancient.firstStage.blueCards);
})

function stage(cardsDataColor, numStage1, numStage2, numStage3) {
  let stagesResultColor=[]
  let arr =[];
  cardsDataColor.sort(() => Math.random()-0.5);
  for (let i = 0; i < numStage1; i++) {
    arr.push(cardsDataColor[i])
  }
  stagesResultColor.push(arr);
  arr = []
  numStage2 =numStage1+numStage2;
    for (let i = numStage1; i < numStage2; i++) {
    arr.push(cardsDataColor[i])
  }
  stagesResultColor.push(arr)
  
  arr =[]
  numStage3 =numStage3+numStage2;
    for (let i = numStage2; i < numStage3; i++) {
    arr.push(cardsDataColor[i])
  }
  stagesResultColor.push(arr)
  // console.log(stagesResultColor);
  return stagesResultColor
}

const deck = document.querySelector('.deck');
const card = document.querySelector('.card')
shuffleButton.addEventListener('click', function(){
  shuffleButton.style.display = 'none'
  deck.style.display = 'block'
  card.style.display = 'none'
  stagesResultBlue = stage(cardsDataBlue, ancient.firstStage.blueCards, ancient.secondStage.blueCards, ancient.thirdStage.blueCards);
  stagesResultBrown = stage(cardsDataBrown, ancient.firstStage.brownCards, ancient.secondStage.brownCards, ancient.thirdStage.brownCards);
  stagesResultGreen = stage(cardsDataGreen, ancient.firstStage.greenCards, ancient.secondStage.greenCards, ancient.thirdStage.greenCards);
  let stage1Result = [...stagesResultBlue[0],...stagesResultBrown[0],...stagesResultGreen[0]].sort(() => Math.random()-0.5);
  let stage2Result = [...stagesResultBlue[1],...stagesResultBrown[1],...stagesResultGreen[1]].sort(() => Math.random()-0.5);
  let stage3Result = [...stagesResultBlue[2],...stagesResultBrown[2],...stagesResultGreen[2]].sort(() => Math.random()-0.5);
  allStagesResult = [...stage1Result,...stage2Result,...stage3Result]
  console.log(allStagesResult);
  return allStagesResult;
})

deck.addEventListener('click', function(){
  const objectCard = allStagesResult[cartNumber];
  card.style.display = 'block'
  if (allStagesResult.length-1 <= cartNumber) {
    deck.style.display = 'none';
  }
  card.innerHTML= `<img src='${objectCard.cardFace}'>`;
  console.log(objectCard.color);
  tracker(objectCard.color)
  cartNumber++;
})
function tracker(cardColor) {
  console.log(ancient);
  
  if (cardColor === 'blue') {
    dotsContainer1Blue.innerText > 0 ? dotsContainer1Blue.innerHTML = dotsContainer1Blue.innerText -1:
    dotsContainer2Blue.innerText > 0 ? dotsContainer2Blue.innerHTML = dotsContainer2Blue.innerText -1:
    dotsContainer3Blue.innerHTML = dotsContainer3Blue.innerText -1;
  } else if (cardColor === 'brown') {
    dotsContainer1Brown.innerText > 0 ? dotsContainer1Brown.innerHTML = dotsContainer1Brown.innerText -1:
    dotsContainer2Brown.innerText > 0 ? dotsContainer2Brown.innerHTML = dotsContainer2Brown.innerText -1:
    dotsContainer3Brown.innerHTML = dotsContainer3Brown.innerText -1;
  }  else if (cardColor === 'green') {
    dotsContainer1Green.innerText > 0 ? dotsContainer1Green.innerHTML = dotsContainer1Green.innerText -1:
    dotsContainer2Green.innerText > 0 ? dotsContainer2Green.innerHTML = dotsContainer2Green.innerText -1:
    dotsContainer3Green.innerHTML = dotsContainer3Green.innerText -1;
  }
}

