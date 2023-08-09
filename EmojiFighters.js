let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
let result;
function fight(){
   let index1= Math.floor(Math.random()*17)
   let index2= Math.floor(Math.random()*17)
   let fighters1= fighters[index1]
   let fighters2= fighters[index2]
   return [fighters1,fighters2]
}


fightButton.addEventListener("click", function() {
   
    let result=fight()
    console.log(result)
    stageEl.textContent=result[0] +" VS "+ result[1];    
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
})




















// let stageEl = document.getElementById("stage-el")
// let fightButton = document.getElementById("button-el")
// let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

// // const emoji= ()=>{
// // let index=Math.floor(Math.random()*17)
// // return fighters[index]
// // }
// // let outcome=emoji()
// console.log(outcome)
// fightButton.addEventListener("click", function() {
     
   
//     let index=Math.floor(Math.random()*17)
//     stageEl.textContent=fighters
//     return fighters[index]
    
//     let outcome=emoji()
//     console.log(outcome)

// }

//     // Challenge:
//     // When the user clicks on the "Pick Fighters" button, pick two random 
//     // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
// )
// console.log(fightButton)
