
// // getElementsbyClassName returns an array of stuff
// const button = window.document.getElementsByClassName('btn')


// function disable (e) {
//     button[0].disabled =true

// }

// button[0].addEventListener('click',disable)




// // querySelector brings back one or a non array
// const button = window.document.querySelector('.btn')

// function disable (e){
//     button.disabled = true
// }

// button.addEventListener('click',disable)


//querySelectorAll brings back an array
const button = window.document.querySelectorAll('.btn')
function disable (e){
    button[0].disabled = true
}



//// uncomment one of these to try different types of call back function 

// this one pass trhough the name of the funciton
// button[0].addEventListener('click',disable)

// // disable() is NOT the same as disable. if you leave disable() in the function, you will evoke the 
// // the call back function immediately.
// button[0].addEventListener('click',disable())

// this is a problem, because what if you want to pass paramertrs in to the call back function?
// this is where you want to do arrow functions!
button[0].addEventListener('click',() => disable())






// this one has the written action already in the function
// button[0].addEventListener('click',function(){
//     button[0].disabled = true
// })


//this is is a arrow function 
// button[0].addEventListener('click',e => {button[0].disabled = true})
