import React from 'react';
import styles from '../../../../styles/Footer.module.css';
import { Row, Col } from 'react-bootstrap';


const StorefrontFooter: React.FC = ({ children }) => {
  return (
    <footer className={styles.background}>
      <Col md={{ span: 8, offset: 2 }}>
        <Row>
          <Col lg={7} md={12}>
            <Row>
              <Col lg={3} md={12} className="mb-4 mb-lg-0">
                Acompanhe-nos
              </Col>
            </Row>
          </Col>

          <Col lg={{ span: 4, offset: 0 }} xs={{ span: 8, offset: 2 }}>
            <Row>
              <Col>
                  Contato
              </Col>

              <Col>
                  Sobre
              </Col>

              <Col>
                  Blog
              </Col>

              <Col>
                  FAQ
              </Col>
            </Row>
          </Col>
        </Row>

        <hr />
      </Col>
    </footer>
  )
}

export default StorefrontFooter;