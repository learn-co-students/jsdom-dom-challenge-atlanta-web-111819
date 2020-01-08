
let i = 0;
let num = 0 
let interval = setInterval( increment, 1000);
let counterPaused = false

function increment(){
    num = 0
    let  = document.getElementById('counter')
    i = i % 360 + 1;
    counter.innerText = i
}

let plus = document.getElementById('plus')
let minus = document.getElementById('minus')

plus.addEventListener('click', function() {
  counter.innerText = i++
})

minus.addEventListener('click', function() {
    counter.innerText = i--
  })

const heart = document.getElementById('heart')

heart.addEventListener('click', function() {
    num = num + 1
    let ul = document.querySelector('.likes')
    let li = document.createElement("li")
    console.log(`Liked at ${i} seconds`)
    li.textContent = `${i} has been liked ${num} times`
    ul.appendChild(li)
})

    
    const pauseBtn = document.querySelector('#pause')
    pauseBtn.addEventListener('click', function() {
        console.log("button clicked")
        if (counterPaused == true) {
            interval = setInterval( increment, 1000);
            pauseBtn.textContent = 'pause'
            counterPaused == false
        } else {
            interval = setInterval( increment, 0);
            pauseBtn.textContent = 'resume'
        }
    })


