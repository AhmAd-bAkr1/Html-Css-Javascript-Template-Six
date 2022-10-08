let allButtons = document.querySelectorAll(".buttons span") 
let results = document.querySelector(".resulte > span")
let input = document.getElementById("the-input")

allButtons.forEach(button => {
    button.addEventListener("click" , (e) => {
        if (e.target.classList.contains("cheack")) {
            cheack()
        }
        if (e.target.classList.contains("add")) {
            add()
        }
        if (e.target.classList.contains("deleted")) {
            deleted()
        }
        if (e.target.classList.contains("show")) {
            show()
        }
    })
});
console.log()

function empty(params) {
    if (input.value === "") {
        results.innerHTML = "Input Cant Be Empty"
    }
}

function cheack(params) {
    if (input.value !== "") {
        if (localStorage.getItem(input.value)) {
            results.innerHTML = `Found Item Called <span>${input.value}</span> In Local Storage`
        }
        else{
            results.innerHTML = `Cant Found Item Called <span>${input.value}</span> In Local Storage  `
        }
    } else {
        empty()
       
    }

}
function add(params) {
    if (input.value !== "") {
        localStorage.setItem(input.value , "inputValue")
        results.innerHTML = `Local Storage  <span>${input.value}</span> Added `
    }else{
     empty()
    }
}
function deleted(params) {
    if (input.value !== "") {
        if (localStorage.getItem(input.value)) {
            localStorage.removeItem(input.value)
            results.innerHTML = `Local Storage Item Called <span>${input.value}</span> Deleted `
        }
        else{
            results.innerHTML = `Cant Found Item Called <span>${input.value}</span> In Local Storage  `
        }
    }else{
     empty()
    }
}
function show(params) {
   if (localStorage.length !== 0) {
       results.innerHTML = " "
       if (localStorage.getItem("randid")) { 
       localStorage.removeItem("randid")
       }
       for (let [key] of Object.entries(localStorage)) {
        results.innerHTML += `<span class = "keys">${key}</span>`
    }

   }else{
    results.innerHTML =  `Cant Found Items In Local Storage`
   }
}