import React from 'react';
import { BackTop, Divider, Row, Col } from 'antd';
import logoTonjoBlack from '../../../assets/images/logo-tonjo-black.png';
import iconTonjoBlack from '../../../assets/images/icon-tonjoo-black.png';
import footerGallery from '../../../assets/images/gallery-footer.png';
import './footer.css';

function AppFooter() {
  return (
    <div className="main-footer">
      <div className="container-fluid">
        <Row gutter={[16, 16]}>
            <Col  
              xs={{ span: 24 }} 
              sm={{ span: 24 }} 
              md={{ span: 24 }} 
              lg={{ span: 24 }} 
              xl={{ span: 6 }}
            >
              <img  src={logoTonjoBlack}/>
            </Col>
            <Col 
              xs={{ span: 24 }} 
              sm={{ span: 24 }} 
              md={{ span: 24 }} 
              lg={{ span: 24 }} 
              xl={{ span: 14 }}
            >
              <p className="desc-logo">Tonjoo Property is theme designed for your Property Agency</p>
            </Col>
            <Col 
              xs={{ span: 24 }} 
              sm={{ span: 24 }} 
              md={{ span: 24 }} 
              lg={{ span: 24 }} 
              xl={{ span: 4 }}
            >
              <div className="btn-sign-up">
                <p className="btn-sign-up-text">Sign Up</p>
              </div>
            </Col>
        </Row>
      </div>
      <Divider/>
      <div className="container-fluid">
        <Row gutter={[16, 16]}>
              <Col  
                xs={{ span: 24 }} 
                sm={{ span: 24 }} 
                md={{ span: 24 }} 
                lg={{ span: 24 }} 
                xl={{ span: 6 }}
              > 
                <Row gutter={[16,16]}>
                  <Col 
                    className="second-left" 
                    xs={{ span: 24 }} 
                    sm={{ span: 24 }} 
                    md={{ span: 24 }} 
                    lg={{ span: 24 }} 
                    xl={{ span: 24 }}
                  >
                    <img className="img-second-left" src={iconTonjoBlack}/>
                  </Col>
                  <Col 
                    xs={{ span: 24 }} 
                    sm={{ span: 24 }} 
                    md={{ span: 24 }} 
                    lg={{ span: 24 }} 
                    xl={{ span: 24 }}
                  >
                    <p className="img-second-text"> 
                      Lorem Ipsum is simply dummy text of the printing and typesetting 
                      industry. Lorem Ipsum has been the industry's standard dummy text ever 
                      since the 1500s, when an unknown printer took a galley of type and scrambled 
                      it to make a type specimen book.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col 
                xs={{ span: 24 }} 
                sm={{ span: 24 }} 
                md={{ span: 24 }} 
                lg={{ span: 24 }} 
                xl={{ span: 18 }}
              >
                <Row gutter={[16,16]}>
                  <Col 
                    className="first-step" 
                    xs={{ span: 24 }} 
                    sm={{ span: 8 }} 
                    md={{ span: 8 }} 
                    lg={{ span: 8 }} 
                    xl={{ span: 8 }}
                  >
                    <p className="footer-center"> Usefull Link</p>
                    <p className="footer-center-desc"> Blog</p>
                    <p className="footer-center-desc"> Contact Us</p>
                    <p className="footer-center-desc"> Listing</p>
                    <p className="footer-center-desc"> Property Listing</p>
                    <p className="footer-center-desc"> Property Search</p>
                    <p className="footer-center-desc"> Spesial Tabs</p>
                  </Col>
                  <Col 
                    xs={{ span: 24 }} 
                    sm={{ span: 8 }} 
                    md={{ span: 8 }} 
                    lg={{ span: 8 }} 
                    xl={{ span: 8 }}
                  >
                    <p className="footer-center"> Information</p>
                    <p className="footer-center-desc"> About Company</p>
                    <p className="footer-center-desc"> Our Team</p>
                    <p className="footer-center-desc"> Registration</p>
                    <p className="footer-center-desc"> Payment Option</p>
                    <p className="footer-center-desc"> Information</p>
                    <p className="footer-center-desc"> FAQ</p>
                  </Col>
                  <Col 
                    xs={{ span: 24 }} 
                    sm={{ span: 8 }} 
                    md={{ span: 8 }} 
                    lg={{ span: 8 }} 
                    xl={{ span: 8 }}
                  >
                    <p className="footer-center"> Instagram</p>
                    <img className="img-second-right" src={footerGallery}/>
                  </Col>
                </Row>
              </Col>
          </Row>
      </div>
      <Divider/>
      <div className="container-fluid end-footer">
        <p className="all-right">&copy; 2021 - All Right Reserved</p>
        <p className="link-studio">Tonjoostudio.com</p>
      </div>
    </div>
  );
}

export default AppFooter;