export const getGifs = async (category) => {
    const Api = `https://api.giphy.com/v1/gifs/search?api_key=xYsFUNou3I3P6jRsXffxh4thYvkrYwoP&q=${category}&limit=20`;
    const resp = await fetch(Api);
    const { data } = await resp.json();
  
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    console.log(gifs);
    return gifs;
  };