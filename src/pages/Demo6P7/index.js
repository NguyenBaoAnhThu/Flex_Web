import React from "react";
import HeaderCustom from "~/components/Layout/CustomLayout/HeaderCustom";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import SidebarCustom from "~/components/Layout/CustomLayout/SidebarCustom";
import styles from "./Demo6P7.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import CarouselOverlay from "~/components/CarouselOverlay";
import UnderHeader from "~/components/Layout/DefaultLayout/UnderHeader";
import NavLinks from "~/components/NavLinks";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo6P7() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Page 7 - Your Personal Blogging Friend</title>
      </Helmet>
      <Logo />
      <HeaderCustom tableCellClassName5={cx(styles.demo6)} />
      <UnderHeader />
      <div className={cx("content-container")}>
        <div className={cx("post-list")}>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1452696024259-cb7474e79947-570x422.jpg" />
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="Flower Fiesta"
                postDate="2 August 2017"
                link="/flower-fiesta/"
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
              <a href="/flower-fiesta/" className={cx("button-default1")}>
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
                title="Object Photography "
                postDate="2 August 2017"
                link="/object-photography/"
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
              <a href="/object-photography/" className={cx("button-default1")}>
                READ MORE
              </a>
            </div>
          </div>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455134168668-4066045897c3-570x422.jpg" />
        </div>
        {/* //////////////////// */}
        <div className={cx("post-list")}>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455354269813-737d9df115bb-570x422.jpg" />{" "}
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="My Persona Around "
                postDate="2 August 2017"
                link="/my-persona-around/"
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
              <a
                href="/my-persona-around/"
                className={cx("button-default1")}
              >
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
                title="Lanscape Photo Walk "
                postDate="2 August 2017"
                link="/lanscape-photo-walk/"
                tag="PHOTOGRAPHY"
                tagLink="/category/fashion/"
              />
              <p className={cx("item-summary1")}>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio…
              </p>
              <a href="/lanscape-photo-walk/" className={cx("button-default1")}>
                READ MORE
              </a>
            </div>
          </div>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-570x422.jpg" />
        </div>
        {/* //////////////////// */}
        <div className={cx("post-list")}>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445915116209-31efbc3ae6b2-570x422.jpg" />
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="The Secrets Of Relationships"
                postDate="1 August 2017"
                link="/the-secrets-of-relationships/"
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
              <a href="/the-secrets-of-relationships/" className={cx("button-default1")}>
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
          newerPostsLink="/demo=6/Page/6"
          olderPostsLink="/demo=6/Page/8"
        />
      </div>
      <SidebarCustom />
      <FooterCustom />
    </div>
  );
}

export default Demo6P7;
