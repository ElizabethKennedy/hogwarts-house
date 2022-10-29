class Quiz {
    constructor(quiz){
        this.quizContainer = document.getElementById('contain')
        this.quizElement = document.getElementById('quiz');
        this.id = quiz.id;
        this.slides = [];
        this.characterTraits = [];
        this.gryffindorCount = 0;
        this.slytherinCount = 0;
        this.hufflepuffCount = 0;
        this.ravenclawCount = 0;
        this.resultsContainer = document.getElementById('results')
        this.showSlide(0);
        
        
        let characterTraits =
        
        ['Pick your favorite animal of the choices.', {"A"=>"Lion", "B"=>"Badger", "C"=>"Snake", "D"=>"Eagle"}] 
        ['What is your best trait?', {"A"=>"Bravery", "B"=>"Intelligence", "C"=>"Resourceful", "D"=>"Loyal"}]
        ['What is your worst trait?', {"A"=>"Manipulative", "B"=>"Stubborn", "C"=>"Too Trusting", "D"=>"Dismissive}]
        ['Which wizard do you look up to?', {"A"=>"Hermione Granger", "B"=>"Draco Malfoy", "C"=>"Luna Lovegood", "D"=>"Cedrick Diggory"}]
        ['What would you like to be called least?', {"A"=>"Ignorant", "B"=>"Cowardly", "C"=>"Selfish", "D"=>"Ordinary"}]
        ['When I am dead I want people to remember me as:', {"A"=>"The Good", "B"=>"The Great", "C"=>"The Wise", "D"=>"The Bold"}]
        ['If you could make a potion that would guarantee you one thing what would it be?', {"A"=>"Love", "B"=>"Glory", "C"=>"Wisdom", "D"=>"Power"}]
        ['Four boxes are placed before you. Which would you try to open?', {"A"=>"The small pewter box", "B"=>"The ornate golden casket", "C"=>"The small tortoiseshell box", "D"=>"The gleaming jet black box"}]
        ['You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:', {"A"=>"Suggest drawing lots to decide who will fight", "B"=>"Suggest all three of you should fight", "C"=>"Attempt to confuse the troll so you can pass without fighting", "D"=>"Volunteer to fight}]
        ['You enter an enchanted garden. What would you be most curious to examine first?', {"A"=>"The bubbling pool", "B"=>"The silver leafed tree", "C"=>"The fat red toadstools", "D"=>"The statue of an old wizard"}]
        ['Four goblets are placed before you, which do you drink?', {"A"=>"The foaming, frothing, silvery liquid that sparkles as though containing ground diamonds.", "B"=>"The smooth, thick, richly purple drink that gives off a delicious smell of chocolate and plums.	", "C"=>"The golden liquid so bright that it hurts the eye, and which makes sunspots dance all around the room.	", "D"=>"The mysterious black liquid that gleams like ink, and gives off fumes that make you see strange visions.	"}]
        ['What power would you most want?', {"A"=>"Power of Invisibility", "B"=>"Power to Change Appearance", "C"=>"Superhuman Strength", "D"=>"Power to Change the Past"}]
        ['Which road tempts you most?', {"A"=>"The wide, sunny, grassy lane", "B"=>"The narrow, dark, lantern-lit alley", "C"=>"The twisting, leaf-strewn path through the woods", "D"=>"The cobbled street lined with ancient buildings"}]
        ['What are you most looking forward to learning at Hogwarts?', {"A"=>"Secrets About The Castle", "B"=>"About Magical Creatures", "C"=>"Transfiguration", "D"=>"Hexes and Jinxes"}]
        ['Would you rather be:', {"A"=>"Feared", "B"=>"Imitated", "C"=>"Liked", "D"=>"Praised"}];
            
                
                    
                        
                            
                                
                                    
let gryffindor_answers = ["Lion", "Bravery", "Stubborn", "Cowardly", "Harry Potter or Hermione Granger", "The Bold", "Glory", 
    "The ornate golden casket", "Volunteer to fight", "The statue of an old wizard", "The golden liquid so bright that it hurts the eye, and which makes sunspots dance all around the room", 
    "Superhuman strength", "The wide, sunny, grassy lane", "About Magical Creatures", "Praised"];

let slytherin_answers = ["Snake", "Resourceful", "Manipulative", "Ordinary", "Draco Malfoy", "The Great", "Power", "The gleaming jet black box",]    
    "Suggest all three fight",  "The bubbling pool",  "The mysterious black liquid that gleams like ink, and gives off fumes that make you see strange visions", 
    "The power to change appearance", "The narrow, dark, lantern-lit alley", "Hexes and Jinxes", "Feared"];
    
let ravenclaw_answers = ["Eagle", "Intelligence", "Dismissive", "Ignorant", "Luna Lovegood", "The Wise", "Wisdom", ]
    "The small pewter box",  "Attempt to confuse the troll so you can pass without fighting",  "The silver leafed tree",  
    "The foaming, frothing, silvery liquid that sparkles as though containing ground diamonds",  "The power to change the past", "
    The twisting, leaf-strewn path through the woods", "Transfiguration", "Imitated"];

    
let hufflepuff_answers = ["Badger", "Loyal", "Too trusting", "Cedric Diggory", "Selfish", "The Good", "Love", "The small tortoiseshell box", 
    "Suggest drawing lots to see who should fight", "The fat red toadstools", "The smooth, thick, richly purple drink that gives off a delicious aroma of chocolate and plums", 
   "The cobbled street lined with ancient buildings", "Secrets About the Castle", "Liked"];

    renderResults = () => {
        const answersOnPage = document.getElementsByClassName('answers')
        this.questions.forEach((currentQuestion, questionIndex) => {
        const answerI = answersOnPage[questionIndex]
          let userAnswer = 0
          for (var i = 0, length = answerI.childElementCount; i < length; i+=2) {
            if (answerI.children[i].children[0].checked) {
        
    
    
    
      renderHouseResults = () =>{
        const answersOnPage = document.getElementsByClassName('answers')
        this.questions.forEach( (currentQuestion, questionIndex) => {
      
          const answerI = answersOnPage[questionIndex];
          let userAnswer = 0
          for (var i = 0, length = answerI.childElementCount; i < length; i+=2) {
            if (answerI.children[i].children[0].checked) {
            userAnswer = (answerI.children[i].children[0].value);
            }
            else if (answerI.children[i].children[0].checked == false){
              answerI.children[i].children[0].disabled = true
            }
          }
    
    
          if(userAnswer === currentQuestion.gryffindor_answer){
           this.gryffindorCount++;
          }
          else if (userAnswer === currentQuestion.slytherin_answer){
            this.slytherinCount++;
          }
          else if (userAnswer === currentQuestion.hufflepuff_answer){
            this.hufflepuffCount++;
          }
          else if (userAnswer === currentQuestion.ravenclaw_answer){
            this.ravenclawCount++;
          }
        });
    
      
    calculateHouseResults = () =>{
         let largestNumber = Math.max(this.gryffindorCount, this.slytherinCount, this.hufflepuffCount, this.ravenclawCount)
          let house = []
          if (this.gryffindorCount === largestNumber){ house.push(2)}
          if (this.slytherinCount === largestNumber){ house.push(3)}
          if (this.ravenclawCount === largestNumber){ house.push(4)}
          if (this.hufflepuffCount === largestNumber){ house.push(5)}
          if (house.length === 1){
    
            return house[0]
          }
          else {
            return house[Math.floor(Math.random()*house.length)]
          }
          }
    
        
    }