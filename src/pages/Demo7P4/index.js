import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import SidebarCustom from "~/components/Layout/CustomLayout/SidebarCustom";
import styles from "./Demo7P4.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import CarouselOverlay from "~/components/CarouselOverlay";
import UnHdDemo7 from "~/components/Layout/CustomLayout/UnHdDemo7";

import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo7P4() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Page 4 - Your Personal Blogging Friend</title>
      </Helmet>
      <Logo />
      <Header tableCellClassName7={cx(styles.demo7)} />
      <UnHdDemo7 />
      <div className={cx("wrapper")}>
        <div className={cx("content-container")}>
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_242651911-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Move Thinking Forward"
              postDate="3 August 2017"
              link="/move-thinking-forward/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1452188530871-d44f2eaf1f3a-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Your Persona "
              postDate="3 August 2017"
              link="/your-persona/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1427096105551-15e2512fd2dc-570x422.jpg" />
            </a>
            <CarouselOverlay
             title="Gossip In The Town"
             postDate="3 August 2017"
             link="/gossip-in-the-town/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1452696024259-cb7474e79947-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Flower Fiesta"
              postDate="2 August 2017"
              link="/flower-fiesta/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455134168668-4066045897c3-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Object Photography "
              postDate="2 August 2017"
              link="/object-photography/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455354269813-737d9df115bb-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="My Persona Around "
              postDate="2 August 2017"
              link="/my-persona-around/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Lanscape Photo Walk "
              postDate="2 August 2017"
              link="/lanscape-photo-walk/"
              tag="PHOTOGRAPHY"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445915116209-31efbc3ae6b2-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="The Secrets Of Relationships"
              postDate="1 August 2017"
              link="/the-secrets-of-relationships/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445758184816-a0ad8e837278-570x422.jpg" />
            </a>
            <CarouselOverlay
             title="Forest Hunger Game"
             postDate="1 August 2017"
             link="/forest-hunger-game/"
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
                  href="/demo=7/Page/3"
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
                  href="/demo=7/Page/5"
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

export default Demo7P4;
