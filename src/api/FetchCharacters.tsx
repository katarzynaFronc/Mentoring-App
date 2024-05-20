export const FetchCharacters = async () => {
  const baseUrl = "https://api.disneyapi.dev/character";

  try {
    const response = await (await fetch(baseUrl)).json();
    const characters = response.data;
    console.log(characters);
    return characters;
  } catch (error) {
    console.log(error);
  }
};
