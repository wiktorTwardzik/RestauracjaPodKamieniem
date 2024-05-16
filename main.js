const btnSub = document.querySelector("#btnSub")
const imieInput = document.querySelector("#imie")
const nazwiskoInput = document.querySelector("#nazwisko")
const wiekInput = document.querySelector("#wiek")
const display1 = document.querySelector("#display1")
const radioPlec = document.querySelectorAll('input[name="plec"]');
const emailInput= document.querySelector("#email")
let imie
let nazwisko
let wiek
let plec


btnSub.addEventListener("click", (e)=>{
    e.preventDefault()
    imie = imieInput.value
    nazwisko = nazwiskoInput.value
    wiek = wiekInput.value
    email = emailInput.value
    for (const radioButton of radioPlec) {
        if (radioButton.checked) {
          plec = radioButton.value;
          break;
        }
      }
      if(imie !="" && nazwisko !="" && wiek !=""){
        display1.innerHTML = "Wysłano wiadomość od : " + imie + " " + nazwisko +" "+ wiek + " lat(a) Płeć: " + plec +" z malia " + email
      }else display1.innerHTML = "Nie podałeś wszystkich danych"
})




