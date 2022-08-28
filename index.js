import cardsDataBlue from './data/mythicCards/blue/index.js';
import cardsDataBrown from './data/mythicCards/brown/index.js';
import cardsDataGreen from './data/mythicCards/green/index.js';
import ancientsData from './data/ancients.js';


const ancientList = document.querySelector('.ancients-list')
const difficultyContainer = document.querySelector('.difficulty-container')
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
let allStagesResalt=[];

ancientList.addEventListener('click', function(e) {
  cartNumber=0;
  difficultyContainer.style.display = 'flex'
	const ancientItems = document.querySelectorAll('.ancient-item')
	const target = e.target.parentNode
  for (let i = 0; i < ancientItems.length; i++) {
    ancientItems[i].classList.remove('active-ancient')
  }
  target.classList.add('active-ancient');
  ancient=ancientsData[target.dataset.id];
  console.log(ancientsData[target.dataset.id]);
  dotsContainer1Green.innerHTML = ancientsData[target.dataset.id].firstStage.greenCards;
  dotsContainer2Green.innerHTML = ancientsData[target.dataset.id].secondStage.greenCards;
  dotsContainer3Green.innerHTML = ancientsData[target.dataset.id].thirdStage.greenCards;
  dotsContainer1Brown.innerHTML = ancientsData[target.dataset.id].firstStage.brownCards;
  dotsContainer2Brown.innerHTML = ancientsData[target.dataset.id].secondStage.brownCards;
  dotsContainer3Brown.innerHTML = ancientsData[target.dataset.id].thirdStage.brownCards;
  dotsContainer1Blue.innerHTML = ancientsData[target.dataset.id].firstStage.blueCards;
  dotsContainer2Blue.innerHTML = ancientsData[target.dataset.id].secondStage.blueCards;
  dotsContainer3Blue.innerHTML = ancientsData[target.dataset.id].thirdStage.blueCards;
  return ancient;
})


