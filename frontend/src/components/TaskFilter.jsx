export default function TaskFilter({ Filter, setFilter }) {
  return (
    <div className="flex space-x-2 mb-4 mt-4">
      <button
        onClick={() => setFilter("all")}
        className={`px-3 py-1 rounded-lg ${
          Filter === "all"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`px-3 py-1 rounded-lg ${
          Filter === "completed"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Completed
      </button>
    </div>
  );
}
