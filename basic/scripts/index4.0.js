window.onload = function(){ 
    const questions = {
      "What is my favorite fruit?": "Watermelon",
    
      "Where have I been last summer?": "Germany",
    
      "What is my favorite sport?": "Biking"
    };
    // const imgList = [
      // function img1() {
      //   let img = document.createElement("image");
      //   img.setAttribute = ("src", "What is my favorite fruit.jpg");
      //   img.setAttribute("width", "300");
      //   img.setAttribute("height", "auto");
      //   img.setAttribute("alt", "A fruit image");
      //   let src = document. getElementById("image");
      //   document.body.src.appendChild(img);  
      // }
    //   // function img2() {

    //   // }
    // ]
    // function myFunction() {
    //   let x = document.images.length;
    //   document.getElementById("image").innerHTML = x;
    // }

    const questionList = Object.keys(questions);
    const answerList = Object.values(questions);
    
    let x = 0;
    let index = 0;
    let answer_index = 0;
    document.querySelector('html').onclick = function() { 
      
      document.getElementById("answer").innerText = "";
      document.getElementById("question").innerText = questionList[index];
      // for (x in images){ 
      //   x++;
      // document.getElementById("image").innerHTML = imgList[x];
      // }
      answer_index = index;
      index++;
      index = index % 3;
    }
  
    document.getElementById("question").onmouseover = function() {
      document.getElementById("answer").innerText = answerList[answer_index];
    }
  };