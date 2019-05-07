const apiPrefix = 'https://api.spotify.com/v1';

export default async ({
  offset,
  limit,
  q,
  token,
}) => {
  const uri = `${apiPrefix}/search?type=track&limit=${limit}&offset=${offset}&q=${encodeURIComponent(q)}`;
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const json = await res.json();

  if (!res.ok) {
    return [];
  }

  const {
    tracks: {
      items,
    }
  } = json;
  // const items = json.tracks.items;
  return items.map(item => ({
    id: item.id,
    title: item.name,
    imageUri: item.album.images
      ? item.album.images[0].url
      : undefined
  }));
};
