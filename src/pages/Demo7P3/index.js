import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import SidebarCustom from "~/components/Layout/CustomLayout/SidebarCustom";
import styles from "./Demo7P3.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import CarouselOverlay from "~/components/CarouselOverlay";
import UnHdDemo7 from "~/components/Layout/CustomLayout/UnHdDemo7";

import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo7P3() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Page 3 - Your Personal Blogging Friend</title>
      </Helmet>
      <Logo />
      <Header tableCellClassName7={cx(styles.demo7)} />
      <UnHdDemo7 />
      <div className={cx("wrapper")}>
        <div className={cx("content-container")}>
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456615074700-1dc12aa7364d-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Tea With Sugar"
              postDate="7 August 2017"
              link="/tea-with-sugar/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457039948203-bf07b2c75940-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Long Legs Walking "
              postDate="6 August 2017"
              link="/long-legs-walking/"
              tag="FASHION"
              tagLink="/category/fashion/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <div className={cx("entry-summary1")}>
              <p>
                http://themeforest.net/ Proin gravida nibh vel velit auctor
                aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                odio sit amet nibh…
              </p>
            </div>
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456587349840-30f5d8581fc8-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Reason To Be Happy "
              postDate="6 August 2017"
              link="/reason-to-be-happy/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445762467354-d6c921f33b14-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Gone With The Wind "
              postDate="6 August 2017"
              link="/gone-with-the-wind/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457178272755-08776f07dee3-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Chase Your Dreams "
              postDate="5 August 2017"
              link="/chase-your-dreams/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1444211353227-635db788ed4a-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Saturday Night"
              postDate="5 August 2017"
              link="/saturday-night/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455128677232-0413bef74851-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Crustie's Cones"
              postDate="5 August 2017"
              tag="PHOTOGRAPHY"
              tagLink="/category/photography/"
              link="/crusties-cones/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1450280624943-de28ff588a6d-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Beautiful Light"
              postDate="4 August 2017"
              link="/beautiful-light/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456412684996-31507d7d17b6-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Let The Baggage Go "
              postDate="4 August 2017"
              link="/let-the-baggage-go/"
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
                  href="/demo=7/Page/2"
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
                <a className={cx("page-link")} href="/demo=7/Page/4">
                  4
                </a>
              </li>
              <li className={cx("page-item")}>
                <a className={cx("page-link")} href="/demo=7/Page/5">
                  5
                </a>
              </li>
              <li className={cx("page-item")}>
                <a
                  className={cx("button-right")}
                  href="/demo=7/Page/4"
                  aria-label="Next"
                >
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

export default Demo7P3;
