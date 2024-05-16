const czasObrotu = document.querySelector("#obrot")
const bigos = document.querySelector("#bigos")    

czasObrotu.addEventListener("change", ()=>{
    bigos.style.animationDuration = czasObrotu.value + "s"
    console.log(bigos)
    })
