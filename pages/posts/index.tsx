import MainLayout from "../../layout/MainLayout";
import { useEffect, useState } from "react";
import GetRequest from "../../request/GetRequest";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import classes from "../../styles/posts.module.scss";
import { IntPost } from "../../interfaces/post";
import { NextPageContext } from "next";

interface PostPageProps {
  data: IntPost[];
}

export default function Posts({ data: serverData }: PostPageProps) {
  const URL: string = `${process.env.API_URL}/posts`;
  const [data, setData] = useState(serverData);
  const basePath: string = "/images/db";

  useEffect(() => {
    if (!serverData) {
      GetRequest({ URL, setData });
    }
  }, []);

  return (
    <MainLayout title={"Posts page"} description={"Description for posts page"}>
      <h1>Post Page</h1>

      <div className="flex">
        {!data ? (
          <p>Loading ...</p>
        ) : (
          data.map((post) => (
            <div key={post.id} className={classes.post__container}>
              <Link href={"/post/[id]"} as={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
              <p>{post.body}</p>
              <div className={classes.image__container}>
                <Link href={"/post/[id]"} as={`/post/${post.id}`}>
                  <a>
                    <Image
                      src={`${basePath}/${post.img}`}
                      width={1200}
                      height={630}
                      layout="responsive"
                      quality={50}
                      alt="Picture of the author"
                    />
                  </a>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { data: null };
  }
  const response = await axios.get(`${process.env.API_URL}/posts`);
  const data: IntPost[] = await response.data;
  return { data };
};
