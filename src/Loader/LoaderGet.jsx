export async function LoaderGet() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/get`,{
        method:"GET",
    })

    const data = await res.json();
    return data;
}