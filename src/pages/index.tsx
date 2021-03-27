import anime from "animejs";
import cx from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useForm from "react-hook-form";
import LinkedInTag from "react-linkedin-insight";
import * as yup from "yup";
import { ShareModalOpen } from "../components/header";

import SEO from "../components/seo";
import { FormDataProps, sendDataToApi } from "../helpers/client";
import { eventDispatcher } from "../helpers/eventDispatcher";

const fieldTrans: { [key: string]: string } = {
  email: "Email",
  firstname: "Prénom",
  lastname: "Nom",
};

const linkToPdf = process.env.GATSBY_PDF_LINK;

yup.setLocale({
  mixed: {
    required: ({ path }: Partial<yup.TestMessageParams>) =>
      path && `Le champ ${fieldTrans[path]} est obligatoire.`,
  },
  string: {
    email: ({ value }: Partial<yup.TestMessageParams>) =>
      `L'email "${value}" n'est pas un email valide.`,
  },
});

const VallidationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
});

const IndexPage: React.FC<{ location: Location }> = ({
  location,
}: {
  location: Location;
}) => {
  const data = useStaticQuery(graphql`
    query {
      trait: file(relativePath: { eq: "trait-dessin.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "logo-dessin.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

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
