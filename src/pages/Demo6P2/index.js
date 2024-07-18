import React from "react";
import HeaderCustom from "~/components/Layout/CustomLayout/HeaderCustom";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import SidebarCustom from "~/components/Layout/CustomLayout/SidebarCustom";
import styles from "./Demo6P2.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import CarouselOverlay from "~/components/CarouselOverlay";
import UnderHeader from "~/components/Layout/DefaultLayout/UnderHeader";
import NavLinks from "~/components/NavLinks";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo6P2() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Page 2 - Your Personal Blogging Friend</title>
      </Helmet>
      <Logo />
      <HeaderCustom tableCellClassName5={cx(styles.demo6)} />
      <UnderHeader />
      <div className={cx("content-container")}>
        <div className={cx("post-list")}>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1449614016987-8c215bb90b94-570x422.jpg" />
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="The Cold Weather"
                postDate="12 August 2017"
                link="/the-cold-weather/"
                tag="TRAVEL"
                tagLink="/category/travel/"
              />
              <p className={cx("item-summary1")}>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio…{" "}
              </p>
              <a href="/the-cold-weather/" className={cx("button-default1")}>
                READ MORE
              </a>
            </div>
          </div>
        </div>
        {/* //////////////////// */}
        <div className={cx("post-list")}>
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginRight: "-30px" }}
            >
              <CarouselOverlay
                title="Prefect Backpacking "
                postDate="12 August 2017"
                link="/perfect-backpacking/"
                tag="TRAVEL"
                tagLink="/category/travel/"
              />
              <p className={cx("item-summary1")}>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio…{" "}
              </p>
              <a href="/perfect-backpacking/" className={cx("button-default1")}>
                READ MORE
              </a>
            </div>
          </div>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1448582649076-3981753123b5-570x422.jpg" />
        </div>
        {/* //////////////////// */}
        <div className={cx("post-list")}>
           <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/sport-white-rolls-skateboard-570x422.jpg" />
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="Back To Drake "
                postDate="11 August 2017"
                link="/back-to-drake/"
                tag="BUSINESS"
                tagLink="/category/business/  "
              />
              <p className={cx("item-summary1")}>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio…
              </p>
              <a href="/back-to-drake/" className={cx("button-default1")}>
                READ MORE
              </a>
            </div>
          </div>
        </div>
        {/* //////////////////// */}
        <div className={cx("post-list")}>
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginRight: "-30px" }}
            >
              <CarouselOverlay
                title="Working Hands Pray "
                postDate="10 August 2017"
                link="/working-hands-pray/"
                tag="BUSINESS"
                tagLink="/category/business/"
              />
              <p className={cx("item-summary1")}>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio…
              </p>
              <a href="/working-hands-pray/" className={cx("button-default1")}>
                READ MORE
              </a>
            </div>
          </div>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1452037302901-0f181216298e-570x422.jpg" />
          </div>
        {/* //////////////////// */}
        <div className={cx("post-list")}>
         <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/95cdfeef-570x422.jpg" />
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="Wordpress Theme "
                postDate="10 August 2017"
                link="/wordpress-theme/"
                tag="BUSINESS"
                tagLink="/category/business/"
              />
              <p className={cx("item-summary1")}>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio…
              </p>
              <a href="/wordpress-theme/" className={cx("button-default1")}>
                READ MORE
              </a>
            </div>
          </div>
        </div>
        {/* //////////////////// */}
        <NavLinks
          classNameWrapper={cx(styles.navlinkswrapper)}
          newerPost="Newer Posts"
          olderPost="Older Posts"
          showNewerPosts={true}
          showOlderPosts={true}
          newerPostsLink="/demo=6/"
          olderPostsLink="/demo=6/Page/3"
        />
      </div>
      <SidebarCustom />
      <FooterCustom />
    </div>
  );
}

export default Demo6P2;
