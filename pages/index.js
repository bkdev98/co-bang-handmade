import { Check } from 'react-feather'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../layouts/main'
import Divider from '../components/divider'
import Card from '../components/card'
import Button from '../components/button'

export default function Home() {
  return (
    <Layout>
      <section className="section-home-hero">
        <div className="home-hero-img" />
      </section>
      <section className="section-home-features">
        <div className="container">
          <Container fluid>
            <Row>
              <Col lg={3} md={6}>
                <div className="home-features-item">
                  <div className="home-features-item-icon">
                    <Check size={16} />
                  </div>
                  <div className="home-features-item-label">
                    Chất liệu thiên nhiên
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div className="home-features-item">
                  <div className="home-features-item-icon">
                    <Check size={16} />
                  </div>
                  <div className="home-features-item-label">
                    Thân thiện môi trường
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div className="home-features-item">
                  <div className="home-features-item-icon">
                    <Check size={16} />
                  </div>
                  <div className="home-features-item-label">
                    Sản xuất thủ công
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6}>
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
            <Container fluid>
              <Row gutterWidth={15}>
                <Col lg={3} sm={6} style={{marginBottom: 15}}>
                  <Card image="/images/category-1.jpg" title="GIỎ BÀNG ĐI CHỢ" />
                </Col>
                <Col lg={3} sm={6} style={{marginBottom: 15}}>
                  <Card image="/images/category-2.jpg" title="PHỤ KIỆN THỜI TRANG" />
                </Col>
                <Col lg={3} sm={6} style={{marginBottom: 15}}>
                  <Card image="/images/category-3.jpg" title="TÚI XÁCH HOẠ TIẾT" />
                </Col>
                <Col lg={3} sm={6} style={{marginBottom: 15}}>
                  <Card image="/images/category-4.jpg" title="SẢN PHẨM SÁNG TẠO" />
                </Col>
              </Row>
            </Container>
            <div className="category-action"><Button label="Tất cả Danh mục" /></div>
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
              <div className="home-about-col">
                <h2 className="home-about-heading">Khát khao về một hành tinh xanh</h2>
                <div style={{display: 'inline-block'}}><Divider color="#fff" /></div>
                <div className="home-about-text">
                  <p>Consequat dolor amet quis cillum culpa est aute eiusmod consectetur. Non anim Lorem commodo consequat excepteur excepteur do. Cupidatat consequat mollit veniam ipsum adipisicing aliquip mollit amet aliqua. Exercitation duis commodo sit excepteur.</p>
                </div>
                <Button label="Câu chuyện của chúng tôi" />
              </div>
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
                <Button label="Tất cả Bài viết" />
              </div>
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
      `}</style>
    </Layout>
  )
}
