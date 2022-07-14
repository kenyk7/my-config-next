import Head from 'next/head';

const defaultTitle = 'My App';
const defaultDescription = 'My App';
const defaultTwitterImage = '';
const defaultFacebookImage = '';

type SeoProps = {
  title?: string;
  description?: string;
  twitterImg?: string;
  facebookImg?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
};

function CustomSeoHead({
  title,
  description,
  twitterImg,
  facebookImg,
  canonicalUrl,
  noIndex = false,
}: SeoProps) {
  const indexText = noIndex ? 'noindex' : 'index';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@myapp" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@myapp" />
      {twitterImg && <meta name="twitter:image" content={twitterImg} />}

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.myapp.pe/" />
      {facebookImg && <meta property="og:image" content={facebookImg} />}
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="myapp.pe" />
      <meta property="fb:admins" content="id-fb" />

      <meta name="robots" content={`${indexText}, follow`} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Head>
  );
}

CustomSeoHead.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  twitterImg: defaultTwitterImage,
  facebookImg: defaultFacebookImage,
  canonicalUrl: '',
  noIndex: false,
};

export default CustomSeoHead;
