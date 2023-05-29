import { cache } from 'react';
import data from './data.json';

type dataFile = {
    data: any[],
    categories: any[]
}

export const getProperties = cache(async () => {
  //   const data = await fetch(
  //     'https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685308258589&signature=Uwu9OZixsV6q4lIkM4RGdWT86gzpBQodVmzhbPzzAMM&downloadName=listings.json'
  //   );
  //   const notionApi = await data.json();

  return (data as dataFile)?.data?.slice(0, 30);
});

export const getUniqueProperty = cache(async (id: string) => {
  //   const data = await fetch(
  //     'https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685308258589&signature=Uwu9OZixsV6q4lIkM4RGdWT86gzpBQodVmzhbPzzAMM&downloadName=listings.json'
  //   );
  //   const notionApi = await data.json();

  return (data as dataFile)?.data?.find((d: any) => d.info.id === id);
});

export const getCategories = cache(async () => {
  //   const data = await fetch(
  //     'https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685308258589&signature=Uwu9OZixsV6q4lIkM4RGdWT86gzpBQodVmzhbPzzAMM&downloadName=listings.json'
  //   );
  //   const notionApi = await data.json();

  return (data as dataFile)?.categories;
});
