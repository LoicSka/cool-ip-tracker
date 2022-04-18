import axios from "axios";
const IP_GEO_ACCESS_KEY = "7dc1484e26734a8e87f81ec5dc7cf92a";

export async function getGeolocationData(ip) {
  const { data } = await axios.get(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${IP_GEO_ACCESS_KEY}${
      ip ? `&ip=${ip}` : ""
    }`
  );
  return data;
}
