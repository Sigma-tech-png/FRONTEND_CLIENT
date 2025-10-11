import { useActionData, Form, useNavigate, useLoaderData } from "react-router";

export default function App() {
  const ActionData = useActionData();
  const nav = useNavigate();
  const users = useLoaderData();

  return (
    <>
      <Form method="post">
        <input type="text" name="name" placeholder="Enter your name..." />
        <button>Save</button>
      </Form>

      <button onClick={() => nav("/profile")}>Go profile</button>

      {ActionData && <h1>{ActionData.name}</h1>}

      {Array.isArray(users) && users.map(user => (
        <h2 key={user._id}>{user.name}</h2>
      ))}
    </>
  );
}