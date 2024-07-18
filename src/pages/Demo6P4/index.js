import React from "react";
import HeaderCustom from "~/components/Layout/CustomLayout/HeaderCustom";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import SidebarCustom from "~/components/Layout/CustomLayout/SidebarCustom";
import styles from "./Demo6P4.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import CarouselOverlay from "~/components/CarouselOverlay";
import UnderHeader from "~/components/Layout/DefaultLayout/UnderHeader";
import NavLinks from "~/components/NavLinks";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo6P4() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Page 4 - Your Personal Blogging Friend</title>
      </Helmet>
      <Logo />
      <HeaderCustom tableCellClassName5={cx(styles.demo6)} />
      <UnderHeader />
      <div className={cx("content-container")}>
        <div className={cx("post-list")}>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455772569729-9a95a88f3e9d-570x422.jpg" />
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="Wild Like Workshop"
                postDate="8 August 2017"
                link="/wild-like-workshop/"
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
              <a href="/wild-like-workshop/" className={cx("button-default1")}>
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
                title="My Exterior behaviors"
                postDate="8 August 2017"
                link="/my-exterior-behaviors/"
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
                href="/my-exterior-behaviors/"
                className={cx("button-default1")}
              >
                READ MORE
              </a>
            </div>
          </div>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457466066908-9c1cfbf05a0e-570x422.jpg" />
        </div>
        {/* //////////////////// */}
        <div className={cx("post-list")}>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1422190441165-ec2956dc9ecc-570x422.jpg" />{" "}
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="Sleeping Beauty "
                postDate="7 August 2017"
                link="/sleeping-beauty/"
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
              <a href="/sleeping-beauty/" className={cx("button-default1")}>
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
                title="Tea With Sugar"
                postDate="7 August 2017"
                link="/tea-with-sugar/"
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
              <a href="/tea-with-sugar/" className={cx("button-default1")}>
                READ MORE
              </a>
            </div>
          </div>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456615074700-1dc12aa7364d-570x422.jpg" />
        </div>
        {/* //////////////////// */}
        <div className={cx("post-list")}>
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457039948203-bf07b2c75940-570x422.jpg" />
          <div>
            <div
              className={cx("carousel-overlay1")}
              style={{ marginLeft: "-30px" }}
            >
              <CarouselOverlay
                title="Long Legs Walking "
                postDate="6 August 2017"
                link="/long-legs-walking/"
                tag="FASHION"
                tagLink="/category/fashion/"
              />
              <p className={cx("item-summary1")}>
                http://themeforest.net/ Proin gravida nibh vel velit auctor
                aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
                accumsan ipsum velit. Nam nec tellus a…
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
          newerPostsLink="/demo=6/Page/3"
          olderPostsLink="/demo=6/Page/5"
        />
      </div>
      <SidebarCustom />
      <FooterCustom />
    </div>
  );
}

export default Demo6P4;
