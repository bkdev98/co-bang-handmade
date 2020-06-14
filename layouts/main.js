import Head from 'next/head'

import Header from '../components/header'

const MainLayout = ({children}) => (
  <div>
    <Head>
      <title>Cỏ Bàng Handmade</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header />
      {children}
    </main>

    <footer>
      
    </footer>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Barlow', sans-serif;
        color: #212529;
      }

      b, strong {
        font-weight: 700;
      }

      * {
        box-sizing: border-box;
      }

      .container {
        margin: 0px auto;
        padding: 0px 30px;
        max-width: 1260px;
      }

      .lead {
        font-size: 18px;
        line-height: 1.5em;
        font-weight: 300;
      }
    `}</style>
  </div>
);

export default MainLayout;
