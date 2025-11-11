import Input from "@/components/Input";

export default function Home() {
  return (
    <div className="space-y-4 p-4">
      <div className="space-y-4">
        {/* 기본 입력 필드 */}
        <Input label="이름" placeholder="홍길동" />

        {/* 에러 상태 입력 필드 */}
        <Input
          label="이메일"
          type="email"
          error="올바른 이메일 형식이 아닙니다"
          variant="filled"
        />

        {/* 큰 사이즈의 비활성화된 입력 필드 */}
        <Input
          label="전화번호"
          size="lg"
          disabled
          variant="outlined"
          placeholder="010-0000-0000"
        />

        {/* 전체 너비 입력 필드 */}
        <Input label="주소" variant="outlined" />
      </div>
    </div>
  );
}
