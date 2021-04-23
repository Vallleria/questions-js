


let allQuestions = document.querySelectorAll('.question')

// function showHi() {
//      alert('Hello');
// }

function bindQuestionButtons() {
     for ( let i = 0; i < allQuestions.length; i += 1) {
          
          let question = allQuestions[i];
          let qBtn = question.querySelector('.question-btn');

          function onQuestionButton() { // будет вызвана при клике по кнопке
               showText(question); // вызываем showText(question) когда кликаем по кнопке
          }

          qBtn.addEventListener('click', onQuestionButton);
          //qBtn.addEventListener('click', showHi);
     }
}


function showText(question) {
    
   let qText = question.querySelector('.question-text');
   
   let containsText = qText.classList.contains('show-question-text'); 
   let minusIcon =  question.querySelector('.minus-icon');
   let plusIcon = question.querySelector('.plus-icon');

  
   if (containsText) { 
        qText.classList.remove('show-question-text');
        
        
        minusIcon.style.display = 'none';
        plusIcon.style.display = 'block';

   } else {  
        qText.classList.add('show-question-text');

        minusIcon.style.display = 'block';
        plusIcon.style.display = 'none';
        
   }   
}



document.addEventListener('DOMContentLoaded', bindQuestionButtons)