"use client";

import { deleteCookie, isCookieExists, setCookie } from "@/lib/cookie";
import { useEffect, useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // 1. 현재 isModalHidden 쿠키가 존재하는지 확인하세요.
    // 여기에 코드를 작성하세요.
    // 2. 쿠키가 없으면 모달을 표시하세요.
    // 여기에 코드를 작성하세요.
    const isModalHidden = isCookieExists("isModalHidden");
    if (!isModalHidden) {
      setShowModal(true);
    }
  }, []);

  const handleModalCheckboxChange = () => {
    // 3. 쿠키가 존재하면 쿠키를 삭제하세요.
    // 여기에 코드를 작성하세요.
    // 4. 쿠키가 존재하지 않으면 24시간 후 만료되는 쿠키를 설정하세요.
    // 아래에 코드를 작성하세요.
    if (isCookieExists("isModalHidden")) {
      deleteCookie("isModalHidden");
    } else {
      // 24시간 후
      const date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      setCookie("isModalHidden", "true", { expires: date, path: "/" });
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      메인 화면
      {showModal && (
        <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">안내</h2>
            <p className="mb-4">환영합니다! 이것은 모달창입니다.</p>
            <div className="flex justify-end gap-2">
              <label
                htmlFor="modalCheckbox"
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="modalCheckbox"
                  onChange={handleModalCheckboxChange}
                />
                오늘 하루 보지 않기
              </label>

              <button
                onClick={handleClose}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
