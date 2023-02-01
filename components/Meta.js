import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Le blog Dev, pour les passionnés du web",
  description: "Apprendre et comprendre le déveppement, javascript, react, ...",
};

export default Meta;
