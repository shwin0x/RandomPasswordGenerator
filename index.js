const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1 = []
let pass2 = []
let passwordEl1 = document.getElementById("password1")
let passwordEl2 = document.getElementById("password2")

function genPassword(){
    pass1=[]
    pass2=[]
    passwordEl1.textContent=" "
    passwordEl2.textContent=" "
    for (let i=0; i<characters.length;i++){
       pass1.push(characters[Math.floor(Math.random()*characters.length)])
       pass2.push(characters[Math.floor(Math.random()*characters.length)])
    
    }
    for (i=0;i<15;i++)
    {
        passwordEl1.textContent += pass1[i]
        passwordEl2.textContent += pass2[i]
    }
}    