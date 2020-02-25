import queryString from "query-string";

const buildApiUrl = query => {
  const search = queryString.stringify({
    q: query,
    api_key: process.env.GIPHY_API_KEY,
    rating: "g",
    limit: 5
  });

  return `https://api.giphy.com/v1/gifs/search?${search}`;
};

const search = query => {
  const url = buildApiUrl(query);

  return window
    .fetch(url)
    .then(response => response.json())
    .catch(console.error);
};

export default { search };
