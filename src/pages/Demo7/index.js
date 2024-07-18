import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import SidebarCustom from "~/components/Layout/CustomLayout/SidebarCustom";
import styles from "./Demo7.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import CarouselOverlay from "~/components/CarouselOverlay";
import UnHdDemo7 from "~/components/Layout/CustomLayout/UnHdDemo7";

import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo7() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Your Personal Blogging Friend</title>
      </Helmet>
      <Logo />
      <Header tableCellClassName7={cx(styles.demo7)} />
      <UnHdDemo7 />
      <div className={cx("wrapper")}>
        <div className={cx("content-container")}>
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/fashion-hat-straw-hat-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Vintage Cities"
              postDate="15 August 2017"
              link="/vintage-cities/"
              tag="TRAVEL"
              tagLink="/category/travel/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456689337957-34d689850f36-770x570.jpg" />
            </a>
            <CarouselOverlay
              title="Shoes without you"
              postDate="15 August 2017"
              link="/shoe-without-you/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1427088625471-da8a7193afd3-770x570.jpg" />
            </a>
            <CarouselOverlay
              title="Women Enterprenuer"
              postDate="15 August 2017"
              link="/women-enterprenuer/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-770x570.jpg" />
            </a>
            <CarouselOverlay
              title="My winter diary"
              postDate="14 August 2017"
              link="/my-winter-diary/"
              tag="PHOTOGRAPHY"
              tagLink="/category/photography/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <div className={cx("entry-summary1")}>
              <p>
                Cesar Chavez; free expression; medicine revitalize innovation.
                Safeguards technology health partnership nonprofit; accelerate.
                Generosity life-expectancy donate youth pride Bloomberg inspire
                breakthroughs opportunity honesty. Clean water, economic
                security, agency, grantees giving,…
              </p>
            </div>
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/man-hands-photographer-cameras-770x570.jpg" />
            </a>
            <CarouselOverlay
              title="Photograper's diary"
              postDate="13 August 2017"
              link="/photographers-diary/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1449614016987-8c215bb90b94-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="The Cold Weather"
              postDate="12 August 2017"
              link="/the-cold-weather/"
              tag="TRAVEL"
              tagLink="/category/travel/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1448582649076-3981753123b5-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Prefect Backpacking "
              postDate="12 August 2017"
              link="/perfect-backpacking/"
              tag="TRAVEL"
              tagLink="/category/travel/"
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/sport-white-rolls-skateboard-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Back To Drake "
              postDate="11 August 2017"
              link="/back-to-drake/"
              tag="BUSINESS"
              tagLink="/category/business/  "
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
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1452037302901-0f181216298e-570x422.jpg" />
            </a>
            <CarouselOverlay
              title="Working Hands Pray "
              postDate="10 August 2017"
              link="/working-hands-pray/"
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
        </div>
        <div className={cx("Overview")}>
          <nav aria-label="Page navigation example">
            <ul className={cx("pagination")}>
              <li className={cx("page-item")}><a className={cx("page-link")} href="/demo=7">1</a></li>
              <li className={cx("page-item")}><a className={cx("page-link")} href="/demo=7/Page/2">2</a></li>
              <li className={cx("page-item")}><a className={cx("pre-link")}>...</a></li>
              <li className={cx("page-item")}><a className={cx("page-link")} href="/demo=7/Page/5">5</a></li>
              <li className={cx("page-item")}>
                <a className={cx("button-right")} href="/demo=7/Page/2" aria-label="Next">
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

export default Demo7;
