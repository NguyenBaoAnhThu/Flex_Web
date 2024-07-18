import React from "react";
import HeaderCustom from "~/components/Layout/CustomLayout/HeaderCustom";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar/index";
import UnHdDemo2 from "~/components/Layout/CustomLayout/UnHdDemo2/index";
import styles from "./Demo4P7.module.scss";
import classNames from "classnames/bind";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import NavLinks from "~/components/NavLinks";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentHomeP7 from "~/components/Content/ContentHomeP7/index";

const cx = classNames.bind(styles);

function Demo4P7() {
  return (
    <div className={styles.uploadContainer}>
      <HeaderCustom tableCellClassName3={cx(styles.demo4)}/>
      <Logo />
      <UnHdDemo2 />
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div>
                  <ContentHomeP7/>
                  <NavLinks
                   classNameWrapper={cx(styles.navlinkswrapper)}
                    newerPost="Newer Posts"
                    showNewerPosts={true}
                    showOlderPosts={false}
                    newerPostsLink="/demo=4/Page/6"
                  />
                </div>
                <Sidebar />
            </div>
        </div>
      <Footer/>
    </div>
  );
}

export default Demo4P7;
