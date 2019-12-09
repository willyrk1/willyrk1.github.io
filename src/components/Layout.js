import React from 'react'
import classNames from 'classnames/bind'
import Header from './Header'
import Sponsors from './Sponsors'
import Footer from './Footer'
import styles from './Layout.module.scss'

const cx = classNames.bind(styles)

const Layout = ({ home, children }) => 
  <div className="App">
    <Header home={home} />
    <div className={cx('content')}>{children}</div>
    <Sponsors />
    <Footer />
  </div>

export default Layout