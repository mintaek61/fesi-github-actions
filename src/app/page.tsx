import Link from "next/link";

function Hamburger() {
  return (
    <svg
      className="h-6 w-6 text-gray-800"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 17 14"
    >
      <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
    </svg>
  );
}

export default async function Home() {
  return (
    <>
      {/* 데스크탑 버전 메뉴 */}
      <div className="hidden items-center gap-4 md:flex">
        <Link href="/">코드잇 단기심화</Link>
        <Link href="/bootcamp">부트캠프</Link>
        <Link href="/job-support">취업 지원</Link>
        <Link href="/blog">후기&블로그</Link>
      </div>
      {/* 모바일 버전 메뉴 */}
      <div className="block md:hidden">
        <Hamburger />
      </div>
    </>
  );
}
