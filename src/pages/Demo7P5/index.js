import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import SidebarCustom from "~/components/Layout/CustomLayout/SidebarCustom";
import styles from "./Demo7P5.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import CarouselOverlay from "~/components/CarouselOverlay";
import UnHdDemo7 from "~/components/Layout/CustomLayout/UnHdDemo7";

import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo7P5() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Page 5 - Your Personal Blogging Friend</title>
      </Helmet>
      <Logo />
      <Header tableCellClassName7={cx(styles.demo7)} />
      <UnHdDemo7 />
      <div className={cx("wrapper")}>
        <div className={cx("content-container")}>
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457439157612-a1891ff037ff-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="FEATURES "
              postDate="1 August 2017"
              link="/features/"
              tag="UNCATEGORIZED"
              tagLink="/category/uncategorized/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <div className={cx("entry-summary1")}>
              <p>
                Cesar Chavez; free expression; medicine revitalize innovation.
                Safeguards technology health partnership nonprofit;  accelerate.
                Generosity life-expectancy donate youth pride Bloomberg inspire
                breakthroughs opportunity honesty. Clean water, economic
                security, agency, grantees…
              </p>
            </div>
          </div>
        </div>
        <div className={cx("Overview")}>
          <nav aria-label="Page navigation example">
            <ul className={cx("pagination")}>
              <li className={cx("page-item")}>
                <a
                  className={cx("page-link")}
                  href="/demo=7/Page/4"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className={cx("page-item")}>
                <a className={cx("page-link")} href="/demo=7">
                  1
                </a>
              </li>
              <li className={cx("page-item")}>
                <a className={cx("pre-link")}>...</a>
              </li>
              <li className={cx("page-item")}>
                <a className={cx("page-link")} href="/demo=7/Page/4">
                  4
                </a>
              </li>
              <li className={cx("page-item")}>
                <a className={cx("page-link")} href="/demo=7/Page/5">
                  5
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <SidebarCustom />
      <FooterCustom />
    </div>
  );
}

export default Demo7P5;
