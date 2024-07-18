import React from "react";
import HeaderCustom from "~/components/Layout/CustomLayout/HeaderCustom";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import styles from "./Demo5P2.module.scss";
import classNames from "classnames/bind";
import NavLinks from "~/components/NavLinks";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentHomeP2 from "~/components/Content/ContentHomeP2/index";

const cx = classNames.bind(styles);

function Demo5P2() {
  return (
    <div className={styles.uploadContainer}>
      <Logo/>
      <HeaderCustom tableCellClassName4={cx(styles.demo5)}/>
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
                   newerPostsLink="/demo=5/"
                   olderPostsLink="/demo=5/Page/3"
                  />
                </div>
                <Sidebar/>
            </div>
        </div>
      <FooterCustom/>
    </div>
  );
}

export default Demo5P2;
