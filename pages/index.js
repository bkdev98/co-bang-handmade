import { Check } from 'react-feather'

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
          <div className="row">
            <div className="col">
              <div className="home-features-item">
                <div className="home-features-item-icon">
                  <Check size={16} />
                </div>
                <div className="home-features-item-label">
                  Chất liệu thiên nhiên
                </div>
              </div>
            </div>
            <div className="col">
              <div className="home-features-item">
                <div className="home-features-item-icon">
                  <Check size={16} />
                </div>
                <div className="home-features-item-label">
                  Thân thiện môi trường
                </div>
              </div>
            </div>
            <div className="col">
              <div className="home-features-item">
                <div className="home-features-item-icon">
                  <Check size={16} />
                </div>
                <div className="home-features-item-label">
                  Sản xuất thủ công
                </div>
              </div>
            </div>
            <div className="col">
              <div className="home-features-item">
                <div className="home-features-item-icon">
                  <Check size={16} />
                </div>
                <div className="home-features-item-label">
                  Giao hàng tận nơi
                </div>
              </div>
            </div>
          </div>
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
            <div className="row category-row">
              <div className="col">
                <Card image="/images/category-1.jpg" title="GIỎ BÀNG ĐI CHỢ" />
              </div>
              <div className="col">
                <Card image="/images/category-2.jpg" title="PHỤ KIỆN THỜI TRANG" />
              </div>
              <div className="col">
                <Card image="/images/category-3.jpg" title="TÚI XÁCH HOẠ TIẾT" />
              </div>
              <div className="col">
                <Card image="/images/category-4.jpg" title="SẢN PHẨM SÁNG TẠO" />
              </div>
            </div>
            <div className="category-action"><Button label="Tất cả Danh mục" /></div>
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
        .category-row {
          margin-right: -7.5px;
          margin-left: -7.5px;
        }
        .home-menu-list {
          position: relative;
        }
        .category-row .col {
          padding: 0px 7px;
        }
        .category-action {
          padding-top: 2rem;
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}
