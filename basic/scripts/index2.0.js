const questions = {
    "What is my favorite fruit?": "Watermelon",
  
    "Where have I been last summer?": "Germany",
  
    "What is my favorite sport?": "Biking"
};
const questionList = Object.keys(questions);
const answerList = Object.values(questions);

let index = 0;

document.querySelector('html').onclick = function() {
    if (index % 2 == 1) {
        document.getElementById("answer").innerText = answerList[Math.floor(index / 2)];
    } 
    else { 
        document.getElementById("question").innerText = questionList[index / 2];
    }

    index++;
    index = index % 6;
    
}