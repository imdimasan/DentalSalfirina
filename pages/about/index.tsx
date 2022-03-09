import Router from "next/router";
import MainLayout from "../../layout/MainLayout";
import Button from "../../components/Button/Button";

export default function About() {
  const linkHomePage = (): void => {
    Router.push("/");
  };
  return (
    <MainLayout title={"About page"}>
      <h1>About Page</h1>
      <Button type="button" onClick={linkHomePage}>Go home</Button>
      <Button type="button" onClick={() => Router.push("/posts")}>Go posts page</Button>
    </MainLayout>
  );
}
