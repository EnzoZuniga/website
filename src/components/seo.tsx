import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

function SEO({
  description,
  meta,
  title,
}: {
  description?: string;
  meta?: { [key: string]: string };
  title?: string;
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  // tslint:disable-next-line: array-type
  const metaArray: Array<{
    content: string;
    property: string;
  }> = Object.entries({
    description: metaDescription,
    "og:description": metaDescription,
    "og:title": site.siteMetadata.title,
    "og:type": "website",
    "twitter:card": "summary",
    "twitter:creator": site.siteMetadata.author,
    "twitter:description": metaDescription,
    "twitter:title": site.siteMetadata.title,
    ...meta,
  }).map((e: any) => ({ content: e[1], property: e[0] }));

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaArray}
    >
      <meta name="description" content={metaDescription} />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      {metaArray.map((e: { content: string; property: string }, i: number) => (
        <meta {...e} key={i} />
      ))}
    </Helmet>
  );
}

export default SEO;
