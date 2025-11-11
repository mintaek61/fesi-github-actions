export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <form className="w-full max-w-sm">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            이메일
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            placeholder="abc@gmail.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            required
          />
        </div>
        <div className="mb-5 flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="h-4 w-4 rounded-sm border border-gray-300 bg-gray-50"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            로그인 상태 유지
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
