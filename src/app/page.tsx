"use client";

import { useState } from "react";
import StartPage from "../components/StartPage";
import QuestionPage from "../components/QuestionPage";
import ResultPage from "../components/ResultPage";

const questions = [
  {
    question: "사람들과 함께 있을 때 에너지가 충전되나요?",
    options: ["매우 그렇다", "약간 그렇다", "약간 아니다", "전혀 아니다"],
  },
  {
    question: "새로운 아이디어를 생각하는 것을 좋아하시나요?",
    options: ["매우 그렇다", "약간 그렇다", "약간 아니다", "전혀 아니다"],
  },
  {
    question: "계획을 세우는 것을 선호하시나요?",
    options: ["매우 그렇다", "약간 그렇다", "약간 아니다", "전혀 아니다"],
  },
];

export default function MBTITest() {
  // 현재 진행 단계: 0 - 시작 페이지, 1 - 질문 페이지, 2 - 결과 페이지
  const [currentStep, setCurrentStep] = useState(0);
  // 사용자의 답변 저장
  const [answers, setAnswers] = useState<string[]>([]);

  // 시작 버튼 클릭 시 진행 단계 변경
  const handleStart = () => {
    setCurrentStep(1);
  };

  // 질문 페이지에서 답변 선택 시 호출되는 함수
  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    if (answers.length + 1 === questions.length) {
      setCurrentStep(2);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {currentStep === 0 && <StartPage onStart={handleStart} />}
      {currentStep === 1 && (
        <QuestionPage
          // 옵션 선택 시마다 애니메이션 적용을 위해 key 추가
          // key가 없으면 기존 컴포넌트를 재사용하고 props만 업데이트하기 때문
          key={answers.length}
          question={questions[answers.length]}
          onAnswer={handleAnswer}
        />
      )}
      {currentStep === 2 && <ResultPage answers={answers} />}
    </div>
  );
}
