import React, { useState } from 'react';

import { Anchor, Drawer, Button, Row, Col } from 'antd';

import '../headerGreen/headerGreen.css';

const { Link } = Anchor;

function AppHeaderGreen() {
  const [visible, setVisible] = useState(false);
  const [showNav, setShowNav] = useState(true)
  const [currenPos, setCurrentPos] = useState(window.pageXOffset)

  

  if (typeof window !== 'undefined') {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      console.log("on scriol")
      const maxScroll = document.body.clientHeight - window.innerHeight;
      let currentScrollPos = window.pageYOffset;
      setCurrentPos(window.pageYOffset)
      if (
          (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
        || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
        || (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
        // document.getElementById("navbar").style.top = "0";
        setShowNav(true)
      } else {
        // document.getElementById("navbar").style.top = "-5.0rem"; 
        setShowNav(false)
      }
      prevScrollpos = currentScrollPos;
    }
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    // <div className={showNav ? "ant-layout-header-hide" : "ant-layout-header"}>
      <div className="header-green">
          {/* {localStorage.getItem("showNav")} */}
          <div className= "container-fluid-green">
            <Row gutter={[16,16]}>
              <Col
                className="item-text"
                xs={{ span: 24 }} 
                sm={{ span: 24 }} 
                md={{ span: 8 }} 
                lg={{ span: 8 }} 
                xl={{ span: 8 }}
              >
                <p className="item-content">Tongkol Raya no.5 Minomartini, Sleman, Yogyakarta</p>
              </Col>
              <Col
                className="item-text"
                xs={{ span: 24 }} 
                sm={{ span: 24 }} 
                md={{ span: 8 }} 
                lg={{ span: 8 }} 
                xl={{ span: 8 }}
              >
                <p className="item-content">Monday-Friday 9 AM - 5 PM, Saturday - Sunday : Closed</p>
              </Col>
              <Col
                className="item-text"
                xs={{ span: 24 }} 
                sm={{ span: 24 }} 
                md={{ span: 8 }} 
                lg={{ span: 8 }} 
                xl={{ span: 8 }}
              >
                <p className="item-content">+(62) 123 456 789, halo@tonjoo.com</p>
              </Col>
            </Row>
          </div>
      </div>
    // </div>
  );
}

export default AppHeaderGreen;