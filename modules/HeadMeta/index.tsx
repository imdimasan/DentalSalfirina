import Head from "next/head";

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

function HeadMeta({ title, description, keywords }: HeadProps): JSX.Element {
  return (
    <Head>
      <title>{title} 🦷 Salfirina</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
}

export default HeadMeta;
