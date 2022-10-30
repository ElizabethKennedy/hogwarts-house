class GameButtons {
    constructor(){
    this.buttonsContainer = document.getElementById('buttonsContainer')
    this.sortingBtn = document.createElement('button')
    this.sortingBtn.setAttribute('quiz_id', 2); 
    this.sortingBtn.classList.add('btn')
    this.sortingBtn.classList.add('btn-outline-danger')
    this.sortingBtn.innerHTML = "Sorting Hat"
    this.sortingBtn.id = 'sorting'
    this.sortingBtn.addEventListener("click", this.sortingButton)
    let divider = document.createElement('div')
    divider.classList.add('divider')
    this.buttonsContainer.append(this.triviaBtn)
    this.buttonsContainer.append(this.sortingBtn)
    this.buttonsContainer.appendChild(divider)
    this.explanation = document.getElementById('explanation')
  }
  
  sortingButton = (event) =>{
    this.explanation.innerHTML = "You will be asked a series of questions to determine if you are best suited for Hufflepuff, Gryffindor, Slytherin or Ravenclaw. If you already have a house and submit for sorting again, all points and scores you have earned for your old house will be deleted as you can no longer be counted in that house's point total."

    let quizID = event.target.attributes.quiz_id.value
    GameButtons.resetQuizSpace()
    this.renderQuiz(quizID)
    this.sortingBtn.innerHTML = "Restart Sorting"
    this.resetTriviaButton()
  }

  
  resetTriviaButton =() =>{
    this.triviaBtn.innerHTML = "Trivia Challenge"
   }
   
    resetSortingButton =() =>{
     this.sortingBtn.innerHTML = "Sorting Hat"
   }

    renderQuiz(quizid){  
      api.getQuiz(quizid).then(function(quiz){new Quiz(quiz)})
      }     

}