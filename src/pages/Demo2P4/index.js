import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header/index";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar/index";
import UnHdDemo2 from "~/components/Layout/CustomLayout/UnHdDemo2/index";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import styles from "./Demo2P4.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import NavLinks from "~/components/NavLinks";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo2P4() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Page 4 - Your Personal Blogging Friend</title>
      </Helmet>
      <Header tableCellClassName1={cx(styles.demo2)} />
      <Logo />
      <UnHdDemo2 />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("content")}>
            <CarouselOverlay
              title="Lanscape Photo Walk "
              postDate="2 August 2017"
              link="/lanscape-photo-walk/"
              tag="PHOTOGRAPHY"
              tagLink="/category/fashion/"
            />
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-770x570.jpg" />
            <div className={cx("entry-summary")}>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                non mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo.
              </p>
              <p>
                Nullam ac urna eu felis dapibus condimentum sit amet a augue.
                Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                fermentum nunc. Etiam pharetra, erat sed fermentum feugiat,
                velit mauris egestas quam, ut aliquam massa nisl quis neque.
                Suspendisse in orci enim. Sed ut imperdiet nisi. Proin
                condimentum fermentum nunc.
              </p>
              <a
                href="/lanscape-photo-walk/"
                className={cx("continue-reading")}
              >
                CONTINUE READING...
              </a>
            </div>
            <EntryFooter leaveCommentHref="/lanscape-photo-walk/" />
            <div className={cx("card-container")}>
              <div className={cx("card-portrait")}>
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
                    </p>
                  </div>
                </div>
                <div className={cx("card-post")}>
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445758184816-a0ad8e837278-570x422.jpg" />
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
                    </p>
                  </div>
                </div>
                {/* ////////////////////// */}
                <div className={cx("card-post")}>
                  <a href="#">
                    <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457439157612-a1891ff037ff-570x422.jpg" />
                  </a>
                  <CarouselOverlay
                    title="Features"
                    postDate="1 August 2017"
                    link="/features/"
                    tag="UNCATEGORIZED"
                    tagLink="/category/uncategorized/"
                    customOverlay={cx(styles.customoverlay)}
                    customTitle="custom-title"
                  />
                  <div className={cx("entry-summary1")}>
                    <p>
                      Cesar Chavez; free expression; medicine revitalize
                      innovation. Safeguards technology health partnership
                      nonprofit;  accelerate. Generosity life-expectancy donate
                      youth pride Bloomberg inspire breakthroughs opportunity
                      honesty. Clean water, economic security, agency, grantees
                      giving, Rosa Parks…
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <NavLinks
              newerPost="Newer Posts"
              showNewerPosts={true}
              showOlderPosts={false}
              newerPostsLink="/demo=2/Page/3"
            />
          </div>
          <Sidebar className={cx("sidebar")} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Demo2P4;
