// src/app/page.test.tsx

import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("홈페이지 테스트", () => {
  test("스토리북 버튼이 렌더링되는지 테스트", () => {
    render(<Home />);

    // 버튼이 화면에 표시되는지 확인
    const button = screen.getByRole("button", { name: "스토리북 버튼" });
    expect(button).toBeInTheDocument();
  });

  // test("네트워크 에러 발생 시 모킹 테스트", async () => {
  //   server.use(
  //     http.get("http://localhost:4000/posts/1", () => {
  //       return HttpResponse.json(null, { status: 500 });
  //     }),
  //   );

  //   render(<Home />);
  //   const errorMessage = await screen.findByText(
  //     "서버에서 데이터를 가져오는 데 실패했습니다.",
  //   );
  //   expect(errorMessage).toBeInTheDocument();
  // });
});
