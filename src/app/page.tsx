"use client";
import * as React from "react";
import { useScroll, useTransform, motion } from "motion/react";

const PAGE_COUNT = 5;

function ScrollLinked() {
  // 1. 현재 스크롤 위치 추적
  const { scrollYProgress } = useScroll();
  // 2. 현재 스크롤 위치를 기반으로 클립 경로 계산
  const clipPath = useTransform(
    scrollYProgress,
    scrollYProgress => `circle(${scrollYProgress * 100}%)`,
  );

  return (
    <div className="h-full w-full bg-gray-900">
      <div className="fixed inset-0">
        <motion.div
          // 원을 중앙에 위치시키기
          // absolute top-1/2 left-1/2: 요소의 왼쪽 상단 모서리를 부모 요소의 중앙점에 위치
          // -translate-x-1/2 -translate-y-1/2: 자신의 너비의 50%만큼 위, 왼쪽으로 이동
          // 텍스트 중앙 위치
          // flex items-center justify-center: 요소의 중앙에 텍스트 배치
          // h-full w-full: 요소의 높이와 너비를 100%로 설정
          // bg-orange-500: 오렌지색 배경
          className="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-orange-500"
          style={{
            clipPath,
          }}
        >
          <div className="text-center">
            <h1 className="flex flex-col gap-4 text-8xl font-bold text-blue-600">
              <span>
                <motion.span>Aha!</motion.span>
              </span>
              <span>
                <motion.span>You found me!</motion.span>
              </span>
            </h1>
          </div>
        </motion.div>
      </div>
      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div className="h-screen w-screen" key={index} />
      ))}
    </div>
  );
}

export default ScrollLinked;
