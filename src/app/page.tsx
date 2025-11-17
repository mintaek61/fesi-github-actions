// app/page.tsx

import { Input } from "@/components/Input";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-96">
        <Input />
      </div>
    </div>
  );
}
