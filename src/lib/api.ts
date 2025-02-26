const API_URL = process.env.NEXT_PUBLIC_API_URL + '/tasks';

export async function getTasks() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createTask(title: string, color: string) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, color }),
  });
  return res.json();
}

export async function updateTask(id: string, title: string, color: string, completed_status?: boolean) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, color, completed_status }),
  });
  return res.json();
}

export async function deleteTask(id: string) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}
