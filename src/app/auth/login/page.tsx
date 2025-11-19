// src/app/auth/login/page.tsx
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <h1>로그인 페이지</h1>
      <Link href="/auth/signup">회원가입 페이지로 이동</Link>
    </>
  );
}
