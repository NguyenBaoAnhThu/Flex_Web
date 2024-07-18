import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header/index";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar/index";
import UnHdDemo2 from "~/components/Layout/CustomLayout/UnHdDemo2/index";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import styles from "./Demo2P3.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import NavLinks from "~/components/NavLinks";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo2P3() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Page 3 - Your Personal Blogging Friend</title>
      </Helmet>
      <Header tableCellClassName1={cx(styles.demo2)} />
      <Logo />
      <UnHdDemo2 />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("content")}>
            <CarouselOverlay
              title="Chase Your Dreams "
              postDate="5 August 2017"
              link="/chase-your-dreams/"
              tag="FASHION"
              tagLink="/category/fashion/"
            />
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457178272755-08776f07dee3-770x570.jpg"/>
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
              <a href="/chase-your-dreams/" className={cx("continue-reading")}>
                CONTINUE READING...
              </a>
            </div>
            <EntryFooter leaveCommentHref="/chase-your-dreams/" />
            <div className={cx("card-container")}>
              <div className={cx("card-portrait")}>
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
                    </p>
                  </div>
                </div>
                {/* ////////////////////// */}
                <div className={cx("card-post")}>
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455128677232-0413bef74851-770x570.jpg"/>
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
                    </p>
                  </div>
                </div>
                {/* ////////////////////// */}
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <NavLinks
              newerPost="Newer Posts"
              olderPost="Older Posts"
              showNewerPosts={true}
              showOlderPosts={true}
              newerPostsLink="/demo=2/Page/2"
              olderPostsLink="/demo=2/Page/4"
            />
          </div>
          <Sidebar className={cx("sidebar")} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Demo2P3;
