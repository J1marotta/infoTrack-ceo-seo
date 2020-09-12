import Head from 'next/head'


const Meta = () => (
  <Head>
    <link rel='icon' href='/favicon.ico' />
    <title>CEO SEO</ title>
    <meta
      name='description'
      content='Business or fancy Seo Checker.'
    />

    <meta property='og:image' content='/infoTrackLogo.jpg' />
    <meta property='og:image:width' content='200px' />
    <meta property='og:image:height' content='150px' />

    <meta property='og:image:type' content='image/png' />
    <meta property='og:image:alt' content='InfoTrack with Yellow semi circle' />

    <meta name='og:title' content={'Business or Fancy Seo Checker'} />
    <meta name='twitter:card' content='summary_large_image' />
  </Head>
)

export default Meta