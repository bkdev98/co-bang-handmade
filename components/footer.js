import {Container, Row, Col} from 'react-grid-system'

const Footer = () => (
  <>
    <div className="container">
      <Container fluid>
        <div className="section-info">
          <Row>
            <Col lg={3}>
              <div className="footer-brand-text">
                CỎ BÀNG<br /><strong>HANDMADE</strong>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section-copyright">
          <p> © 2020 Cỏ Bàng Handmade. All rights reserved. Terms & Conditions.</p>
        </div>
      </Container>
    </div>
    <style jsx>{`
      .footer-brand-text {
        font-size: 18px;
        line-height: 1em;
        letter-spacing: .1em;
        font-weight: 400;
        color: #fff;
        text-align: center;
      }
      .section-info {
        padding: 4rem 15px;
      }
      .section-copyright {
        border-top: 1px solid #fff;
        color: #fff;
        opacity: 0.8;
        font-size: 14px;
      }
    `}</style>
  </>
);

export default Footer
