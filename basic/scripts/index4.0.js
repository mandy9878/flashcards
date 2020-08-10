window.onload = function() {
    const questions = {
        "What is my favorite fruit?": "Watermelon",
    
        "Where have I been last summer?": "Germany",
    
        "What is my favorite sport?": "Biking"
    };
    
    let images = [
        "../images/fruit.jpg",
        "../images/germany.jpg",
        "../images/biking.jpg"
    ];

    const questionList = Object.keys(questions);
    const answerList = Object.values(questions);
    
    let i = 0;
    let a = 0;
    document.querySelector('html').onclick = function (){

        document.getElementById("question").innerText = questionList[i];
        document.getElementById("image").src = images[i];
        a = i;
        i ++;
        i = i % 3;
     };
    
    document.getElementById("question").onmouseover = function() { 
        document.getElementById("answer").innerText = answerList[a];
    };

    
}


