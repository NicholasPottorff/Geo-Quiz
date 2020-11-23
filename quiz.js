//1 = Capitals
//2 = Largest city
//3 = Population
//4 = Area
//5 = Language
var curTopic = 1;
var curCountry;

//in integer from 1 - 4
var correctAnswer;
var totalRight;

function initGame(){
  createQuestion();
}

function createQuestion(){
  var countryIndex = Math.floor(Math.random() * data.length);
  curCountry = data[countryIndex][0];
  var displayQuestion = document.getElementById('question');

  if(curTopic == 1){
    question.innerHTML = "What is the capital of "+curCountry+"?";
  }else if(curTopic == 2){
    question.innerHTML = "What is the largest city in "+curCountry+"?";
  }else if(curTopic == 3){
    question.innerHTML = "What is the population of "+curCountry+"?";
  }else if(curTopic == 4){
    question.innerHTML = "What is the land area (km^2) of "+curCountry+"?";
  }else if(curTopic == 5){
    question.innerHTML = "What is the most spoken language in "+curCountry+"?";
  }

  correctAnswer = data[countryIndex][curTopic];

  //decide wrong anser indices
  var wrongIndex1 = Math.floor(Math.random() * data.length);

  //we don't want repeat data
  while(wrongIndex1 == countryIndex){
    wrongIndex1 = Math.floor(Math.random() * data.length);
  }

  var wrongIndex2 = Math.floor(Math.random() * data.length);
  while(wrongIndex2 == countryIndex || wrongIndex2 == wrongIndex1){
    wrongIndex2 = Math.floor(Math.random() * data.length);
  }

  var wrongIndex3 = Math.floor(Math.random() * data.length);
  while(wrongIndex3 == countryIndex || wrongIndex3 == wrongIndex2 || wrongIndex3 == wrongIndex1){
    wrongIndex2 = Math.floor(Math.random() * data.length);
  }

  var wrongAns1 = data[wrongIndex1][curTopic];
  var wrongAns2 = data[wrongIndex2][curTopic];
  var wrongAns3 = data[wrongIndex3][curTopic];

  var optionsArray = [correctAnswer, wrongAns1, wrongAns2, wrongAns3];

  //scramble the answers
  var perm = perms[Math.floor(Math.random() * 24)];

  //assign answers to the buttons
  document.getElementById('opt1').innerHTML = optionsArray[perm[0]-1];
  document.getElementById('opt2').innerHTML = optionsArray[perm[1]-1];
  document.getElementById('opt3').innerHTML = optionsArray[perm[2]-1];
  document.getElementById('opt4').innerHTML = optionsArray[perm[3]-1];
}

function submit(option){
  if(curCountry==null){
    return;
  }else{
    var selected = null;
    if(option == 1){
      selected = 'opt1';
    }else if(option == 2){
      selected = 'opt2';
    }else if(option == 3){
      selected = 'opt3';
    }else if(option == 4){
      selected = 'opt4';
    }
    if(document.getElementById(selected).innerHTML == correctAnswer){
      document.getElementById('result').innerHTML = "Correct!";
      createQuestion();
      return;
    }else{
      document.getElementById('result').innerHTML = "Incorrect. The correct answer was "+correctAnswer;
      return;
    }
  }
}

function changeTopic(topic){
  curTopic = topic;
  display = document.getElementById('curtopic');
  if(curTopic == 1){
    display.innerHTML = "Capitals";
  }else if(curTopic == 2){
    display.innerHTML = "Largest City";
  }else if(curTopic == 3){
    display.innerHTML = "Population";
  }else if(curTopic == 4){
    display.innerHTML = "Land Area";
  }else if(curTopic == 5){
    display.innerHTML = "Most Spoken Language";
  }

  createQuestion();
}


var data = [
  ["China", "Beijing", "Shanghai", "1,394,015,977", "9,596,961", "Mandarin"],
  ["India","New Delhi","Mumbai","1,326,093,247","3,287,263","Hindi"],
  ["Indonesia","Jakarta","Jakarta","267,026,366","1,910,931","Indonesian"],
  ["United States","Washington D.C.","New York","329,877,505","9,525,067","English"],
  ["Pakistan","Islamabad","Karachi","233,500,636","907,843","Urdu"],
  ["Brazil","Brasilia","Sao Paulo","212,369,355","8,515,767","Portuguese"],
  ["Nigeria","Abuja","Lagos","206,139,587","923,768","English"],
  ["Bangladesh","Dhaka","Dhaka","169,688,404","148,460","Bengali"],
  ["Congo (DRC)","Kinshasa","Kinshasa","109,935,800","2,344,858","French"],
  ["Egypt","Cairo","Cairo","100,075,480","1,010,408","Arabic"],
  ["Ethiopia","Addis Ababa","Addis Ababa","109,224,414","1,104,300","Amharic"],
  ["Vietnam","Hanoi","Ho Chi Minh City","96,208,984","331,212","Vietnamese"],
  ["Russia","Moscow","Moscow","146,748,590","17,098,246","Russian"],
  ["Mexico","Mexico City","Mexico City","127,792,286","1,964,375","Spanish"],
  ["Japan","Tokyo","Tokyo","125,880,000","377,975","Japanese"],
  ["Philippines","Manila","Quezon City","109,463,466","300,000","Filipino (Tagalog)"],
  ["Iran","Tehran","Tehran","86,183,741","1,648,195","Persian"],
  ["Turkey","Ankara","Istanbul","83,154,997","783,356","Turkish"],
  ["Germany","Berlin","Berlin","83,166,711","357,022","German"],
  ["France","Paris","Paris","67,081,000","640,679","French"]
];

var perms = [
  [1,2,3,4],
  [1,2,4,3],
  [1,3,2,4],
  [1,3,4,2],
  [1,4,2,3],
  [1,4,3,2],
  [2,1,3,4],
  [2,1,4,3],
  [2,3,1,4],
  [2,3,4,1],
  [2,4,1,3],
  [2,4,3,1],
  [3,1,2,4],
  [3,1,4,2],
  [3,2,1,4],
  [3,2,4,1],
  [3,4,1,2],
  [3,4,2,1],
  [4,1,2,3],
  [4,1,3,2],
  [4,2,1,3],
  [4,2,3,1],
  [4,3,1,2],
  [4,3,2,1]
];
