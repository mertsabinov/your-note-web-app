export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  createdAt: string;
  lastLogin: string;
  notes: Note[];
};

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
};
