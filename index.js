let inpute = document.getElementById("in")
let but = document.getElementById("cl")
let liste = document.getElementById("ul")
let ind = document.getElementById("ind")
let i = 0
but.addEventListener("click",function(e){
    if(inpute.value === ""){
        return undefined
    }
    createEl(inpute.value)
    inpute.value = ""
})
inpute.addEventListener("keyup",function(event){
    if(event.keyCode === 13){
        if(inpute.value === ""){
            return undefined
        }
        createEl(inpute.value)
        inpute.value = ""
    }
})
function createEl(value){
    i++
    let li = document.createElement("li")
    let btn = document.createElement("button")
    li.className = "li"
    btn.className = "btn"
    li.textContent = value
    btn.textContent = "del"
    li.appendChild(btn)
    btn.addEventListener("click",function(el){
        i--
        ind.textContent = i
        liste.removeChild(li)
    })
    li.addEventListener("click",function(){
        if(!li.style.backgroundColor){
            li.style.backgroundColor = "green"
        }else{
            li.style.backgroundColor = ""
        }
    })
    ind.textContent = i


    liste.appendChild(li)
}

