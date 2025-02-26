'use client';

import SummaryItem from "../atoms/SummaryItem";

type TaskSummaryProps = {
  totalTasks: number;
  completedTasks: number;
};

export default function TaskSummary({ totalTasks, completedTasks }: TaskSummaryProps) {
  return (
    <div className="flex justify-between w-full max-w-lg mt-6 px-4">
      <SummaryItem label="Tasks" innerText={totalTasks.toString()} color="text-blue-400" />
      <SummaryItem label="Completed" innerText={`${completedTasks} of ${totalTasks}`} color="text-purple-400" />
    </div>
  );
}
