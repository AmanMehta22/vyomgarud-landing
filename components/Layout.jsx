import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>VyomGarud - Advanced UAV Systems</title>
        <meta name="description" content="Military-grade UAV systems with precision engineering and advanced autonomy for modern defense applications." />
        <meta property="og:title" content="VyomGarud - UAV Systems" />
        <meta property="og:description" content="Military-grade UAV systems for modern defense" />
        <meta property="og:type" content="website" />
      </Head>
      {children}
    </>
  )
}

export default Layout