# Tailwind CSS v4 업그레이드 가이드

## 📌 상황 설명

Next.js 프로젝트를 `create-next-app`으로 생성하면 기본적으로 **Tailwind CSS v3**가 설치됩니다.
v4로 업그레이드할 때 발생할 수 있는 문제와 해결 방법을 정리했습니다.

---

## ⚠️ 문제 원인

### 초기 상태 (v3)

- `tailwindcss` v3 설치됨
- `tailwind.config.js` 또는 `tailwind.config.ts` 파일 존재
- `postcss.config.js`에 `tailwindcss`와 `autoprefixer` 설정
- `globals.css`에 `@tailwind` 지시어 사용

### 업그레이드 시 발생한 문제

1. `@next` 태그로 설치하면 내부 의존성 버전 불일치 발생 가능
2. `@tailwindcss/postcss@next`가 내부적으로 `@tailwindcss/node@4.1.0` 같은 다른 버전을 설치
3. API 호환성 문제로 `Missing field 'negated' on ScannerOptions.sources` 에러 발생

---

## ✅ 올바른 업그레이드 방법

### 1단계: v3 관련 파일 삭제

```bash
# tailwind.config 파일 삭제 (v4에서는 필요 없음)
rm tailwind.config.js
# 또는
rm tailwind.config.ts
```

### 2단계: v3 패키지 제거

```bash
npm uninstall tailwindcss postcss autoprefixer
```

### 3단계: v4 패키지 설치 (최신 안정 버전 사용)

```bash
# ❌ 나쁜 예: @next 태그 사용 (버전 불일치 가능)
npm install tailwindcss@next @tailwindcss/postcss@next

# ✅ 좋은 예: 최신 안정 버전 명시
npm install tailwindcss@latest @tailwindcss/postcss@latest
```

**또는 더 안전하게:**

```bash
# 구체적인 버전 번호 지정 (예: 4.1.3 이상)
npm install tailwindcss@^4.1.3 @tailwindcss/postcss@^4.1.3
```

### 4단계: PostCSS 설정 파일 생성/수정

`postcss.config.js` 파일 생성 (없는 경우) 또는 수정:

```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

**중요:** v4에서는 `autoprefixer`가 자동으로 포함되므로 별도 설정 불필요

### 5단계: globals.css 수정

`src/app/globals.css` 파일을 다음과 같이 변경:

```css
/* ❌ v3 스타일 (삭제) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ✅ v4 스타일 */
@import "tailwindcss";
```

### 6단계: 패키지 재설치 (의존성 트리 정리)

```bash
# node_modules와 lock 파일 삭제
rm -rf node_modules package-lock.json

# 재설치
npm install
```

### 7단계: 개발 서버 재시작

```bash
npm run dev
```

---

## 🔍 문제 발생 시 확인 사항

### 1. 버전 확인

```bash
npm list tailwindcss @tailwindcss/postcss
```

두 패키지가 같은 버전인지 확인하세요.

### 2. PostCSS 설정 확인

- `postcss.config.js` 파일이 프로젝트 루트에 있는지 확인
- `@tailwindcss/postcss` 플러그인이 올바르게 설정되어 있는지 확인

### 3. globals.css 확인

- `@import "tailwindcss";` 구문이 올바른지 확인
- v3 스타일의 `@tailwind` 지시어가 남아있지 않은지 확인

### 4. 에러 메시지 확인

- `Missing field 'negated' on ScannerOptions.sources`: 버전 불일치 문제
  → 해결: 최신 안정 버전으로 재설치
- `Cannot find module '@tailwindcss/postcss'`: PostCSS 설정 누락
  → 해결: `postcss.config.js` 파일 생성

---

## 📝 요약 체크리스트

- [ ] `tailwind.config.js/ts` 파일 삭제
- [ ] v3 패키지 제거 (`tailwindcss`, `postcss`, `autoprefixer`)
- [ ] v4 패키지 설치 (최신 안정 버전 사용, `@next` 피하기)
- [ ] `postcss.config.js` 파일 생성/수정
- [ ] `globals.css`에서 `@import "tailwindcss";` 사용
- [ ] `node_modules` 삭제 후 재설치
- [ ] 개발 서버 재시작

---

## 💡 팁

1. **`@next` 태그 피하기**: 최신 안정 버전(`@latest`) 또는 구체적인 버전 번호 사용
2. **의존성 트리 정리**: 업그레이드 후 `node_modules` 삭제 후 재설치 권장
3. **버전 동기화**: `tailwindcss`와 `@tailwindcss/postcss` 버전을 동일하게 유지
4. **공식 문서 참고**: [Tailwind CSS v4 공식 문서](https://tailwindcss.com/docs)에서 최신 정보 확인

---

## 🎯 권장 명령어 (한 번에 실행)

```bash
# 1. v3 파일 삭제
rm tailwind.config.js tailwind.config.ts 2>/dev/null

# 2. v3 패키지 제거
npm uninstall tailwindcss postcss autoprefixer

# 3. v4 패키지 설치 (최신 안정 버전)
npm install tailwindcss@latest @tailwindcss/postcss@latest

# 4. 의존성 트리 정리
rm -rf node_modules package-lock.json
npm install

# 5. 개발 서버 재시작
npm run dev
```

그리고 `postcss.config.js`와 `globals.css`는 수동으로 수정하세요!
