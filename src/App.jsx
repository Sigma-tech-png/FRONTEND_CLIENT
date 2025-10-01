import { useActionData , Form, useNavigate } from "react-router"

export default function App(){
  const ActionData = useActionData();
  const nav = useNavigate()

  return(
    <>
      <Form method="post">
        <input type="text" name="name" placeholder="Enter your name..."/>
        <button>Save</button>
      </Form>

      <button onClick={() => nav("/profile")}>Go profile</button>

      {ActionData && (
  <h1>{ActionData.name}</h1>
    )}
    </>
  )
}