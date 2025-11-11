export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <button
        type="button"
        className="mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white"
      >
        Default
      </button>
      <button
        type="button"
        className="mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900"
      >
        Alternative
      </button>
      <button
        type="button"
        className="mr-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white"
      >
        Dark
      </button>
      <button
        type="button"
        className="mr-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900"
      >
        Light
      </button>
      <button
        type="button"
        className="mr-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white"
      >
        Green
      </button>
      <button
        type="button"
        className="mr-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white"
      >
        Red
      </button>
      <button
        type="button"
        className="mr-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white"
      >
        Yellow
      </button>
      <button
        type="button"
        className="mr-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white"
      >
        Purple
      </button>
    </div>
  );
}
