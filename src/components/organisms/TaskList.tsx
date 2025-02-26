'use client';

import { useTaskStore } from '@/store/taskStore';
import TaskItems from '../molecules/TaskItem';
import EmptyTaskState from '../atoms/EmptyTaskState';

export default function TaskList() {
  const { tasks, toggleTask, removeTask } = useTaskStore();

  return (
    <div className="w-full max-w-lg mt-6 p-4 bg-gray-900 rounded-lg shadow-md">
      {tasks.length === 0 ? <EmptyTaskState /> : <TaskItems tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />}
    </div>
  );
}