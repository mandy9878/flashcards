const questions = {
    "What is my favorite fruit?": "Watermelon",

    "Where have I been last summer?": "Germany",

    "What is my favorite sport?": "Biking"
};

const questionList = Object.keys(questions);
const answerList = Object.values(questions);

let i = 0;
document.querySelector("html").onclick = function (){
    if (i % 2 == 1) {
        document.getElementById("answer").innerText = answerList[Math.floor(i/2)];
    }
    else {
        document.getElementById("question").innerText = questionList[i/2];
    }
    
        i ++;
        i=i%6;
 }
// document.getElementById("question")= questionList[i];
    //     i++;
    //     i = i%3;
    // document.getElementById("answer") = answerList[a==i];