let globalCounter = 0;
const likes = {}
let running = true;


function buttonIncrementCounter() {
    globalCounter++;
}

function buttonDecrementCounter() {
    globalCounter--;
}

function updateCounter() {
    const counterElement = document.querySelector("#counter")
    counterElement.textContent = globalCounter;
}

function addLike() {
    likes[globalCounter] ? likes[globalCounter] += 1 : likes[globalCounter] = 1
}

function updateLikes() {
    const parent = document.querySelector(".likes")
    parent.innerHTML = ""
    for (index in likes) {
        const li = document.createElement('li')
        const str = `${index} has been liked ${likes[index]} times.`
        li.textContent = str
        parent.appendChild(li)
    }
}

function showComment(comment) {
    const parent = document.querySelector('#list')
    const p = document.createElement('p')
    p.textContent = comment
    parent.appendChild(p)
}

//All the import stuff happens in here. It ties all the events and listeners together

document.addEventListener('DOMContentLoaded', function() {
    setInterval(function() {
        if (running) {
            globalCounter++;
            updateCounter();
        }
    }, 1000)

    document.querySelector("#plus").addEventListener("click", function(e) {
        buttonIncrementCounter()
        updateCounter();
    })

    document.querySelector("#minus").addEventListener("click", function(e) {
        buttonDecrementCounter()
        updateCounter()
    })

    document.querySelector("#heart").addEventListener("click", function(e) {
        addLike()
        updateLikes()
    })

    document.querySelector('#pause').addEventListener("click", function(e) {
        running = !running
        if (running) {
            e.target.textContent = "pause"
        } else {
            e.target.textContent = "resume"
        }
    })

    document.querySelector('#comment-form').addEventListener('submit', function(e) {
        e.preventDefault()
        const input = e.target.querySelector('input')
        showComment(input.value)
        input.value = ''
    })
})