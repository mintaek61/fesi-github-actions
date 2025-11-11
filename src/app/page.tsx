export default function Home() {
  return (
    // divide-y: 마지막 자식을 제외한 모든 자식 요소의 아래에 구분선 생성
    // divide-gray-100: 구분선 색상
    <ul role="list" className="divide-y divide-gray-100 p-2">
      {/* flex, justify-between: 요소 배치 */}
      {/* py-5: 요소 간격 및 위아래 여백 */}
      <li className="flex justify-between py-5">
        {/* 이미지 및 프로필 */}
        {/* flex, gap-x-4: 요소 배치 */}
        {/* min-w-0이 없으면 화면이 줄어들 때 텍스트가 가려진다. */}
        <div className="flex min-w-0 gap-x-4">
          <img
            // size-12: 이미지 크기
            // rounded-full: 이미지 모서리 둥글게
            className="size-12 rounded-full"
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />

          {/* min-w-0이 없으면 자식 요소의 truncate 적용이 안됨 */}
          <div className="min-w-0">
            {/* text-sm/6: 텍스트 크기 및 높이 비율 */}
            {/* font-semibold: 텍스트 굵게 */}
            {/* text-gray-900: 텍스트 색상 */}
            <p className="text-sm/6 font-semibold text-gray-900">
              Michael Foster
            </p>
            {/* mt-1: 텍스트 위 여백 */}
            {/* truncate: 텍스트 자르기 */}
            {/* text-xs/5: 텍스트 크기 및 높이 비율 */}
            {/* text-gray-500: 텍스트 색상 */}
            <p className="mt-1 truncate text-xs/5 text-gray-500">
              michael.foster@example.com
            </p>
          </div>
        </div>
        {/* 회사 및 직책 */}
        {/* hidden: 화면 크기에 따라 요소 숨김 */}
        {/* shrink-0: 요소 크기 줄이지 않기 */}
        {/* sm:flex: 화면 크기가 sm 이상일 때 요소 표시 */}
        {/* sm:flex-col: 화면 크기가 sm 이상일 때 요소 세로 배치 */}
        {/* sm:items-end: 요소 오른쪽 정렬 */}
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="text-sm/6 text-gray-900">Co-Founder / CTO</p>
          <p className="mt-1 text-xs/5 text-gray-500">
            Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
          </p>
        </div>
      </li>
      <li className="flex justify-between py-5">
        <div className="flex min-w-0 gap-x-4">
          <img
            className="size-12 rounded-full"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="min-w-0 flex-auto">
            <p className="text-sm/6 font-semibold text-gray-900">
              Dries Vincent
            </p>
            <p className="mt-1 truncate text-xs/5 text-gray-500">
              dries.vincent@example.com
            </p>
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="text-sm/6 text-gray-900">Business Relations</p>
          {/* 온라인 상태 표시 */}
          <div className="mt-1 flex items-center gap-x-1.5">
            {/* rounded-full: 모서리 둥글게 */}
            {/* bg-emerald-500/20: 불투명도 20% 배경색 */}
            <div className="rounded-full bg-emerald-500/20 p-1">
              {/* size-1.5: 크기 */}
              {/* rounded-full: 모서리 둥글게 */}
              {/* bg-emerald-500: 색상 */}
              <div className="size-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p className="text-xs/5 text-gray-500">Online</p>
          </div>
        </div>
      </li>
    </ul>
  );
}
