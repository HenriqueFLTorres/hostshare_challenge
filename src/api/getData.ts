export const getProperties = async () => {
  const data = await fetch(
    'https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685308258589&signature=Uwu9OZixsV6q4lIkM4RGdWT86gzpBQodVmzhbPzzAMM&downloadName=listings.json'
  );
  const notionApi = await data.json();

  return notionApi?.data?.slice(0, 30);
};

export const getUniqueProperty = async (id: string) => {
  const data = await fetch(
    'https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685308258589&signature=Uwu9OZixsV6q4lIkM4RGdWT86gzpBQodVmzhbPzzAMM&downloadName=listings.json'
  );
  const notionApi = await data.json();

  return notionApi?.data?.find((d: any) => d.info.id === id);
};

export const getCategories = async () => {
  const data = await fetch(
    'https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685308258589&signature=Uwu9OZixsV6q4lIkM4RGdWT86gzpBQodVmzhbPzzAMM&downloadName=listings.json'
  );
  const notionApi = await data.json();

  return notionApi?.categories;
};
