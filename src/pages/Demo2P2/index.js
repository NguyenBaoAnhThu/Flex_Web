import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header/index";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar/index";
import UnHdDemo2 from "~/components/Layout/CustomLayout/UnHdDemo2/index";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import styles from "./Demo2P2.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import NavLinks from "~/components/NavLinks";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo2P2() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Page 2 - Your Personal Blogging Friend</title>
      </Helmet>
      <Header tableCellClassName1={cx(styles.demo2)} />
      <Logo />
      <UnHdDemo2 />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("content")}>
            <CarouselOverlay
              title="The Breakfast Work"
              postDate="10 August 2017"
              link="/the-breakfast-work/"
              tag="FASHION"
              tagLink="/category/fashion/"
            />
            <iframe
              width="770"
              height="440"
              src="https://www.youtube.com/embed/dKeann_nWIs?si=5dHc1NeihtHMaafx"
              title="Video YouTube"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
              <a href="/the-breakfast-work/" className={cx("continue-reading")}>
                CONTINUE READING...
              </a>
            </div>
            <EntryFooter leaveCommentHref="/the-breakfast-work/" />
            <div className={cx("card-container")}>
              <div className={cx("card-portrait")}>
                <div className={cx("card-post")}>
                  <a href="#">
                    <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457041106502-b6eb79642afd-570x422.jpg" />
                  </a>
                  <CarouselOverlay
                    title="Jazzy Haulters In Trend"
                    postDate="9 August 2017"
                    link="/jazzy-haulters-in-trend//jazzy-haulters-in-trend/"
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
                      Not everyone is meant to be in your future. Some people
                      are just passing through to teach you lessons in life.Dr.
                      Seuss Proin gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin, lorem quis…
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
                    </p>
                  </div>
                </div>
                {/* ////////////////////// */}
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
                      http://themeforest.net/ Proin gravida nibh vel velit
                      auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                      auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                      id elit. Duis sed odio sit amet nibh vulputate cursus a…
                    </p>
                  </div>
                </div>
                {/* ////////////////////// */}
                <div className={cx("card-post")}>
                  <a href="#">
                    <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/95cdfeef-570x422.jpg" />
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
              newerPostsLink="/demo=2"
              olderPostsLink="/demo=2/Page/3"
            />
          </div>
          <Sidebar className={cx("sidebar")} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Demo2P2;
