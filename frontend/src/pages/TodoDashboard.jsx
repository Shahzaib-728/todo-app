import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskFilter from "../components/TaskFilter";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const TodoDashboard = ({ setIsLoggedIn }) => {
  const [tasks, setTasks] = useState([]);
  const [Filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const addTask = async (text, deadline) => {
    const res = await API.post("/todos", { text, deadline });
    setTasks((prev) => [...prev, res.data]);
  };

  const deleteTask = async (id) => {
    await API.delete(`/todos/${id}`);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    ); //toggle the completed status
  };

  const filteredTasks =
    Filter === "all" ? tasks : tasks.filter((task) => task.completed);

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task._id === id ? { ...task, text: newText } : task))
    );
  };

  const fetchTodos = async () => {
    try {
      const res = await API.get("/todos");
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchTodos();
    } else {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(null);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center">
      <div className="p-6 w-150 bg-white rounded-xl shadow-lg mx-auto mt-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">My Todos</h1>
            {/* ✅ Logout Button */}
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-sm transition-all px-2.5 py-1.5 font-sans"
            >
              LogOut
            </button>
        </div>
        <TaskContext.Provider
          value={{ addTask, deleteTask, toggleTask, updateTask }}
        >
          <TaskForm />
          <TaskFilter Filter={Filter} setFilter={setFilter} />
          <TaskList tasks={filteredTasks} />
        </TaskContext.Provider>
   
      </div>
    </div>
  );
};

export default TodoDashboard;
