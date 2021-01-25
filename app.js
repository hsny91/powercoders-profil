const question = [
    {
      word: "Verwandtschaft",
      chooseOne: "Establish",
      chooseTwo: "Recall",
      chooseThree: "Relationship",
      chooseFour: "Known",
      chooseCorrect: "Relationship"
    },
    {
      word: "Geschaffen",
      chooseOne: "Ulasmak",
      chooseTwo: "Establish",
      chooseThree: "Relationship",
      chooseFour: "Hastalik",
      chooseCorrect: "Establish"
    },
    {
      word: "Erinnern",
      chooseOne: "Recall",
      chooseTwo: "Establish",
      chooseThree: "Be quite",
      chooseFour: "Forget",
      chooseCorrect: "Recall"
    },
    {
      word: "Bekannt",
      chooseOne: "Yabanci",
      chooseTwo: "Known",
      chooseThree: "Relationship",
      chooseFour: "Unknown",
      chooseCorrect: "Known"
    },
    {
      word: "Flessig",
      chooseOne: "Lazy",
      chooseTwo: "Establish",
      chooseThree: "Hard-working",
      chooseFour: "Recall",
      chooseCorrect: "Hard-working"
    },
    {
      word: "Denken",
      chooseOne: "Known",
      chooseTwo: "Recall",
      chooseThree: "Establish",
      chooseFour: "Think",
      chooseCorrect: "Think"
    },
    {
      word: "Sofa",
      chooseOne: "Settee",
      chooseTwo: "Table",
      chooseThree: "Chair",
      chooseFour: "Cabinet",
      chooseCorrect: "Settee"
    },
    {
      word: "Zwiebel",
      chooseOne: "Onion",
      chooseTwo: "Peppers",
      chooseThree: "Garlic",
      chooseFour: "Banana",
      chooseCorrect: "Onion"
    },
    {
      word: "Zitrone",
      chooseOne: "Carrot",
      chooseTwo: "Apple",
      chooseThree: "Lemon",
      chooseFour: "Banana",
      chooseCorrect: "Lemon"
    },
    {
      word: "Lesen",
      chooseOne: "Read",
      chooseTwo: "Listen",
      chooseThree: "Speaking",
      chooseFour: "Writting",
      chooseCorrect: "Read"
    },
    {
      word: "Verstehe",
      chooseOne: "See",
      chooseTwo: "Understand",
      chooseThree: "Speaking",
      chooseFour: "Known",
      chooseCorrect: "Understand"
    }
  ];
 
  let answer = new Array();
  let counterTrue = 0;
  let counterFalse = 0;
  let counterQuestion = 0;
  addEventListenerToQuestion();