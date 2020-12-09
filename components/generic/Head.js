import NextHead from 'next/head';

const Head = ({ title, description, url, noindex }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <link
        rel='canonical'
        href={process.env.NEXT_PUBLIC_SITE_URL || '' + url}
      />
      {noindex && <meta name='robots' content='noindex' />}
    </NextHead>

  )
}

export default Head
