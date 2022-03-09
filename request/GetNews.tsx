import axios from "axios";

interface GetProps {
  URL: string;
  setData: any;
}

async function GetNews({ URL, setData }: GetProps) {
  const response = await axios.get(URL);
  const data = await response.data;
  setData(data);
}

export default GetNews;
