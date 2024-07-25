import axios, { AxiosResponse } from "axios";

interface GetDataResponse {
  [key: string]: any;
}

export async function getData(endpoint: string): Promise<GetDataResponse> {
  try {
    const response: AxiosResponse<GetDataResponse> = await axios.get(endpoint);
    console.log("res= ", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
