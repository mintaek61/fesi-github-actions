// src/app/page.test.tsx

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./page";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // 테스트에서 재시도 비활성화
        gcTime: Infinity, // Jest 환경에서 카비지 컬렉션을 위한 타이머 생성 방지
      },
    },
  });

const renderWithQueryClient = (component: React.ReactElement) => {
  // 각 테스트마다 새로운 QueryClient 생성하여 독립적인 상태 유지 (useState 없이)
  const testQueryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={testQueryClient}>
      {component}
    </QueryClientProvider>,
  );
};

describe("메인 페이지 테스트", () => {
  describe("데이터 렌더링 테스트", () => {
    test("로딩 상태가 올바르게 표시되는지 확인", () => {
      renderWithQueryClient(<Home />);

      const loadingElement = screen.getByText("Loading...");
      expect(loadingElement).toBeInTheDocument();
    });

    test("데이터가 성공적으로 로드되고 표시되는지 확인", async () => {
      // 실제 API 호출 방지를 위한 모킹
      // 모킹을 하지 않으면 어떻게 서버를 켜야만 테스트가 동작합니다.
      const mockedPosts = [
        { id: 1, title: "테스트 제목", body: "테스트 본문" },
        { id: 2, title: "두번째 제목", body: "두번째 본문" },
      ];

      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockedPosts),
      });

      renderWithQueryClient(<Home />);

      await waitFor(() => {
        // li 요소가 올바르게 렌더링되었는지 확인
        const postItems = screen.getAllByRole("listitem");
        // li 요소의 개수가 mockedPosts의 데이터 개수와 일치하는지 확인
        expect(postItems).toHaveLength(mockedPosts.length);
        // 각 포스트의 제목이 올바르게 표시되는지 확인
        expect(screen.getByText("1: 테스트 제목")).toBeInTheDocument();
        expect(screen.getByText("2: 두번째 제목")).toBeInTheDocument();
      });
    });

    test("API 호출 실패 시 에러 상태가 올바르게 표시되는지 확인", async () => {
      // API 호출 실패를 모킹
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
      });

      renderWithQueryClient(<Home />);

      await waitFor(() => {
        const errorElement = screen.getByText(
          "서버에서 데이터를 가져오는 데 실패했습니다.",
        );
        expect(errorElement).toBeInTheDocument();
      });
    });
  });

  describe("게시물 생성 테스트", () => {
    test("새 게시물이 성공적으로 생성되는지 확인", async () => {
      const mockedPosts = [
        { id: 1, title: "테스트 제목", body: "테스트 본문" },
        { id: 2, title: "두번째 제목", body: "두번째 본문" },
      ];

      const newPost = { id: 3, title: "새로운 제목", body: "새로운 본문" };

      global.fetch = jest
        .fn()
        // 첫 번째: GET 요청
        .mockResolvedValueOnce({
          ok: true,
          json: jest.fn().mockResolvedValueOnce(mockedPosts),
        });

      renderWithQueryClient(<Home />);

      await waitFor(() => {
        // li 요소가 올바르게 렌더링되었는지 확인
        const postItems = screen.getAllByRole("listitem");
        // li 요소의 개수가 mockedPosts의 데이터 개수와 일치하는지 확인
        expect(postItems).toHaveLength(mockedPosts.length);
        // 각 포스트의 제목이 올바르게 표시되는지 확인
        expect(screen.getByText("1: 테스트 제목")).toBeInTheDocument();
        expect(screen.getByText("2: 두번째 제목")).toBeInTheDocument();
      });

      // 폼 입력 및 제출
      const titleInput = screen.getByLabelText("제목");
      const bodyInput = screen.getByLabelText("본문");
      const submitButton = screen.getByRole("button", { name: "제출" });

      // 입력값 설정
      fireEvent.change(titleInput, { target: { value: "새로운 제목" } });
      fireEvent.change(bodyInput, { target: { value: "새로운 본문" } });

      // 두 번째: POST 요청
      global.fetch = jest
        .fn()
        .mockResolvedValueOnce({
          ok: true,
          json: jest.fn().mockResolvedValueOnce(newPost),
        })
        .mockResolvedValueOnce({
          // 세 번째: invalidateQueries 후 GET 요청
          ok: true,
          json: jest.fn().mockResolvedValueOnce([...mockedPosts, newPost]),
        });
      fireEvent.click(submitButton);

      // 새 게시물이 추가되었는지 확인
      await waitFor(() => {
        const postItems = screen.getAllByRole("listitem");
        expect(postItems).toHaveLength(mockedPosts.length + 1); // 기존 2개 + 새로 추가된 1개
        // 새 게시물의 제목과 본문이 올바르게 표시되는지 확인
        expect(screen.getByText("3: 새로운 제목")).toBeInTheDocument();
        expect(screen.getByText("새로운 본문")).toBeInTheDocument();
      });
    });
  });
});
