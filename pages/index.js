import { Check } from 'react-feather'
import { Container, Row, Col } from 'react-grid-system'
import { useQuery } from '@apollo/client'

import { initializeApollo } from '../lib/apolloClient'
import { CATEGORIES_QUERY, categoryQueryVars } from '../graphql/queries'

import Divider from '../components/divider'
import Card from '../components/card'
import Button from '../components/button'

function FeaturedCategories() {
  const { data } = useQuery(
    CATEGORIES_QUERY,
    {
      variables: categoryQueryVars,
      notifyOnNetworkStatusChange: true,
    }
  )

  return (
    <>
      <Container fluid>
        <Row gutterWidth={15} style={{marginLeft: -20, marginRight: -20}}>
          {data.categories.edges.map(({node}) => (
            <Col lg={3} sm={6} xs={6} style={{marginBottom: 15}} key={node.id}>
              <Card type="category" image={node.backgroundImage.url} title={node.name.toUpperCase()} />
            </Col>
          ))}
        </Row>
      </Container>
      <div className="category-action"><Button label="Tất cả Danh mục" /></div>
      <style jsx>{`
        .category-action {
          padding-top: 2rem;
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default function Home() {
  return (
    <div>
      <section className="section-home-hero">
        <div className="home-hero-img" />
      </section>
      <section className="section-home-features">
        <div className="container">
          <Container fluid>
            <Row>
              <Col lg={3} xs={6}>
                <div className="home-features-item">
                  <div className="home-features-item-icon">
                    <Check size={16} />
                  </div>
                  <div className="home-features-item-label">
                    Chất liệu thiên nhiên
                  </div>
                </div>
              </Col>
              <Col lg={3} xs={6}>
                <div className="home-features-item">
                  <div className="home-features-item-icon">
                    <Check size={16} />
                  </div>
                  <div className="home-features-item-label">
                    Thân thiện môi trường
                  </div>
                </div>
              </Col>
              <Col lg={3} xs={6}>
                <div className="home-features-item">
                  <div className="home-features-item-icon">
                    <Check size={16} />
                  </div>
                  <div className="home-features-item-label">
                    Sản xuất thủ công
                  </div>
                </div>
              </Col>
              <Col lg={3} xs={6}>
                <div className="home-features-item">
                  <div className="home-features-item-icon">
                    <Check size={16} />
                  </div>
                  <div className="home-features-item-label">
                    Giao hàng tận nơi
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="section-home-menu">
        <div className="home-menu-branches">
          <div className="home-menu-branches-img" />
        </div>
        <div className="home-menu-list">
          <div className="container">
            <div className="home-menu-content">
              <h2 className="home-menu-heading">
                Chung tay Bảo vệ Môi Trường Xanh
              </h2>
              <Divider />
              <div className="lead home-menu-lead">
                <p>Lorem id consequat enim tempor do minim. Eiusmod ea tempor do nisi sint voluptate sunt anim esse duis duis pariatur voluptate.</p>
                <p>Et esse magna elit consectetur incididunt adipisicing. Nisi occaecat amet pariatur labore in culpa deserunt culpa in in aliqua esse id. Velit Lorem Lorem fugiat magna labore dolore cupidatat cupidatat ipsum. In quis et eiusmod enim fugiat ea.</p>
              </div>
            </div>
            <FeaturedCategories />
          </div>
          <div className="container">
            <div className="home-menu-products">
              <div className="home-menu-products-bg">
                <div className="home-menu-products-overlay" />
                <div className="home-menu-products-inner">
                  <h2 className="home-menu-subheading">Sản phẩm được hoàn thiện với chất lượng tốt nhất</h2>
                  <div className="category-action"><Button label="Tất cả Sản phẩm" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-home-about">
        <div className="home-about-bg">
          <div className="home-about-overlay" />
          <div className="home-about-inner">
            <div className="container">
              <Col lg={6} md={8} sm={10} xs={12}>
                <h2 className="home-about-heading">Khát khao về một hành tinh xanh</h2>
                <div style={{display: 'inline-block'}}><Divider color="#fff" /></div>
                <div className="home-about-text">
                  <p>Consequat dolor amet quis cillum culpa est aute eiusmod consectetur. Non anim Lorem commodo consequat excepteur excepteur do. Cupidatat consequat mollit veniam ipsum adipisicing aliquip mollit amet aliqua. Exercitation duis commodo sit excepteur.</p>
                </div>
                <Button label="Câu chuyện của chúng tôi" />
              </Col>
            </div>
          </div>
        </div>
      </section>
      <section className="section-home-testimonials">
        <div className="home-testimonials-bg">
          <div className="home-testimonials-inner">
            <div className="container">
              <div className="home-testimonial-slide">
                <blockquote className="home-testimonials-quote">
                  "Veniam cillum aliqua non velit quis magna proident. Excepteur esse ut occaecat ea esse veniam dolor eiusmod quis dolor dolor amet voluptate. Officia ex dolor in laboris ex anim elit id. Qui dolore ipsum do reprehenderit aliquip. Incididunt eu ut id duis."
                </blockquote>
                <h6 className="home-testimonials-cite">- Quoc Khanh</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-home-news">
        <div className="home-news-bg">
          <div className="home-news-inner">
            <div className="container">
              <div className="home-news-content">
                <h2>Xây dựng một phong cách sống mới</h2>
                <Divider color="#fff" />
                <p>Velit sunt reprehenderit occaecat dolor tempor ex id. Officia ullamco deserunt labore deserunt. In deserunt nisi laboris incididunt non esse veniam sunt. Dolor esse dolor aliqua eu nostrud.</p>
                <Container fluid>
                  <Row gutterWidth={15} style={{marginLeft: -20, marginRight: -20}}>
                    <Col lg={3} sm={6} xs={12} style={{marginBottom: 15}}>
                      <Card type="article" image="/images/article-1.jpg" title="Proident cupidatat dolor et officia voluptate" tag="Cupidatat" />
                    </Col>
                    <Col lg={3} sm={6} xs={12} style={{marginBottom: 15}}>
                      <Card type="article" image="/images/article-2.jpg" title="Est et ut deserunt commodo reprehenderit" tag="Commodo" />
                    </Col>
                    <Col lg={3} sm={6} xs={12} style={{marginBottom: 15}}>
                      <Card type="article" image="/images/article-3.jpg" title="Minim cillum laboris deserunt esse amet sit duis" tag="Laboris" />
                    </Col>
                    <Col lg={3} sm={6} xs={12} style={{marginBottom: 15}}>
                      <Card type="article" image="/images/article-4.jpg" title="Incididunt velit est duis ea sint deserunt quis officia occaecat" tag="Est Duis" />
                    </Col>
                  </Row>
                </Container>
                <Button label="Tất cả Bài viết" style={{marginTop: 15}} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-home-gift">
        <div className="home-gift-bg">
          <div className="home-gift-inner">
            <div className="container">
              <Container fluid>
                <Row style={{alignItems: 'center'}}>
                  <Col md={3}>
                    <h2 className="home-gift-heading">Món quà dành cho người bạn yêu thương</h2>
                  </Col>
                  <Col md={6}>
                    <div className="home-gift-text">
                      Nisi nisi labore elit aliquip irure esse. Nostrud irure esse adipisicing ex qui. Adipisicing in amet adipisicing laborum laborum consequat ea ex labore qui mollit anim.
                    </div>
                  </Col>
                  <Col md={3} style={{textAlign: 'right'}}>
                    <Button type="secondary" label="Mua Thẻ quà tặng" />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .section-home-hero {
          position: relative;
          background-color: #202024;
        }
        .home-hero-img {
          background-image: url(/images/hero-img.jpg);
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          width: 100%;
          height: 100vh;
          display: block;
        }
        .section-home-features {
          position: absolute;
          bottom: 0;
          z-index: 2;
          width: 100%;
          padding-top: .5rem;
          padding-bottom: .5rem;
          background-color: #202024;
          color: #212529;
        }
        .section-home-features .container {
          padding-left: 30px;
          padding-right: 30px;
          margin-right: auto;
          margin-left: auto;
          max-width: 1260px;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
        }
        .col {
          flex: 0 0 25%;
          max-width: 25%;
          position: relative;
        }
        .home-features-item {
          display: flex;
          padding: 1rem 0;
          justify-content: center;
          align-items: center;
          flex: 1;
        }
        .home-features-item-icon {
          width: 20px;
          height: 20px;
          border-radius: 10px;
          margin-right: .5em;
          position: relative;
          background-color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .home-features-item-label {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: #ffffff;
        }
        .section-home-menu {
          background: #fff;
          position: relative;
          top: 100vh;
          padding-top: 6rem;
          padding-bottom: 6rem;
        }
        .home-menu-branches {
          position: absolute;
          top: 1rem;
          z-index: 0;
          width: 100%;
        }
        .home-menu-branches-img {
          width: 500px;
          height: 757px;
          background-size: contain;
          max-width: 100%;
          opacity: .8;
          background-image: url(/images/branch-1.png);
        }
        .home-menu-content {
          text-align: center;
        }
        .home-menu-heading {
          font-size: 42px;
          margin-bottom: 1.5rem;
          color: #577941;
          font-weight: 600;
        }
        .home-menu-lead {
          margin: 1rem auto 2rem;
          max-width: 40em;
        }
        .home-menu-list {
          position: relative;
        }
        .category-action {
          padding-top: 2rem;
          text-align: center;
        }
        .home-menu-products {
          padding-top: 6rem;
          position: relative;
        }
        .home-menu-products-inner {
          padding-top: 8rem;
          padding-bottom: 10rem;
          position: relative;
          text-align: center;
        }
        .home-menu-products-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-color: #202024;
          opacity: .5;
        }
        .home-menu-subheading {
          color: #fff;
          font-size: 32px;
          padding-top: 1rem;
          font-weight: 500;
          letter-spacing: .05em;
          margin-bottom: 0;
        }
        .home-menu-products-bg {
          background-image: url(/images/product-menu.jpg);
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;          
        }
        .section-home-about {
          background-color: #202024;
          position: relative;
          top: 100vh;
        }
        .home-about-bg {
          background-image: url(/images/passion.jpg);
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;   
        }
        .home-about-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-color: #202024;
          opacity: .5;
          z-index: 0;
        }
        .home-about-inner {
          padding: 6rem 0px;
          position: relative;
        }
        .home-about-col {
          max-width: 41.6666666667%;
        }
        .home-about-heading {
          color: #fff;
          font-size: 38px;
          margin-bottom: 1.5rem;
          font-weight: 400;
          line-height: 1.2;
        }
        .home-about-text {
          color: #fff;
          margin-top: 1rem;
          margin-bottom: 2rem;
          font-size: 18px;
          font-weight: 300;
        }
        .section-home-testimonials {
          position: relative;
          top: 100vh;
        }
        .home-testimonials-bg {
          background-image: url(/images/branch-2.jpg);
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;   
        }
        .home-testimonials-inner {
          padding-top: 6rem;
          padding-bottom: 7.5rem;
        }
        .home-testimonials-quote {
          max-width: 45rem;
          margin-right: auto;
          margin-bottom: 10px;
          margin-left: auto;
          padding: 0;
          border-style: none;
          font-size: 20px;
          letter-spacing: 1.5px;
        }
        .home-testimonials-cite {
          margin-top: 1rem;
          margin-bottom: 1rem;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: .2rem;
          text-transform: uppercase;
        }
        .home-testimonial-slide {
          text-align: center;
        }
        .section-home-news {
          background-color: #50596c;
          position: relative;
          top: 100vh;
        }
        .home-news-bg {
          background-repeat: repeat;
          background-image: url(/images/concrete.jpg);
          background-position: 0 0;
          background-size: 200px;
          position: relative;
        }
        .home-news-inner {
          position: relative;
          padding-top: 6rem;
          padding-bottom: 6rem;
        }
        .home-news-content {
          text-align: center;
        }
        .home-news-content h2 {
          font-size: 36px;
          margin-bottom: 1.5rem;
          color: #577941;
          font-weight: 500;
        }
        .home-news-content p {
          max-width: 40em;
          margin: 1rem auto 2rem;
          color: #fff;
          letter-spacing: 1.5px;
          font-weight: 300;
        }
        .section-home-gift {
          position: relative;
          top: 100vh;
        }
        .home-gift-bg {
          background-color: #354f24;
          background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23577941' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        .home-gift-inner {
          padding: 4rem 3rem;
        }
        .home-gift-heading {
          color: #fff;
          font-size: 34px;
          margin-bottom: 1.5rem;
          font-weight: 400;
          line-height: 1.2;
        }
        .home-gift-text {
          color: #fff;
          margin-top: 1rem;
          margin-bottom: 2rem;
          font-size: 20px;
          font-weight: 400;
          line-height: 30px;
          margin-left: 40px;
        }
        @media (max-width: 991.98px) {
          .home-features-item-icon {
            width: 16px;
            height: 16px;
            border-radius: 8px;
          }
          .home-features-item-label {
            font-size: 12.5px;
          }
          .home-about-inner {
            padding: 4rem 0px;
            position: relative;
          }
          .home-menu-subheading {
            font-size: 28px;
          }
          .home-menu-products-inner {
            padding-top: 6rem;
            padding-bottom: 8rem;
            position: relative;
            text-align: center;
          }
          .home-about-heading {
            font-size: 35px;
            margin-bottom: 1.3rem;
            line-height: 1;
          }
          .home-about-text {
            margin-top: 0.8rem;
            margin-bottom: 1.8rem;
            font-size: 16px;
          }
          .home-about-inner {
            padding: 5rem 0px;
          }
          .home-testimonials-inner {
            padding-top: 4.5rem;
            padding-bottom: 5.5rem;
          }
          .home-testimonials-quote {
            font-size: 18px;
            letter-spacing: 1.3px;
          }
          .home-testimonials-cite {
            margin-top: 0.8rem;
            margin-bottom: 0.8rem;
            font-size: 13px;
          }
          .home-news-inner {
            padding-top: 4.5rem;
            padding-bottom: 4.5rem;
          }
          .home-news-content h2 {
            font-size: 32px;
            margin-bottom: 1.3rem;
          }
          .home-news-content p {
            max-width: 36em;
            margin: 0.8rem auto 1.8rem;
            letter-spacing: 1.3px;
          }
          .home-gift-inner {
            padding: 3rem 2rem;
          }
          .home-gift-heading {
            font-size: 30px;
            margin-bottom: 1.3rem;
            line-height: 1;
          }
          .home-gift-text {
            margin-top: 0.8rem;
            margin-bottom: 1.8rem;
            font-size: 18px;
            line-height: 26px;
            margin-left: 0px;
          }
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: CATEGORIES_QUERY,
    variables: categoryQueryVars,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  }
}
