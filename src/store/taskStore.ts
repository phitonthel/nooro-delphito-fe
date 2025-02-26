import { create } from 'zustand';
import { getTasks, createTask, updateTask, deleteTask } from '@/lib/api';

type Task = {
  id: string;
  title: string;
  completed_status: boolean;
  color: string;
  timestamps: Date;
};

type TaskStore = {
  tasks: Task[];
  fetchTasks: () => Promise<void>;
  addTask: (title: string, color: string) => Promise<void>;
  updateTask: (id: string, title: string, color: string) => Promise<void>;
  toggleTask: (id: string) => Promise<void>;
  removeTask: (id: string) => Promise<void>;
};

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],

  fetchTasks: async () => {
    const tasks = await getTasks();
    set({ tasks });
  },

  addTask: async (title, color) => {
    const task = await createTask(title, color);
    set((state) => ({ tasks: [...state.tasks, task] }));
  },

  updateTask: async (id, title, color) => {
    await updateTask(id, title, color);

    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? { ...t, title, color } : t)),
    }));
  },

  toggleTask: async (id) => {
    const { tasks } = get();
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    const updatedTask = { ...task, completed_status: !task.completed_status };
    await updateTask(id, updatedTask.title, updatedTask.color, updatedTask.completed_status);

    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? updatedTask : t)),
    }));
  },

  removeTask: async (id) => {
    await deleteTask(id);
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) }));
  },
}));
