import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import FooterCustom from "~/components/Layout/CustomLayout/FooterCustom";
import SidebarCustom from "~/components/Layout/CustomLayout/SidebarCustom";
import styles from "./Demo8.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import CarouselOverlay from "~/components/CarouselOverlay";
import UnHdDemo7 from "~/components/Layout/CustomLayout/UnHdDemo7";
import EntryFooter from "~/components/EntryFooter";

import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo8() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Your Personal Blogging Friend</title>
      </Helmet>
      <Header tableCellClassName8={cx(styles.demo8)} />
      <Logo />
      <UnHdDemo7 />
      <div className={cx("wrapper")}>
        <div className={cx("content-container")}>
          <div className={cx("card-post")}>
            <CarouselOverlay
              title="Vintage Cities"
              postDate="15 August 2017"
              link="/vintage-cities/"
              tag="TRAVEL"
              tagLink="/category/travel/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/fashion-hat-straw-hat-570x422.jpg" />
            </a>
            <div className={cx("entry-summary1")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare…
              </p>
            </div>
            <EntryFooter customEntryFooter={cx(styles.customentryft)} leaveCommentHref="/vintage-cities/" />
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <CarouselOverlay
              title="Shoe Without You"
              postDate="15 August 2017"
              link="/shoe-without-you/"
              tag="FASHION"
              tagLink="/category/fashion/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456689337957-34d689850f36-770x570.jpg" />
            </a>
            <div className={cx("entry-summary1")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare…
              </p>
            </div>
            <EntryFooter customEntryFooter={cx(styles.customentryft)} leaveCommentHref="/shoe-without-you/" />
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <CarouselOverlay
              title="Women Enterprenuer"
              postDate="15 August 2017"
              link="/women-enterprenuer/"
              tag="BUSINESS"
              tagLink="/category/business/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1427088625471-da8a7193afd3-770x570.jpg" />
            </a>
            <div className={cx("entry-summary1")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare…
              </p>
            </div>
            <EntryFooter customEntryFooter={cx(styles.customentryft)} leaveCommentHref="/women-enterprenuer/" />
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <CarouselOverlay
              title="My Winter Diary"
              postDate="14 August 2017"
              link="/my-winter-diary/"
              tag="PHOTOGRAPHY"
              tagLink="/category/photography/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-770x570.jpg" />
            </a>
            <div className={cx("entry-summary1")}>
              <p>
                Cesar Chavez; free expression; medicine revitalize innovation.
                Safeguards technology health partnership nonprofit; accelerate.
                Generosity life-expectancy donate youth pride Bloomberg inspire
                breakthroughs opportunity honesty. Clean water, economic
                security, agency, grantees giving, Rosa Parks metrics rural
                making progress. Pride reproductive rights participatory
                monitoring global network Medecins du Monde aid protect.…
              </p>
            </div>
            <EntryFooter customEntryFooter={cx(styles.customentryft)} leaveCommentHref="/my-winter-diary/" />
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <CarouselOverlay
              title="Photographer's Diary"
              postDate="13 August 2017"
              link="/photographers-diary/"
              tag="PHOTOGRAPHY"
              tagLink="/category/photography/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/man-hands-photographer-cameras-770x570.jpg" />
            </a>
            <div className={cx("entry-summary1")}>
              <p>
                I was in Dubai to receive an award from HIPA for my
                contributions to photographic education, and the whole
                experience was just really surreal. I’m covering that part of
                the trip over on my blog at scottkelby.com, but here on exposure
                I’m going to focus on the 2-1/2…
              </p>
            </div>
            <EntryFooter customEntryFooter={cx(styles.customentryft)} leaveCommentHref="/photographers-diary/"/>
          </div>
          {/* ////////////////////// */}
          <div className={cx("card-post")}>
            <CarouselOverlay
               title="The Cold Weather"
               link="/the-cold-weather/"
               postDate="13 August 2017"
               tag="TRAVEL"
               tagLink="/category/travel/"
              customOverlay={cx(styles.customoverlay)}
              customTitle="custom-title"
            />
            <a href="#">
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1449614016987-8c215bb90b94-570x422.jpg" />
            </a>
            <div className={cx("entry-summary1")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare…
              </p>
            </div>
            <EntryFooter customEntryFooter={cx(styles.customentryft)} leaveCommentHref="/the-cold-weather/" />
          </div>
        </div>
        <div className={cx("Overview")}>
          <nav aria-label="Page navigation example">
            <ul className={cx("pagination")}>
              <li className={cx("page-item")}>
                <a className={cx("page-link")} href="/demo=8">
                  1
                </a>
              </li>
              <li className={cx("page-item")}>
                <a className={cx("page-link")} href="/demo=8/Page/2">
                  2
                </a>
              </li>
              <li className={cx("page-item")}>
                <a className={cx("pre-link")}>...</a>
              </li>
              <li className={cx("page-item")}>
                <a className={cx("page-link")} href="/demo=8/Page/7">
                  7
                </a>
              </li>
              <li className={cx("page-item")}>
                <a className={cx("button-right")} href="/demo=8/Page/2" aria-label="Next">
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

export default Demo8;
