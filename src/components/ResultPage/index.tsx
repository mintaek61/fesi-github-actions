"use client";

import { motion } from "motion/react";

export default function ResultPage({ answers }: { answers: string[] }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="mb-6 text-3xl font-bold"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        테스트 결과
      </motion.h2>
      <motion.div
        className="rounded-lg bg-white p-6 shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {answers.map((answer, index) => (
          <motion.p
            key={index}
            className="mb-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            질문 {index + 1}: {answer}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}
