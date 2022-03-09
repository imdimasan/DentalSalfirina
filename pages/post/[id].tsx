import MainLayout from "../../layout/MainLayout";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import GetRequest from "../../request/GetRequest";
import { NextPageContext } from "next";
import { IntPost } from "../../interfaces/post";

interface PostPageProps {
  data: IntPost;
}

export default function Post({ data: serverData }: PostPageProps) {
  const basePath: string = "../images/db";
  const [data, setData] = useState(serverData);
  const router = useRouter();
  const URL: string = `${process.env.API_URL}/posts/${router.query.id}`;

  useEffect(() => {
    if (!serverData) {
      GetRequest({ URL, setData });
    }
  }, []);

  return (
    <MainLayout title={`Posts page`}>
      <h1>Post {!data ? "Loading" : data.title}</h1>
      <p>{!data ? "Loading ..." : data.body}</p>
      {!data ? "" : <img src={`${basePath}/${data.img}`} alt="" />}
    </MainLayout>
  );
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return { data: null };
  }
  const response = await axios.get(`${process.env.API_URL}/posts/${query.id}`);
  const data: IntPost = await response.data;
  return { data };
};
