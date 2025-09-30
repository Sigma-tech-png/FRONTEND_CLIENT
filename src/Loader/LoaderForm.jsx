export async function LoaderForm() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/profile`,{
        method:"GET",
        credentials:"include"
    })

    const data = await res.json()
    return data
}