difficultyContainer.addEventListener('click', function(e) {
  cartNumber=0;
  const shuffleButton = document.querySelector('.shuffle-button')
  shuffleButton.style.display = 'block'
	const difficultyItem= document.querySelectorAll('.difficulty');
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
const shuffleButton = document.querySelector('.shuffle-button')
shuffleButton.addEventListener('click', function(){
  stagesResultBlue = stage(cardsDataBlue, ancient.firstStage.blueCards, ancient.secondStage.blueCards, ancient.thirdStage.blueCards);
  stagesResultBrown = stage(cardsDataBrown, ancient.firstStage.brownCards, ancient.secondStage.brownCards, ancient.thirdStage.brownCards);
  stagesResultGreen = stage(cardsDataGreen, ancient.firstStage.greenCards, ancient.secondStage.greenCards, ancient.thirdStage.greenCards);
  let stage1Resalt = [...stagesResultBlue[0],...stagesResultBrown[0],...stagesResultGreen[0]].sort(() => Math.random()-0.5);
  let stage2Resalt = [...stagesResultBlue[1],...stagesResultBrown[1],...stagesResultGreen[1]].sort(() => Math.random()-0.5);
  let stage3Resalt = [...stagesResultBlue[2],...stagesResultBrown[2],...stagesResultGreen[2]].sort(() => Math.random()-0.5);
  allStagesResalt = [...stage1Resalt,...stage2Resalt,...stage3Resalt]
  console.log(allStagesResalt);
  return allStagesResalt;
})
const deck = document.querySelector('.deck')
deck.addEventListener('click', function(){
  const card = document.querySelector('.card')
  
  card.innerHTML= `<img src='${allStagesResalt[cartNumber].cardFace}'>`;
  cartNumber++;
})

// card.innerHTML= `<img src='${cardsDataBlue[2].cardFace}'>`;



// const stagesResultBlue =[];
// const stagesResultGreen =[];

// const greenCardsAssets = {
//   green1: './assets/MythicCards/green/green1.png',
//   green2: './assets/MythicCards/green/green2.png',
//   green3: './assets/MythicCards/green/green3.png',
//   green4: './assets/MythicCards/green/green4.png',
//   green5: './assets/MythicCards/green/green5.png',
//   green6: './assets/MythicCards/green/green6.png',
//   green7: './assets/MythicCards/green/green7.png',
//   green8: './assets/MythicCards/green/green8.png',
//   green9: './assets/MythicCards/green/green9.png',
//   green10: './assets/MythicCards/green/green10.png',
//   green11: './assets/MythicCards/green/green11.png',
//   green12: './assets/MythicCards/green/green12.png',
//   green13: './assets/MythicCards/green/green13.png',
//   green14: './assets/MythicCards/green/green14.png',
//   green15: './assets/MythicCards/green/green15.png',
//   green16: './assets/MythicCards/green/green16.png',
//   green17: './assets/MythicCards/green/green17.png',
//   green18: './assets/MythicCards/green/green18.png',
// };
// const blueCardsAssets = {
//   blue1: './assets/MythicCards/blue/blue1.png',
//   blue2: './assets/MythicCards/blue/blue2.png',
//   blue3: './assets/MythicCards/blue/blue3.png',
//   blue4: './assets/MythicCards/blue/blue4.png',
//   blue5: './assets/MythicCards/blue/blue5.png',
//   blue6: './assets/MythicCards/blue/blue6.png',
//   blue7: './assets/MythicCards/blue/blue7.png',
//   blue8: './assets/MythicCards/blue/blue8.png',
//   blue9: './assets/MythicCards/blue/blue9.png',
//   blue10: './assets/MythicCards/blue/blue10.png',
//   blue11: './assets/MythicCards/blue/blue11.png',
//   blue12: './assets/MythicCards/blue/blue12.png',
// }
// const cardsDataGreen = [
//   {
//     id: 'green1',
//     cardFace: greenCardsAssets.green1,
//     difficulty: 'easy',
//     color:'green'
//   },
//   {
//     id: 'green2',
//     cardFace: greenCardsAssets.green2,
//     difficulty: 'hard',
//     color:'green'
//   },
//   {
//     id: 'green3',
//     cardFace: greenCardsAssets.green3,
//     difficulty: 'hard',
//     color:'green'
//   },
//   {
//     id: 'green4',
//     cardFace: greenCardsAssets.green4,
//     difficulty: 'hard',
//     color:'green'
//   },
//   {
//     id: 'green5',
//     cardFace: greenCardsAssets.green5,
//     difficulty: 'hard',
//     color:'green'
//   },
//   {
//     id: 'green6',
//     cardFace: greenCardsAssets.green6,
//     difficulty: 'hard',
//     color:'green'
//   },
//   {
//     id: 'green7',
//     cardFace: greenCardsAssets.green7,
//     difficulty: 'normal',
//     color:'green'
//   },
//   {
//     id: 'green8',
//     cardFace: greenCardsAssets.green8,
//     difficulty: 'normal',
//     color:'green'
//   },
//   {
//     id: 'green9',
//     cardFace: greenCardsAssets.green9,
//     difficulty: 'normal',
//     color:'green'
//   },
//   {
//     id: 'green10',
//     cardFace: greenCardsAssets.green10,
//     difficulty: 'normal',
//     color:'green'
//   },
//   {
//     id: 'green11',
//     cardFace: greenCardsAssets.green11,
//     difficulty: 'normal',
//     color:'green'
//   },
//   {
//     id: 'green12',
//     cardFace: greenCardsAssets.green12,
//     difficulty: 'easy',
//     color:'green'
//   },
//   {
//     id: 'green13',
//     cardFace: greenCardsAssets.green13,
//     difficulty: 'normal',
//     color:'green'
//   },
//   {
//     id: 'green14',
//     cardFace: greenCardsAssets.green14,
//     difficulty: 'normal',
//     color:'green'
//   },
//   {
//     id: 'green15',
//     cardFace: greenCardsAssets.green15,
//     difficulty: 'normal',
//     color:'green'
//   },
//   {
//     id: 'green16',
//     cardFace: greenCardsAssets.green16,
//     difficulty: 'easy',
//     color:'green'
//   },
//   {
//     id: 'green17',
//     cardFace: greenCardsAssets.green17,
//     difficulty: 'easy',
//     color:'green'
//   },
//   {
//     id: 'green18',
//     cardFace: greenCardsAssets.green18,
//     difficulty: 'easy',
//     color:'green'
//   },
// ]
// const cardsDataBlue = [
//     {
//       id: 'blue3',
//       cardFace: blueCardsAssets.blue3,
//       difficulty: 'easy',
//       color:'blue'
//     },
//     {
//       id: 'blue4',
//       cardFace: blueCardsAssets.blue4,
//       difficulty: 'easy',
//       color:'blue'
//     },
//     {
//       id: 'blue5',
//       cardFace: blueCardsAssets.blue5,
//       difficulty: 'easy',
//       color:'blue'
//     },
//     {
//       id: 'blue10',
//       cardFace: blueCardsAssets.blue10,
//       difficulty: 'easy',
//       color:'blue'
//     },
//     {
//       id: 'blue7',
//       cardFace: blueCardsAssets.blue7,
//       difficulty: 'normal',
//       color:'blue'
//     },
//     {
//       id: 'blue9',
//       cardFace: blueCardsAssets.blue9,
//       difficulty: 'normal',
//       color:'blue'
//     },
//     {
//       id: 'blue11',
//       cardFace: blueCardsAssets.blue11,
//       difficulty: 'normal',
//       color:'blue'
//     },
//     {
//       id: 'blue12',
//       cardFace: blueCardsAssets.blue12,
//       difficulty: 'normal',
//       color:'blue'
//     },
//     {
//       id: 'blue1',
//       cardFace: blueCardsAssets.blue1,
//       difficulty: 'hard',
//       color:'blue'
//     },
//     {
//       id: 'blue2',
//       cardFace: blueCardsAssets.blue2,
//       difficulty: 'hard',
//       color:'blue'
//     },
//     {
//       id: 'blue6',
//       cardFace: blueCardsAssets.blue6,
//       difficulty: 'hard',
//       color:'blue'
//     },
//     {
//       id: 'blue8',
//       cardFace: blueCardsAssets.blue8,
//       difficulty: 'hard',
//       color:'blue'
//     },
// ]
// function stage(cardsDataColor, numStage1, numStage2, numStage3, stagesResultColor) {
//   let arr =[];
//   cardsDataColor.sort(() => Math.random()-0.5);
//   for (let i = 0; i < numStage1; i++) {
//     arr.push(cardsDataColor[i])
//   }
//   stagesResultColor.push(arr);
//   arr = []
//   numStage2 =numStage1+numStage2;
//     for (let i = numStage1; i < numStage2; i++) {
//     arr.push(cardsDataColor[i])
//   }
//   stagesResultColor.push(arr)
//   arr =[]
//   numStage3 =numStage3+numStage2;
//     for (let i = numStage2; i < numStage3; i++) {
//     arr.push(cardsDataColor[i])
//   }
//   stagesResultColor.push(arr)
//   return stagesResultColor
// }
// stage(cardsDataBlue, 2,3,0,stagesResultBlue)
// stage(cardsDataGreen, 1,1,2,stagesResultGreen)
// const stage1Resalt =[...stagesResultGreen[0],...stagesResultBlue[0]]
// stage1Resalt.sort(() => Math.random()-0.5);
// // console.log(stage(cardsDataBlue, 2,3,0,stagesResultBlue))
// // console.log(stage(cardsDataGreen, 1,1,2,stagesResultGreen))
// console.log(stage1Resalt)