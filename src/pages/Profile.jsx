import { useLoaderData } from "react-router"

export default function Profile(){
    const loaderForm = useLoaderData()
    
    return(
        <>
            <h1>Profile</h1>

            <h1>{loaderForm.data}</h1>
            <h1>{loaderForm.name}</h1>
        </>
    )
}