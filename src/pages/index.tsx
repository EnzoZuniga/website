import React from "react";

import SEO from "../components/seo";

const IndexPage: React.FC<{ location: Location }> = ({
  location,
}: {
  location: Location;
}) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     trait: file(relativePath: { eq: "trait-dessin.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 900) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     logo: file(relativePath: { eq: "logo-dessin.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 900) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <SEO
        meta={{
          "og:image":
            "https://elinoi-uploads.s3.eu-west-3.amazonaws.com/50-startups-2021-social.jpeg",//changer c'est l'image de partage
          "og:image:height": "1030",
          "og:image:secure_url":
            "https://elinoi-uploads.s3.eu-west-3.amazonaws.com/50-startups-2021-social.jpeg",//idem
          "og:image:width": "1280",
          "og:url": location.href,
        }}
        title="Home"
      />
      <section className="page index-page">

      </section>
    </>
  );
};

export default IndexPage;
