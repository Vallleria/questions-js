

//document.querySelector('.question');
//var question = document.querySelectorAll('.question');

var allQuestions = document.querySelectorAll('.question')


var question = allQuestions[0];
var question2 = allQuestions[1]; // берем второй элементы 
var question3 = allQuestions[2];

//question.querySelector('.question-btn');
var qBtn = question.querySelector('.question-btn');
var qBtn2 = question2.querySelector('.question-btn');
var qBtn3 = question3.querySelector('.question-btn');

// console.log(qBtn)

function onQuestion() {
    //console.log('hi')
    /*
        1. Получить элемент p.question-text
        2. Проверить, если элемент p содержит (contains) класс с
             Удалить класс show-question-text
           Иначе
             Добавить в classList элемента p класс 'show-question-text'
    */
   // question.querySelector('.question-text');
   var qText = question.querySelector('.question-text');
   // qText.classList.add('show-question-text');
   var containsText = qText.classList.contains('show-question-text'); // проверка, содерж. или нет?
   //    console.log('containsText: ', containsText)

   var minusIcon =  question.querySelector('.minus-icon');
   var plusIcon = question.querySelector('.plus-icon');

  
   if (containsText) { // если у нас текст отображается (show-question-text)
        //console.log('showtext') // удалить 
        qText.classList.remove('show-question-text');
        // question.querySelector('.minus-icon');
        
        minusIcon.style.display = 'none';
        plusIcon.style.display = 'block';

   } else {  // иначе нет текста
        //console.log('notext')
        qText.classList.add('show-question-text');

        minusIcon.style.display = 'block';
        plusIcon.style.display = 'none';
        
   }

    
}

function onQuestion2() {
    
   var qText = question2.querySelector('.question-text');
   

   var minusIcon =  question2.querySelector('.minus-icon');
   var plusIcon = question2.querySelector('.plus-icon');

   var containsText = qText.classList.contains('show-question-text'); 
   if (containsText) { 
        console.log('showtext') 
        qText.classList.remove('show-question-text');
        
        
        minusIcon.style.display = 'none';
        plusIcon.style.display = 'block';

   } else { 
        console.log('notext')
        qText.classList.add('show-question-text');

        minusIcon.style.display = 'block';
        plusIcon.style.display = 'none';
        
   }

    
}

function onQuestion3() {
    
    var qText = question3.querySelector('.question-text');
    
 
    var minusIcon =  question3.querySelector('.minus-icon');
    var plusIcon = question3.querySelector('.plus-icon');
 
    var containsText = qText.classList.contains('show-question-text'); 
    if (containsText) { 
         console.log('showtext') 
         qText.classList.remove('show-question-text');
         
         
         minusIcon.style.display = 'none';
         plusIcon.style.display = 'block';
 
    } else { 
         console.log('notext')
         qText.classList.add('show-question-text');
 
         minusIcon.style.display = 'block';
         plusIcon.style.display = 'none';
         
    }
 
     
 }

qBtn.addEventListener('click', onQuestion);
qBtn2.addEventListener('click', onQuestion2);
qBtn3.addEventListener('click', onQuestion3);