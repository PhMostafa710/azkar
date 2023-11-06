let groups = document.querySelectorAll(".group")

let box = document.querySelectorAll(".box")

let span = document.querySelectorAll("span")

// sessionStorage.clear()

span.forEach(span => {
    span.dataset.value = span.textContent 
})

let audio = document.querySelector("audio")
audio.style.cssText = "display:none;"


box.forEach(ele => {
    ele.addEventListener("click" , (element) => {
        box.forEach(e => {
            e.classList.remove("active")
            // e.children[1].textContent = e.children[1].dataset.value 
        })
        element.currentTarget.classList.add("active")
        
        if(ele.classList.contains("active")) {
                sessionStorage.setItem("zkr" , ele.children[1].dataset.active)
        }
    
        sessionStorage.setItem("store" , element.currentTarget.children[1].textContent -= 1)

        if(ele.children[1].textContent === "0") {            
            audio.play()
            
            if(ele.classList.contains("active")) {
                span.forEach(span => {
                    span.textContent = span.dataset.value
                    })
                }
            }
        })

    })
            

            if(sessionStorage.getItem("store")) {
                box.forEach(ele => {    
                    ele.classList.remove("active")
                })

                let active = document.querySelector(`[data-active = '${sessionStorage.getItem("zkr")}']`)
                active.parentElement.classList.add("active")

                active.textContent = sessionStorage.getItem("store")

                // I Must Try Agin To Find Another Solution
                
            }
            

// Gooooood Jooooob


let btnAdd = document.querySelectorAll(".add")
let btnMinus = document.querySelectorAll(".minus")

// Btn To Add the Value
btnAdd.forEach(add => {
    add.addEventListener("click" , function(element)  {
        btnAdd.forEach(ele => {
            ele.classList.remove("active")
            ele.parentElement.parentElement.classList.remove("active")
        })

        element.target.classList.add("active")
        if(element.target.classList.contains("active")) {
            element.target.parentElement.parentElement.classList.add("active")
        } 
        
        if(element.target.parentElement.parentElement.classList.contains("active")) {
            ++element.target.parentElement.parentElement.children[0].children[1].textContent
        }
    })
})

// Btn To Minus the Value
btnMinus.forEach(minus => {
        minus.addEventListener("click" , () => {
            btnMinus.forEach(ele => {
                ele.classList.remove("active")
                ele.parentElement.parentElement.classList.remove("active")
            })
    
            minus.classList.add("active")
            if(minus.classList.contains("active")) {
                minus.parentElement.parentElement.classList.add("active")
            } 
            
            if(minus.parentElement.parentElement.classList.contains("active")) {
                minus.parentElement.parentElement.children[0].children[1].textContent -= 2
            }
    
        })
    })
    