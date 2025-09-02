const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let pw1_el = document.getElementById("PW1");
let pw2_el = document.getElementById("PW2");

function generatePW(){
    let pw1 = ""
    let pw2 = ""
    for (let i = 0; i < 16; i++){
       pw1 += characters[Math.floor(Math.random() * characters.length)]
       pw2 += characters[Math.floor(Math.random() * characters.length)]
    }
    console.log("pw1 generated")
    console.log("pw2 generated")
    pw1_el.textContent = pw1
    pw2_el.textContent = pw2
    return 
}
