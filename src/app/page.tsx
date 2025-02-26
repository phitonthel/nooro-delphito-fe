'use client';

import { useTaskStore } from '../store/taskStore';
import AppHeader from '@/components/atoms/AppHeader';
import ButtonLink from '@/components/atoms/ButtonLink';
import TaskSummary from '@/components/molecules/TaskSummary';
import TaskList from '@/components/organisms/TaskList';
import { useEffect } from 'react';

export default function HomePage() {
  const { fetchTasks, tasks } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, []);

  const completedTasks = tasks.filter((task) => task.completed_status).length;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <AppHeader text="🚀 Todo App" />

      <div className="mt-6">
        <ButtonLink href="/task-form">Create Task +</ButtonLink>
      </div>

      <TaskSummary totalTasks={tasks.length} completedTasks={completedTasks} />

      <TaskList />
    </div>
  );
}
