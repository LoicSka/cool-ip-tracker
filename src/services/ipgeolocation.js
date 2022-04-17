import axios from "axios";
const IP_GEO_ACCESS_KEY = "d712c838b00e4d5e8d71c85d74754b71";

export async function getGeolocationData(ip) {
  const { data } = await axios.get(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${IP_GEO_ACCESS_KEY}${
      ip ? `&ip=${ip}` : ""
    }`
  );
  return data;
}
