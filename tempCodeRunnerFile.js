let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

const emoji= ()=>{
let index=Math.floor(Math.random()*17)
return fighters[index]
}
let outcome=emoji()
console.log(outcome)