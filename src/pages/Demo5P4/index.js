import React from "react";
import HeaderCustom from "~/components/Layout/CustomLayout/HeaderCustom";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import styles from "./Demo5P4.module.scss";
import classNames from "classnames/bind";
import NavLinks from "~/components/NavLinks";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentHomeP4 from "~/components/Content/ContentHomeP4/index";

const cx = classNames.bind(styles);

function Demo5P4() {
  return (
    <div className={styles.uploadContainer}>
      <Logo/>
      <HeaderCustom tableCellClassName4={cx(styles.demo5)}/>
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div>
                  <ContentHomeP4/>
                  <NavLinks
                   classNameWrapper={cx(styles.navlinkswrapper)}
                   newerPost="Newer Posts"
                   olderPost="Older Posts"
                   showNewerPosts={true}
                   showOlderPosts={true}
                   newerPostsLink="/demo=5/Page/3"
                   olderPostsLink="/demo=5/Page/5"
                  />
                </div>
                <Sidebar/>
            </div>
        </div>
      <FooterCustom/>
    </div>
  );
}

export default Demo5P4;
