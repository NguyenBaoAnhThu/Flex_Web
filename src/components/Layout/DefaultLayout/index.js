import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import UnderHeader from './UnderHeader';
import Footer from './Footer';
import Logo from './Logo';
import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import SitePageTitle from './SitePageTitle';

const cx = classNames.bind(styles);

function DefaultLayout({ children, hideUnderHeader, headerProps, showSitePageTitle, title, sidebarProps }) { // Add sidebarProps here
    return (
        <div className={cx('wrapper')}>
            <Logo />
            <Header {...headerProps} />
            {!hideUnderHeader && <UnderHeader />}
            {showSitePageTitle && <SitePageTitle title={title} />}
            <div className="container">
                <Sidebar {...sidebarProps} /> 
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
