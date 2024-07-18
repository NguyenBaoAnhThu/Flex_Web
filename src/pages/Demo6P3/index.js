import React from "react";
import HeaderCustom from "~/components/Layout/CustomLayout/HeaderCustom";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import SidebarCustom from "~/components/Layout/CustomLayout/SidebarCustom";
import styles from "./Demo6P3.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import CarouselOverlay from "~/components/CarouselOverlay";
import UnderHeader from "~/components/Layout/DefaultLayout/UnderHeader";
import NavLinks from "~/components/NavLinks";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo6P3() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Page 3 - Your Personal Blogging Friend</title>
      </Helmet>
      <Logo />
      <HeaderCustom tableCellClassName5={cx(styles.demo6)} />
      <UnderHeader />
      <div className={cx("content-container")}>
        <div className={cx("post-list")}>
        <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213324382-98c478e77e1f-570x422.jpg" />
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="Coldplay Beneath "
                postDate="10 August 2017"
                link="/coldplay-beneath/"
                tag="TRAVEL"
                tagLink="/category/travel/"
              />
              <p className={cx("item-summary1")}>
                Cesar Chavez; free expression; medicine revitalize innovation.
                Safeguards technology health partnership nonprofit;  accelerate.
                Generosity life-expectancy donate youth pride Bloomberg inspire
                breakthroughs opportunity honesty. Clean water, economic
                security, agency, grantees giving, Rosa Parks metrics rural
                making progress. Pride reproductive rights participatory
                monitoring global network…
              </p>
              <a href="/coldplay-beneath/" className={cx("button-default1")}>
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
                title="The Breakfast Work"
                postDate="10 August 2017"
                link="/the-breakfast-work/"
                tag="FASHION"
                tagLink="/category/fashion/"
              />
              <p className={cx("item-summary1")}>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio…{" "}
              </p>
              <a href="/the-breakfast-work/" className={cx("button-default1")}>
                READ MORE
              </a>
            </div>
          </div>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456962059735-289abeaff21c-570x422.jpg" />
        </div>
        {/* //////////////////// */}
        <div className={cx("post-list")}>
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457041106502-b6eb79642afd-570x422.jpg" />          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="Jazzy Haulters In Trend"
                postDate="9 August 2017"
                link="/jazzy-haulters-in-trend/"
                tag="FASHION"
                tagLink="/category/fashion/"
              />
              <p className={cx("item-summary1")}>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio…
              </p>
              <a href="/jazzy-haulters-in-trend/" className={cx("button-default1")}>
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
               title="Lazy Sunday Morning"
               postDate="9 August 2017"
               link="/lazy-sunday-morning/"
               tag="PHOTOGRAPHY"
               tagLink="/category/photography/"
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
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213344097-6e0cb15024f9-570x422.jpg" />
        </div>
        {/* //////////////////// */}
        <div className={cx("post-list")}>
        <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457257626018-77036a3d4da0-570x422.jpg" />
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="Elevation Photos In Trend"
                postDate="9 August 2017"
                link="/elevation-photos-in-trend/"
                tag="PHOTOGRAPHY"
                tagLink="/category/photography/"
              />
              <p className={cx("item-summary1")}>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio…
              </p>
              <a href="/elevation-photos-in-trend/" className={cx("button-default1")}>
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
          newerPostsLink="/demo=6/Page/2"
          olderPostsLink="/demo=6/Page/4"
        />
      </div>
      <SidebarCustom />
      <FooterCustom />
    </div>
  );
}

export default Demo6P3;
