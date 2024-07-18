import React from "react";
import HeaderCustom from "~/components/Layout/CustomLayout/HeaderCustom";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import styles from "./Demo5P7.module.scss";
import classNames from "classnames/bind";
import NavLinks from "~/components/NavLinks";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentHomeP7 from "~/components/Content/ContentHomeP7/index";

const cx = classNames.bind(styles);

function Demo5P7() {
  return (
    <div className={styles.uploadContainer}>
      <Logo/>
      <HeaderCustom tableCellClassName4={cx(styles.demo5)}/>
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div>
                  <ContentHomeP7/>
                  <NavLinks
                   classNameWrapper={cx(styles.navlinkswrapper)}
                   newerPost="Newer Posts"
                   showNewerPosts={true}
                   showOlderPosts={false}
                   newerPostsLink="/demo=5/Page/6"
                  />
                </div>
                <Sidebar/>
            </div>
        </div>
      <FooterCustom/>
    </div>
  );
}

export default Demo5P7;
