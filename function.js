function findDomElementById(pId) {
    return document.querySelector(`#${pId}`);
  }
 
  function firstEndQuestion() {
    findDomElementById("questionNumber").innerHTML =
      "QESTION: " + (counterQuestion + 1);
    counterQuestion++;
  }
 
  function addEventListenerToQuestion() {
    let chooseQuestion = findDomElementById("chooseQuestion");
    chooseQuestion.addEventListener("click", function(event) {
      let randomQuestion = Math.floor(Math.random() * 10);
      addArray(randomQuestion);
      renderQuestion(randomQuestion);
      firstEndQuestion();
    });
  }
  /**
   *
   * @param {*} questionNumber
   * 
   */
  function addArray(questionNumber) {
    let questionls = question.map(item => item);
    answer.push({
      word: questionls[questionNumber].word,
      chooseOne: questionls[questionNumber].chooseOne,
      chooseTwo: questionls[questionNumber].chooseTwo,
      chooseThree: questionls[questionNumber].chooseThree,
      chooseFour: questionls[questionNumber].chooseFour,
      chooseCorrect: questionls[questionNumber].chooseCorrect
    });
  }
  /**
   *
   * @param {*} questionNumber
   */
  function renderQuestion(questionNumber) {
    let QuestionContainer = question.map(item => {
      return (
        `<li id="${item.word}"> ${item.word}</li>` +
        `<li id="${item.chooseOne}" onclick="trueFalse('${item.chooseOne}','${item.chooseCorrect}','${item.chooseTwo}','${item.chooseThree}','${item.chooseFour}')">${item.chooseOne}</li>` +
        `<li id="${item.chooseTwo}" onclick="trueFalse('${item.chooseTwo}','${item.chooseCorrect}','${item.chooseOne}','${item.chooseThree}','${item.chooseFour}')">${item.chooseTwo}</li>` +
        `<li id="${item.chooseThree}" onclick="trueFalse('${item.chooseThree}','${item.chooseCorrect}','${item.chooseOne}','${item.chooseTwo}','${item.chooseFour}')">${item.chooseThree}</li>` +
        `<li id="${item.chooseFour}" onclick="trueFalse('${item.chooseFour}','${item.chooseCorrect}','${item.chooseOne}','${item.chooseTwo}','${item.chooseThree}')">${item.chooseFour}</li>`
      );
    });
    findDomElementById("questionContainer").innerHTML =
      QuestionContainer[questionNumber];
    findDomElementById("chooseQuestion").innerHTML = "NEXT";
  }
  /**
   *
   * @param {*} choose
   * @param {*} chooseCorrect
   * @param {*} chooseA
   * @param {*} chooseB
   * @param {*} chooseC
   */
  function trueFalse(choose, chooseCorrect, chooseA, chooseB, chooseC) {
    findCorrectChoose(choose, chooseCorrect, chooseA, chooseB, chooseC);
    findCorrectChoose(chooseA, chooseCorrect, choose, chooseB, chooseC);
    findCorrectChoose(chooseB, chooseCorrect, chooseA, choose, chooseC);
    findCorrectChoose(chooseC, chooseCorrect, chooseA, chooseB, choose);
    counterTrueFalse(choose, chooseCorrect);
    findDomElementById("scoreTrue").innerHTML = "True Score: " + counterTrue;
    findDomElementById("scoreFalse").innerHTML = "False Score: " + counterFalse;
  }
  /**
   *
   * @param {*} choose
   * @param {*} chooseCorrect
   * @param {*} chooseA
   * @param {*} chooseB
   * @param {*} chooseC
   */
  function findCorrectChoose(choose, chooseCorrect, chooseA, chooseB, chooseC) {
    if (choose === chooseCorrect) {
      document.querySelector(`#${choose}`).setAttribute("class", "yesil");
      document.querySelector(`#${chooseA}`).setAttribute("class", "kirmizi");
      document.querySelector(`#${chooseB}`).setAttribute("class", "kirmizi");
      document.querySelector(`#${chooseC}`).setAttribute("class", "kirmizi");
    }
  }
  /**
   *
   * @param {*} choose
   * @param {*} chooseCorrect
  */
  function counterTrueFalse(choose, chooseCorrect) {
    if (choose === chooseCorrect) {
      counterTrue++;
    } else {
      counterFalse++;
    }
  }
  