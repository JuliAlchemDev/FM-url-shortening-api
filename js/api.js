export async function getData(inputUrl) {
  try {
    const response = await fetch(
      `https://is.gd/create.php?format=json&url=${encodeURIComponent(inputUrl)}`,
    );
    const data = await response.json();
    return data.shorturl;
  } catch (error) {
    console.error(error);
  }
}
