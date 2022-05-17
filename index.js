const questions = {
  1: {
    Q: "당신의 피부색은 어떤가요?",
    A: {
      a: ["밝은 편이다", 2],
      b: ["어두운 편이다", 3],
    },
  },
  2: {
    Q: "당신의 눈동자 색은  어떤가요?",
    A: {
      a: ["밝은 편이다", 4],
      b: ["어두운 편이다", 3],
    },
  },
  3: {
    Q: "색조 화장을 할 때, 핑크와 코랄 중 어떤것이 더 잘 어울리나요?",
    A: {
      a: ["핑크색", 4],
      b: ["코랄색", 5],
    },
  },
  4: {
    Q: "검은 옷을 입었을 때는 어떤가요?",
    A: {
      a: ["이목구비가 뚜렷해보인다", 7],
      b: ["낯빛이 어두워보인다", 6],
    },
  },
  5: {
    Q: "당신에게 잘 어울리는 액세서리 컬러는?",
    A: {
      a: ["골드 제품", 8],
      b: ["실버 제품", 6],
    },
  },
  6: {
    Q: "차분한 색(황토색, 겨자색, 이끼색, 적갈색 등)이 잘 어울리나요?",
    A: {
      a: ["잘 어울린다", 8],
      b: ["잘 어울리지 않는다", 9],
    },
  },
  7: {
    Q: "눈썹의 진하기는 어떤가요?",
    A: {
      a: ["연한 편이다/보통이다", 8],
      b: ["진한 편이다", 10], ////////////////////////////////////////////////////////////????????
    },
  },
  8: {
    Q: "당신의 피부는 자외선에 노출되면 어떻게 되나요?",
    A: {
      a: ["잘 탄다", 9],
      b: ["잘 타지 않는다", 11],
    },
  },
  9: {
    Q: "당신의 이미지는?",
    A: {
      a: ["부드럽고 따뜻한 이미지", 12],
      b: ["강하고 차가운 이미지", 10],
    },
  },
  10: {
    Q: "잘 어울리는 색은 어느 쪽인가요?",
    A: {
      a: ["선명한 원색", 13],
      b: ["부드러운 파스텔 색", 14],
    },
  },
  11: {
    Q: "당신의 헤어 컬러는 어떤가요?",
    A: {
      a: ["진한 갈색, 진한 검정", 14],
      b: ["밝은 갈색, 부드러운 검정", 9],
    },
  },
  12: {
    Q: "명도와 채도가 높은 옷이 잘 어울리나요?",
    A: {
      a: ["그렇다", "봄 웜톤"],
      b: ["그렇지 않다", "가을 웜톤"],
    },
  },
  13: {
    Q: "당신에게 잘 어울리는 스웨터 색은?",
    A: {
      a: ["노란 기가 있는 따뜻한 색", 12],
      b: ["푸른 기가 있는 차가운 색", "여름 쿨톤"],
    },
  },
  14: {
    Q: "당신이 어두운 색 정장을 입는다면 어울리는 색은?",
    A: {
      a: ["검정, 회색 계열", "겨울 쿨톤"],
      b: ["다크브라운 계열", "가을 웜톤"],
    },
  },
};

const body = document.body
const startBtn = document.querySelector(".startBtn");
const title = document.querySelector(".title");
const container = document.querySelector(".container");
const question = document.querySelector(".question");
const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttonTwo");
const resultContainer = document.querySelector(".resultContainer");

let questionIdx = 1;
let result = "";

console.log(startBtn);
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  container.style.display = "block";
});

// container.style.background = "";

question.innerText = questions[questionIdx]["Q"];

buttonOne.innerText = questions[questionIdx]["A"]["a"][0];
buttonTwo.innerText = questions[questionIdx]["A"]["b"][0];

buttonOne.addEventListener("click", () => {
  const nextQuestionIdx = questions[questionIdx]["A"]["a"][1];
  if (Number.isInteger(nextQuestionIdx)) {
    console.log(nextQuestionIdx);
    question.innerText = questions[nextQuestionIdx]["Q"];
    buttonOne.innerText = questions[nextQuestionIdx]["A"]["a"][0];
    buttonTwo.innerText = questions[nextQuestionIdx]["A"]["b"][0];
    questionIdx = nextQuestionIdx;
    changeBackground(questionIdx);
  } else {
    console.log(nextQuestionIdx);
    container.style.display = "none";
    resultContainer.style.display = "block";
  }
});

buttonTwo.addEventListener("click", () => {
  const nextQuestionIdx = questions[questionIdx]["A"]["b"][1];
  if (Number.isInteger(nextQuestionIdx)) {
    console.log(nextQuestionIdx);
    question.innerText = questions[nextQuestionIdx]["Q"];
    buttonOne.innerText = questions[nextQuestionIdx]["A"]["a"][0];
    buttonTwo.innerText = questions[nextQuestionIdx]["A"]["b"][0];
    questionIdx = nextQuestionIdx;
    changeBackground(questionIdx);
  } else {
    console.log(nextQuestionIdx);
    container.style.display = "none";
    resultContainer.style.display = "block";
  }
});

function changeBackground(questionIdx) {
  if (questionIdx == 3) {
    container.style.background = "linear-gradient(90deg, #FAB1BE 50%, #EC685B 50%)";
  } else if (questionIdx == 5) {
    container.style.background = "linear-gradient(90deg, #E7BA1F 50%, #C0C0C0 50%)";
  } else if (questionIdx == 6) {
    container.style.background = "linear-gradient(90deg, #C68A12 25% , #999400 25% 50%, #98A16A 50% 75%, #8E0023 75% )";
  } else if (questionIdx == 10) {
    container.style.background = "linear-gradient(90deg, #EC3829 10%, #D21C7D 10% 20%, #FEFB54 20% 30%, #71FA4C 30% 40%, #3E91F7 40% 50%, #EF404A 50% 60%, #F2728C 60% 70%, #FFD400 70% 80%, #80B463 80% 90%, #27AAE1 90%)";
  } else if (questionIdx == 11) {
    container.style.background = "linear-gradient(90deg, #42271B 25%, #211919 25% 50%, #935939 50% 75%, #322B24 75%)";
  } else if (questionIdx == 13) {
    container.style.background = "linear-gradient(90deg, #FBC837 50%, #007DB7 50%)";
  } else if (questionIdx == 14) {
    container.style.background = "linear-gradient(90deg, #38342F 50%, #574539 50%)";
  } else {
    container.style.background = "#ecf0f1";
  }
}
