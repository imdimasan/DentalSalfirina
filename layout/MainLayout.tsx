import Header from "../modules/Header";
import HeadMeta from "../modules/HeadMeta";

interface Layout {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  themecolor?: boolean;
}

function MainLayout({
  children,
  title,
  description,
  keywords,
  themecolor,
}: Layout) {
  return (
    <>
      <HeadMeta
        title={title}
        description={description}
        keywords={keywords}
        themecolor={themecolor}
      ></HeadMeta>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
}

export default MainLayout;
