export default async function customFetch(
  url: string,
  options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Ha ocurrido un error");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
