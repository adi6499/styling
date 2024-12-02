let left, right;
left = document.querySelector("#left")
right = document.querySelector("#right")
let image = document.querySelector("#image")
let ani = document.querySelector(".ani")
let number = document.querySelector(".number")
let i = 1;
right.addEventListener("click", () => {
    
    if (i >= 9) {
        i = 1
    } else {
        ani.classList.add("imagesAni")
        setTimeout(()=>{
            ani.classList.remove("imagesAni")
        },1000)
        image.src = `./${i}.jpg`
        i++
    }
  number.innerHTML=i
})
left.addEventListener("click", () => {
    if (i < 1) {
        i = 9
    } else {
        ani.classList.add("imagesAni")
        setTimeout(()=>{
            ani.classList.remove("imagesAni")
        },1000)
        image.src = `./${i}.jpg`
        i--
    }
    number.innerHTML=i
})