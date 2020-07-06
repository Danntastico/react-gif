export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=uqsgF6cjuTOHpfkOxFClvA01Pes9eGbo&q=${encodeURI(
    category
  )}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images.downsized_medium.url,
    };
  });
  return gifs;
};
