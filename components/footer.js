import {Container, Row, Col} from 'react-grid-system'
import {Facebook, Instagram} from 'react-feather'

import Button from './button'

const Footer = () => (
  <>
    <footer>
      <div className="container">
        <Container fluid>
          <div className="section-info">
            <Row>
              <Col lg={3} style={{padding: '2rem 15px'}}>
                <div className="footer-brand-text">
                  CỎ BÀNG<br /><strong>HANDMADE</strong>
                </div>
                <div className="footer-text">
                  Số 158/45 Phạm Văn Chiêu, phường 5, quận Gò Vấp, TP. Hồ Chí Minh
                </div>
                <div className="footer-social-list">
                  <a className="footer-social-item">
                    <Facebook size={18} />
                  </a>
                  <a className="footer-social-item">
                    <Instagram size={18} />
                  </a>
                </div>
              </Col>
              <Col lg={3} style={{padding: '2rem 15px'}}>
                <div className="footer-list-title">DANH MỤC SẢN PHẨM</div>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a className="footer-list-item-link">
                      Giỏ bàng đi chợ
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a className="footer-list-item-link">
                      Phụ kiện thời trang
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a className="footer-list-item-link">
                      Túi xách hoạ tiết
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a className="footer-list-item-link">
                      Sản phẩm sáng tạo
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={3} style={{padding: '2rem 15px'}}>
                <div className="footer-list-title">THÔNG TIN</div>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a className="footer-list-item-link">
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a className="footer-list-item-link">
                      Chính sách giao hàng
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a className="footer-list-item-link">
                      Đổi trả hàng
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={3} style={{padding: '2rem 15px'}}>
                <div className="footer-subscription-title">ĐĂNG KÝ NHẬN BẢN TIN</div>
                <div className="footer-subscription-text">
                  Nhận thông tin sản phẩm và ưu đãi đặc biệt từ Cỏ Bàng Handmade
                </div>
                <div className="footer-input-group">
                  <input type="email" name="email" id="email" placeholder="Email của bạn" className="form-input" />
                  <div className="footer-input-group-append">
                    <Button label="Đăng ký" append />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="section-copyright">
            <p> © 2020 Cỏ Bàng Handmade. All rights reserved. Terms & Conditions.</p>
          </div>
        </Container>
      </div>
    </footer>
    <style jsx>{`
      footer {
        background: #202024;
        position: relative;
      }
      .footer-brand-text {
        font-size: 18px;
        line-height: 1em;
        letter-spacing: .1em;
        font-weight: 400;
        color: #fff;
        text-align: center;
        margin-bottom: 20px;
      }
      .section-info {
        padding: 1rem 15px;
      }
      .section-copyright {
        border-top: 1px solid #fff;
        color: #fff;
        opacity: 0.8;
        font-size: 14px;
        padding: 20px 0 30px;
      }
      .footer-list-title {
        text-transform: uppercase;
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 2px;
        margin-top: 10px;
      }
      .footer-subscription-title {
        text-transform: uppercase;
        color: #fff;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 2px;
        margin-top: 10px;
      }
      .footer-list {
        list-style: none;
        padding: 0;
        margin-top: 10px;
      }
      .footer-list-item {
        margin-bottom: 5px;
      }
      .footer-list-item-link {
        text-decoration: none;
        color: #fff;
        letter-spacing: 0.5px;
        font-size: 14px;
        opacity: 0.8;
        cursor: pointer;
      }
      .footer-list-item-link:hover {
        opacity: 1;
        transition: opacity .3s ease;
      }
      .footer-input-group {
        display: flex;
        justify-content: center;
        align-items: stretch;
        padding-bottom: .5rem;
        margin-top: 15px;
      }
      .form-input {
        font-family: 'Barlow', sans-serif;
        position: relative;
        flex: 1 1 auto;
        margin-bottom: 0;
        padding: .6rem .8rem;
        font-size: 14px;
        color: #fff;
        background-color: hsla(0,0%,100%,.05);
        border: 1px solid #4b4e6d;
        border-radius: 4px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        transition: border-color .3s ease,box-shadow .3s ease;
        outline: none;
        display: block;
        line-height: 1.5;
        background-clip: padding-box;
      }
      .footer-input-group-append {
        margin-left: -1px;
        display: flex;
      }
      .footer-subscription-text {
        color: #fff;
        letter-spacing: 0.5px;
        font-size: 13px;
        margin-top: 15px;
        line-height: 18px;
      }
      .footer-text {
        color: #fff;
        letter-spacing: 0.5px;
        font-size: 13px;
        margin-top: 10px;
        text-align: center;
      }
      .footer-social-list {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      }
      .footer-social-item {
        text-decoration: none;
        color: #fff;
        margin: 0px 10px;
      }
    `}</style>
  </>
);

export default Footer
