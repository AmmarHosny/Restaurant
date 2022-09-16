// loding

let myloding =document.querySelector("#three")

console.log(myloding)
window.onload = function () {
    setTimeout(function () {
    myloding.style="display:none"
},3000)
}



// selcte bar

let mybar = document.querySelector(".fa-bars")
console.log(mybar)
let mylist = document.querySelector("header ul")
console.log(mylist)

mybar.onclick = function () {
    mylist.classList.toggle("active")
}

// select menu

let mymenu = document.querySelectorAll("header ul a")
console.log(mymenu)

mymenu.forEach(m => {
    
    m.addEventListener("click", e => {
        e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:"smooth"
        }) 
    })
})

// creat button top

let myButtonUp = document.querySelector(".fa-angles-up")
console.log(myButtonUp)

myButtonUp.onclick = function () {
    document.querySelector(".landing").scrollIntoView({
        behavior:"smooth"
    })
}


window.onscroll = function () {

    let Specialitytop = document.querySelector(".speciality").offsetTop;
    

    let Specialityhight = document.querySelector(".speciality").offsetHeight;
    

    let windowHeight = this.innerHeight;
    
    let windowscrolltop = this.pageYOffset;

    if (windowscrolltop > (Specialitytop + Specialityhight - windowHeight)) {
        myButtonUp.style = "top:75%"
    } else {
        myButtonUp.style = "top:-120px"
    }
}
