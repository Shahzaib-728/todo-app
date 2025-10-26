import TaskItem from "./TaskItem";

const TaskList = ({tasks}) => {

  return (
    <>
      <ul className="space-y-2">
        {/* length 0 means no task available */}
        {tasks.length === 0 ? (
          <p className="text-gray-400">No Tasks yet</p>
        ) : (
          // map through each task and render taskitem
          tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
            />
          ))
        )}
      </ul>
    </>
  );
};

export default TaskList;
