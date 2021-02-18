import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';
import logoTonjooWhite from '../../../assets/images/logo-tonjoo-white.png'
import './header.css';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);
  const [showNav, setShowNav] = useState(true)
  const [currenPos, setCurrentPos] = useState(window.pageXOffset)


  if (typeof window !== 'undefined') {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const maxScroll = document.body.clientHeight - window.innerHeight;
      let currentScrollPos = window.pageYOffset;
      setCurrentPos(window.pageYOffset)
      if (
          (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
        || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
        || (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
        setShowNav(true)
        localStorage.setItem("showNav",window.pageYOffset)
      } else {
        setShowNav(false)
        localStorage.setItem("showNav",window.pageYOffset)
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
    <div className={
        showNav 
        ? "ant-layout-header-hide" 
        : "ant-layout-header"
    }>
      {/* {console.log("curron pos", currenPos)} */}
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <img src={logoTonjooWhite}/>
          </div>
          <div className="mobileHidden">
            <Anchor targetOffset="65">
              <Link href="/" title="Home" />
              <Link href="/service" title="Service" />
              <Link href="/portofolio" title="Portofolio" />
              <Link href="/blog" title="Blog" />
              <Link href="/about" title="About" />
              <Link href="/contact" title="Contact" />
            </Anchor>
          </div>
          <div className="mobileVisible">
            <Button type="primary" onClick={showDrawer}>
              <i className="fas fa-bars"></i>
            </Button>
            <Drawer
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <Anchor targetOffset="65">
                <Link href="/" title="Home" />
                <Link href="/service" title="Service" />
                <Link href="/portofolio" title="Portofolio" />
                <Link href="/blog" title="Blog" />
                <Link href="/about" title="About" />
                <Link href="/contact" title="Contact" />
              </Anchor>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;