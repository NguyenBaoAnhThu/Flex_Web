import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import SidebarCustom from "~/components/Layout/CustomLayout/SidebarCustom";
import styles from "./Demo7P2.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import CarouselOverlay from "~/components/CarouselOverlay";
import UnHdDemo7 from "~/components/Layout/CustomLayout/UnHdDemo7";

import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo7P2() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Page 2 - Your Personal Blogging Friend</title>
      </Helmet>
      <Logo />
      <Header tableCellClassName7={cx(styles.demo7)} />
      <UnHdDemo7 />
      <div className={cx("wrapper")}>
        <div className={cx("content-container")}>
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/95cdfeef-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Wordpress Theme "
              postDate="10 August 2017"
              link="/wordpress-theme/"
              tag="BUSINESS"
              tagLink="/category/business/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <div className={cx("entry-summary1")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit…
              </p>
            </div>
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213324382-98c478e77e1f-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Coldplay Beneath "
              postDate="10 August 2017"
              link="/coldplay-beneath/"
              tag="TRAVEL"
              tagLink="/category/travel/"
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
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456962059735-289abeaff21c-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="The Breakfast Work"
              postDate="10 August 2017"
              link="/the-breakfast-work/"
              tag="FASHION"
              tagLink="/category/fashion/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <div className={cx("entry-summary1")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit…
              </p>
            </div>
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457041106502-b6eb79642afd-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Jazzy Haulters In Trend"
              postDate="9 August 2017"
              tag="FASHION"
              tagLink="/category/fashion/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <div className={cx("entry-summary1")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit…
              </p>
            </div>
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213344097-6e0cb15024f9-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Lazy Sunday Morning"
              postDate="9 August 2017"
              link="/lazy-sunday-morning/"
              tag="PHOTOGRAPHY"
              tagLink="/category/photography/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <div className={cx("entry-summary1")}>
              <p>
                I was in Dubai to receive an award from HIPA for my
                contributions to photographic education, and the whole
                experience was just really surreal. I’m covering that part of
                the…
              </p>
            </div>
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457257626018-77036a3d4da0-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Elevation Photos In Trend"
              postDate="9 August 2017"
              link="/elevation-photos-in-trend/"
              tag="PHOTOGRAPHY"
              tagLink="/category/photography/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <div className={cx("entry-summary1")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit…
              </p>
            </div>
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455772569729-9a95a88f3e9d-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Wild Like Workshop"
              postDate="8 August 2017"
              link="/wild-like-workshop/"
              tag="PHOTOGRAPHY"
              tagLink="/category/photography/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <div className={cx("entry-summary1")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit…
              </p>
            </div>
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457466066908-9c1cfbf05a0e-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="My Exterior behaviors"
              postDate="8 August 2017"
              link="/my-exterior-behaviors/"
              tag="PHOTOGRAPHY"
              tagLink="/category/photography/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <div className={cx("entry-summary1")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit…
              </p>
            </div>
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1422190441165-ec2956dc9ecc-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Sleeping Beauty "
              postDate="7 August 2017"
              link="/sleeping-beauty/"
              tag="FASHION"
              tagLink="/category/fashion/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <div className={cx("entry-summary1")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit…
              </p>
            </div>
          </div>
          {/* ////////////////////// */}
        </div>
        <div className={cx("Overview")}>
          <nav aria-label="Page navigation example">
            <ul className={cx("pagination")}>
              <li className={cx("page-item")}>
                <a
                  className={cx("page-link")}
                  href="/demo=7"
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
                <a className={cx("page-link")} href="/demo=7/Page/2">
                  2
                </a>
              </li>
              <li className={cx("page-item")}>
                <a className={cx("page-link")} href="/demo=7/Page/3">
                  3
                </a>
              </li>
              <li className={cx("page-item")}>
                <a className={cx("pre-link")}>...</a>
              </li>
              <li className={cx("page-item")}>
                <a className={cx("page-link")} href="/demo=7/Page/5">
                  5
                </a>
              </li>
              <li className={cx("page-item")}>
                <a className={cx("button-right")} href="/demo=7/Page/3" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
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

export default Demo7P2;
