window.onload = function(){ 
  const questions = {
    "What is my favorite fruit?": "Watermelon",
  
    "Where have I been last summer?": "Germany",
  
    "What is my favorite sport?": "Biking"
  };
  const questionList = Object.keys(questions);
  const answerList = Object.values(questions);
  
  let index = 0;
    let answer_index = 0;
    document.querySelector('html').onclick = function() { 
      
      document.getElementById("answer").innerText = "";
      document.getElementById("question").innerText = questionList[index];
      answer_index = index;
      index++;
      index = index % 3;
    }
  
    document.getElementById("question").onmouseover = function() {
      document.getElementById("answer").innerText = answerList[answer_index];
    }
  };