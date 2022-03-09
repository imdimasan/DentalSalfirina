import Link from "next/link";
import MainLayout from "../layout/MainLayout";

function ErrorPage() {
  return (
    <MainLayout>
      <h1>Error 404</h1>
      <Link href={"/"}>
        <a>Go back</a>
      </Link>
    </MainLayout>
  );
}

export default ErrorPage;
