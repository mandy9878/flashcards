// This is an empty JavaScript file
const questions = {
    "What is my favorite fruit?": "Watermelon",
  
    "Where have I been last summer?": "Germany",
  
    "What is my favorite sport?": "Biking"
  };
//   const questionList = Object.keys(questions);
//   console.log(questionList);
  
  let i = 0;
  document.getElementById("question").innerHTML = questions[Object.values(questions)[i]];
  document.getElementById("button").onclick = function (){
    if (i< Object.values(questions).length - 1);
    i++;
  }
  // document.querySelector('html').onclick = function() {
//   const answerList = Object.values(questions);
//   alert(answerList);
// }