import { NextSeo } from "next-seo";

export default function about() {
  const SEO = {
    title: "RB Dream | About",
    description: "Learn more about the team behind RB Dream",
  };

  return (
    <>
      <NextSeo {...SEO} />
      <h1>This is the About Page</h1>
    </>
  );
}
