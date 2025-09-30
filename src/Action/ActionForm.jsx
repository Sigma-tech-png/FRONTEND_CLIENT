export async function ActionForm({ request }) {
    const formData = await request.formData();
    const name = formData.get("name");

    const res = await fetch(`${import.meta.env.VITE_API_URL}/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("Ошибка при сохранении пользователя");
    }

    const data = await res.json();
    return data;
}