import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// TODO: Work on CSS
function Footer() {
  return (
    <Container className='footer'>
      <Row>
        <Col>
          <img
            src={require('../assets/guinness-of-sydney-logo.png')}
            className='footer-logo'
            alt='logo'
          />
          <p className='footer-text'>Guinness of Sydney ©2022</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
