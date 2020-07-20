import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const MainLayout = ({data, children}) => (
  <div>
    <Head>
      <title>Cỏ Bàng Handmade</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header menus={data.menus} />
      {children}
    </main>

    <footer>
      <Footer />
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
        margin: 0;
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

      footer {
        background: #202024;
        position: relative;
        top: 100vh;
      }

      @media (max-width: 991.98px) {
        .container {
          padding: 0px 15px;
        }
  
        .lead {
          font-size: 16px;
          line-height: 1.3em;
        }
      }
    `}</style>
  </div>
);

export default MainLayout;
