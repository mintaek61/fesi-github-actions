// src/components/Input/index.test.tsx

import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from ".";

test("Input 컴포넌트 미입력 시 X 버튼이 보이지 않아야 한다.", () => {
  render(<Input />);

  const input = screen.getByRole("textbox");
  // get은 없으면 에러나지만, query는 없으면 null를 반환한다.
  const deleteButton = screen.queryByRole("button", { name: "입력값 지우기" });

  // 입력값이 없고,
  expect(input).toHaveValue("");
  // X 버튼이 보이지 않아야 한다.
  expect(deleteButton).not.toBeInTheDocument();
});

test("Input 컴포넌트 입력 시 X 버튼이 보여야 한다.", () => {
  render(<Input defaultValue="입력값" />);

  const input = screen.getByRole("textbox");
  // get은 없으면 에러나지만, query는 없으면 null를 반환한다.
  const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

  // 입력값이 없고,
  expect(input).toHaveValue("입력값");
  // X 버튼이 보이지 않아야 한다.
  expect(deleteButton).toBeInTheDocument();
});

test("X 버튼 클릭 시 입력값이 지워지는지 테스트", () => {
  render(<Input defaultValue="입력값" />);
  const input = screen.getByRole("textbox");
  const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

  fireEvent.click(deleteButton);

  expect(input).toHaveValue("");
  expect(deleteButton).not.toBeInTheDocument();
});
