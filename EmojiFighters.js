

let stageEl = document.getElementById("stage-el")
let fightButton = document.getElementById("button-el")
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

// const emoji= ()=>{
// let index=Math.floor(Math.random()*17)
// return fighters[index]
// }
// let outcome=emoji()
console.log(outcome)
fightButton.addEventListener("click", function() {
     
  
    let index=Math.floor(Math.random()*17)
    return fighters[index]
    
    let outcome=emoji()
    console.log(outcome)

}

    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
)
console.log(fightButton)
