const zamowButton = document.querySelector("#cbd")
const cennik = document.querySelector("#cennik")
let z = 0

zamowButton.addEventListener("click",(e)=>{
    
    if(z==0){  
        let para = document.createElement("p")
        para.innerHTML = "Zamówienia nie działają przykro nam. :("
        cennik.appendChild(para)
        z++
    }
})