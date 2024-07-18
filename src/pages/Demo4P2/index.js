import React from "react";
import HeaderCustom from "~/components/Layout/CustomLayout/HeaderCustom";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar/index";
import UnHdDemo2 from "~/components/Layout/CustomLayout/UnHdDemo2/index";
import styles from "./Demo4P2.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import NavLinks from "~/components/NavLinks";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentHomeP2 from "~/components/Content/ContentHomeP2/index";

const cx = classNames.bind(styles);

function Demo4P2() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Page 2 - Your Personal Blogging Friend</title>
      </Helmet>
      <HeaderCustom tableCellClassName3={cx(styles.demo4)}/>
      <Logo />
      <UnHdDemo2 />
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div>
                  <ContentHomeP2/>
                  <NavLinks
                   classNameWrapper={cx(styles.navlinkswrapper)}
                    newerPost="Newer Posts"
                    olderPost="Older Posts"
                    showNewerPosts={true}
                    showOlderPosts={true}
                    newerPostsLink="/demo=4/"
                    olderPostsLink="/demo=4/Page/3"
                  />
                </div>
                <Sidebar />
            </div>
        </div>
      <Footer/>
    </div>
  );
}

export default Demo4P2;
