import { useActionData , Form } from "react-router"

export default function App(){
  const ActionData = useActionData();

  return(
    <>
      <Form method="post">
        <input type="text" name="name" placeholder="Enter your name..."/>
        <button>Save</button>
      </Form>

      {ActionData && (
  <h1>{ActionData.name}</h1>
)}
    </>
  )
}