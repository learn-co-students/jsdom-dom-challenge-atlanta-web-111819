const time = document.querySelector('#counter')
let i = 0;
let num
let interval = setInterval( increment, 1000);
function increment(){
    num = 0
    i = i % 360 + 1;
    time.textContent =  i
    heart.addEventListener('click',function(){
    const ul = document.querySelector('.likes')
    const li = document.createElement('li')
    li.textContent = `${i} got liked ${num} times`
    ul.appendChild(li)
})

}

const plus = document.querySelector('#plus')
plus.addEventListener('click', function(){
    time.textContent = i++
}) 

const minus = document.querySelector('#minus')
minus.addEventListener('click', function(){
    time.textContent = i--
}) 

const heart = document.querySelector('#heart')

































