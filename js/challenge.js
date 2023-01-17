
const actualCounter = document.getElementById("counter");

const pauseButton = document.getElementById("pause");

let count = 0;
let intervalId;

function startCounter() {
  intervalId = setInterval(function(){
    count++;
    actualCounter.innerHTML = count;
  }, 1000);
}
startCounter();

  const increaseButton = document.getElementById("plus");
  
  const decreaseButton = document.getElementById("minus");

  const heartButton = document.getElementById("heart")

  const buttons = [increaseButton, decreaseButton, heartButton]

  increaseButton.addEventListener("click", function() {
    count++;
    actualCounter.innerHTML = count;
  });

  decreaseButton.addEventListener("click", function() {
    count--;
    actualCounter.innerHTML = count;
  });

  const likesObject = {}

  const collection = document.querySelector(".likes");

  heartButton.addEventListener("click", function() {
    if (!likesObject[count]) {
      likesObject[count] = 1
      const newLi = document.createElement("li");
      newLi.id = count
      newLi.textContent = `${count} has been liked ${likesObject[count]} times`
      collection.appendChild(newLi)
    } else {
      likesObject[count] += 1;
      const newerLi = document.getElementById([count])
      newerLi.id = count
      newerLi.textContent = `${count} has been liked ${likesObject[count]} times`
    }
  })

  pauseButton.addEventListener("click", toggleButtons)

  function toggleButtons() {
    buttons.forEach(button => {
        button.disabled = !button.disabled;
    });
    if (buttons[0].disabled) {
        clearInterval(intervalId);
        pauseButton.innerHTML = "resume";
    } else {
        pauseButton.innerHTML = "pause";
        startCounter();
    }
}

const submitButton = document.getElementById("submit")

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  const commentsDiv = document.getElementById("list");
  const newComment = document.getElementById("comment-input").value;
  const newP = document.createElement("p");
  newP.innerText = newComment;
  commentsDiv.appendChild(newP);
})
