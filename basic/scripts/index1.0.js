const questions = {
    "What is my favorite fruit?": "Watermelon",
    "Where have I been last summer?": "Germany",
    "What is my favorite sport?": "Biking"
};

const questionList = Object.keys(questions);
const answerList = Object.values(questions);

let i = 0;
document.querySelector("html").onclick = function (){
    
    document.getElementById("question").innerText = questionList[i];
    document.getElementById("answer").innerText = answerList[i];
        i ++;
        i=i%3;
 }
