// This is a script from the blog Random Idea English (<https://random-idea-english.blogspot.com/2012/05/tools-interactive-gapfill-exercise-code.html>)

// JS Code for checking the answers

function checkAnsBoxAnswers(exNum){
  var ca=0
  for(var c=0;c<ansA[exNum].length;c++){
    var guess=doSpaces(exNum,c)
    var ans=doAnswers(guess,ansA[exNum][c])
    if(ans=="yes"){
      document.getElementById("ex"+exNum+"AnsBox"+c).style.color="green"
      document.getElementById("ex"+exNum+"AnsBox"+c).style.fontWeight="bold"
      ca++
    }
    else{
      document.getElementById("ex"+exNum+"AnsBox"+c).style.color="red"
    }
  }
  showScore(exNum,ca)
}


function checkAnsBoxInvisibleAnswersScore(exNum){
  var ca=0
  for(var c=0;c<ansA[exNum].length;c++){
    var guess = document.getElementById("ex"+exNum+"AnsBox"+c).value;
    var ans=doAnswers(guess,ansA[exNum][c])
    if(ans=="yes"){
      document.getElementById("ex"+exNum+"TickBox"+c).innerHTML=getInvisibleAnswersSign(1)
      ca++
    }
    else if(guess==""){
      document.getElementById("ex"+exNum+"TickBox"+c).innerHTML=getInvisibleAnswersSign(3)
    }
    else{
      document.getElementById("ex"+exNum+"TickBox"+c).innerHTML=getInvisibleAnswersSign(2)
    }
  }
  showScore(exNum,ca)
}


function doAnswers(guess,ans){
  if(guess==ans){
    txt="yes"
  }
  else{
    txt="no"
  }
  return txt
}


function getInvisibleAnswersSign(x){
  if(x==1){
    var txt='<span style="color:green;font-weight:bold;">Y</span>'
  }
  else if(x==2){
    var txt='<span style="font-size: 100%;color:red;font-weight:bold;">X</span>'
  }
  else if(x==3){
    var txt='<span style="font-size: 100%;color:orange;font-weight:bold;">?</span>'
  }
  return txt
}


function showScore(exNum,ca){
  var qlen=ansA[exNum].length
  var pc=ca/qlen*100
  pc=Math.round(pc)
  var txt="You have scored "+pc+" percent ( "+ca+" / "+qlen+" )"
  document.getElementById("messageArea"+exNum).innerHTML=txt
}


function doSpaces(exNum,qNum){
  var txt=document.getElementById("ex"+exNum+"AnsBox"+qNum).value
  if(txt.charAt(txt.length-1)==" "){
    txt=txt.slice(0,txt.length-1)
    document.getElementById("ex"+exNum+"AnsBox"+qNum).value=txt
  }
  return txt
}

// JS Code for showing the answers

function showAnsBoxAnswers(exNum){
  for(var c=0;c<ansA[exNum].length;c++){
  if(document.getElementById("ex"+exNum+"AnsBox"+c).value==ansA[exNum][c]){
    document.getElementById("ex"+exNum+"AnsBox"+c).style.color="green"
    document.getElementById("ex"+exNum+"AnsBox"+c).style.fontWeight="bold"
  }
  else{
    document.getElementById("ex"+exNum+"AnsBox"+c).value=ansA[exNum][c]
    document.getElementById("ex"+exNum+"AnsBox"+c).style.color="red"
    document.getElementById("ex"+exNum+"AnsBox"+c).style.fontWeight="bold"
    }
  }
}

// JS Code for clearing the answers

function clearAnsBoxAnswers(exNum){
  for(var c=0;c<ansA[exNum].length;c++){
  document.getElementById("ex"+exNum+"AnsBox"+c).value=""
  document.getElementById("ex"+exNum+"AnsBox"+c).style.color="black"
  document.getElementById("ex"+exNum+"AnsBox"+c).style.fontWeight="normal"
  }
  clearMessageArea(exNum)
}


function clearAnsBoxInvisibleAnswers(exNum){
  for(var c=0;c<ansA[exNum].length;c++){
    document.getElementById("ex"+exNum+"AnsBox"+c).value=""
    document.getElementById("ex"+exNum+"AnsBox"+c).style.color="black"
    document.getElementById("ex"+exNum+"AnsBox"+c).style.fontWeight="normal"
    document.getElementById("ex"+exNum+"TickBox"+c).innerHTML=""
  }
  clearMessageArea(exNum)
}

function clearMessageArea(exNum){
  document.getElementById("messageArea"+exNum).innerHTML=""
}

// Optional JS Code for Click and Drop

function makeClickedWord(exNum,x){
  var txt=document.getElementById("ex"+exNum+"Word"+x).innerHTML
  clickedWord=txt
}


function enterClickedWord(exNum,x){
  var txt=clickedWord
  document.getElementById("ex"+exNum+"AnsBox"+x).value=txt
  clickedWord=""
}


function enterClickedWordCap(exNum,x){
  var txt=clickedWord
  var firstLetter=txt.slice(0,1)
  firstLetter=firstLetter.toUpperCase()
  var rest=txt.slice(1,txt.length)
  txt=firstLetter+rest
  document.getElementById("ex"+exNum+"AnsBox"+x).value=txt
  clickedWord=""
}


