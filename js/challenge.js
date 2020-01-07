document.addEventListener("DOMContentLoaded", function(){
    let pauseBool = false;
    let heart = document.getElementById("heart");
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let pause = document.getElementById("pause");
    let likes = document.querySelector(".likes");
    let counter = document.getElementById("counter");
    var seconds = 0;

    function incrementSeconds(){
        if(pauseBool===false){
            seconds++;
            counter.innerText = seconds;
        }
        
    }

    setInterval(incrementSeconds, 1000);

    heart.addEventListener("click", function(){
        if(pauseBool===false){
            let liked = `${counter.innerText}`;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(liked))
            likes.appendChild(li)
        }
        
    });

    plus.addEventListener("click", function(){
        if(pauseBool===false){
            seconds++;
            counter.innerText = seconds;
            
        }
    });

    minus.addEventListener("click", function(){
        if(pauseBool===false){
            seconds--;
            counter.innerText = seconds;
        }
        
    });


    pause.addEventListener("click", function(){
        if(pauseBool===false){
            pauseBool = true;
        }else{
            pauseBool = false;
        }
    });

    let subComment = document.getElementById("comment-form");
    subComment.addEventListener("submit", function(event){
        if(pauseBool===false){
            event.preventDefault();
            const form = event.target;
            const comment = form.querySelector("#comment-input").value;

            let container = document.getElementById("list");
            let li = document.createElement('li');

            li.textContent = comment;
            container.appendChild(li);

            form.reset();
        }
    });

});

