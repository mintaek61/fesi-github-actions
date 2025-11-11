import * as motion from "motion/react-client";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      안녕하세요! 페이드인 효과입니다.
    </motion.div>
  );
}
