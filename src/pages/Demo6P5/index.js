import React from "react";
import HeaderCustom from "~/components/Layout/CustomLayout/HeaderCustom";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import SidebarCustom from "~/components/Layout/CustomLayout/SidebarCustom";
import styles from "./Demo6P5.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import CarouselOverlay from "~/components/CarouselOverlay";
import UnderHeader from "~/components/Layout/DefaultLayout/UnderHeader";
import NavLinks from "~/components/NavLinks";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo6P5() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Page 5 - Your Personal Blogging Friend</title>
      </Helmet>
      <Logo />
      <HeaderCustom tableCellClassName5={cx(styles.demo6)} />
      <UnderHeader />
      <div className={cx("content-container")}>
        <div className={cx("post-list")}>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456587349840-30f5d8581fc8-570x422.jpg" />
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="Reason To Be Happy "
                postDate="6 August 2017"
                link="/reason-to-be-happy/"
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
              <a href="/reason-to-be-happy/" className={cx("button-default1")}>
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
                title="Gone With The Wind "
                postDate="6 August 2017"
                link="/gone-with-the-wind/"
                tag="PHOTOGRAPHY"
                tagLink="/category/photography/"
              />
              <p className={cx("item-summary1")}>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio…{" "}
              </p>
              <a
                href="/gone-with-the-wind/"
                className={cx("button-default1")}
              >
                READ MORE
              </a>
            </div>
          </div>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445762467354-d6c921f33b14-570x422.jpg" />
        </div>
        {/* //////////////////// */}
        <div className={cx("post-list")}>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457178272755-08776f07dee3-570x422.jpg" />{" "}
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="Chase Your Dreams "
                postDate="5 August 2017"
                link="/chase-your-dreams/"
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
              <a href="/chase-your-dreams/" className={cx("button-default1")}>
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
                title="Saturday Night"
                postDate="5 August 2017"
                link="/saturday-night/"
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
              <a href="/saturday-night/" className={cx("button-default1")}>
                READ MORE
              </a>
            </div>
          </div>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1444211353227-635db788ed4a-570x422.jpg" />
        </div>
        {/* //////////////////// */}
        <div className={cx("post-list")}>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455128677232-0413bef74851-570x422.jpg"/>
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="Crustie's Cones"
                postDate="5 August 2017"
                tag="PHOTOGRAPHY"
                tagLink="/category/photography/"
                link="/crusties-cones/"
              />
               <p className={cx("item-summary1")}>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio…
              </p>
              <a
                href="/long-legs-walking/"
                className={cx("button-default1")}
              >
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
          newerPostsLink="/demo=6/Page/4"
          olderPostsLink="/demo=6/Page/6"
        />
      </div>
      <SidebarCustom />
      <FooterCustom />
    </div>
  );
}

export default Demo6P5;
