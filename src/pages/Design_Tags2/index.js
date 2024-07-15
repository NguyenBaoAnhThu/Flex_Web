import styles from "./Design_Tags2.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import NavLinks from "~/components/NavLinks";

const cx = classNames.bind(styles);
function DesignPage2() {
  return (
    <div>
      <Helmet>
        <title> Design - Page 2 - Felix </title>
      </Helmet>
      <div>
        <div className={cx("wrapper")}>
          <div className={cx("container")}>
            <div className={cx("content")}>
              <CarouselOverlay
                title="Jazz Haulters In Trend "
                postDate="9 August 2017"
                link="/jazzy-haulters-in-trend/"
                tag="FASHION"
                tagLink="/category/fashion"
                customOverlay="custom-overlay"
              />
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457041106502-b6eb79642afd-770x570.jpg" />
              <div className={cx("entry-summary")}>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                  nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                  velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                  Sed non mauris vitae erat consequat auctor eu in elit. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Mauris in erat justo.
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
                  href="/jazzy-haulters-in-trend/"
                  className={cx("continue-reading")}
                >
                  CONTINUE READING...
                </a>
              </div>
              <EntryFooter leaveCommentHref="/jazzy-haulters-in-trend/" />
              <div className={cx("card-container")}>
                <div className={cx("card-portrait")}>
                  <div className={cx("card-post")}>
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213344097-6e0cb15024f9-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Lazy Sunday Morning"
                        postDate="9 August 2017"
                        link="/lazy-sunday-morning/"
                        tag="PHOTOGRAPHY"
                        tagLink="/category/photography"
                        customTitle="custom-title"
                        customePostDay="custom-postday"
                      />
                      <div className={cx("entry-summary1")}>
                        <p>
                          Proin gravida nibh vel velit auctor aliquet. Aenean
                          sollicitudin, lorem quis bibendum auctor, nisi elit
                          consequat ipsum, nec sagittis sem nibh id elit. Duis
                          sed odio sit amet nibh vulputate cursus a sit amet
                          mauris. Morbi accumsan ipsum velit. Nam nec tellus a
                          odio…
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={cx("card-post")}>
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457466066908-9c1cfbf05a0e-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="My Exterior Behaviors"
                        postDate="8 August 2017"
                        link="/my-exterior-behaviors/"
                        tag="PHOTOGRAPHY"
                        tagLink="/category/photography"
                        customTitle="custom-title"
                        customePostDay="custom-postday"
                      />
                      <div className={cx("entry-summary1")}>
                        <p>
                          Not everyone is meant to be in your future. Some
                          people are just passing through to teach you lessons
                          in life.Dr. Seuss Proin gravida nibh vel velit auctor
                          aliquet. Aenean sollicitudin, lorem quis bibendum
                          auctor, nisi elit consequat ipsum, nec sagittis sem
                          nibh id…
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={cx("card-post")}>
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456615074700-1dc12aa7364d-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Tea With Sugar "
                        postDate="7 August 2017"
                        link="/tea-with-sugar/"
                        tag="FASHION"
                        tagLink="/category/fashion/"
                        customTitle="custom-title"
                        customePostDay="custom-postday"
                      />
                      <div className={cx("entry-summary1")}>
                        <p>
                          Proin gravida nibh vel velit auctor aliquet. Aenean
                          sollicitudin, lorem quis bibendum auctor, nisi elit
                          consequat ipsum, nec sagittis sem nibh id elit. Duis
                          sed odio sit amet nibh vulputate cursus a sit amet
                          mauris. Morbi accumsan ipsum velit. Nam nec tellus a
                          odio…
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={cx("card-post")}>
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457039948203-bf07b2c75940-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Long Legs Walking "
                        postDate="6 August 2017"
                        link="/long-legs-walking/"
                        tag="FASHION"
                        tagLink="/category/fashion/"
                        customTitle="custom-title"
                        customePostDay="custom-postday"
                      />
                      <div className={cx("entry-summary1")}>
                        <p>
                          http://themeforest.net/ Proin gravida nibh vel velit
                          auctor aliquet. Aenean sollicitudin, lorem quis
                          bibendum auctor, nisi elit consequat ipsum, nec
                          sagittis sem nibh id elit. Duis sed odio sit amet nibh
                          vulputate cursus a sit amet mauris. Morbi accumsan
                          ipsum velit. Nam nec tellus a…
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={cx("card-post")}
                    style={{ borderBottom: "none" }}
                  >
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457178272755-08776f07dee3-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                    <CarouselOverlay
                        title="Chase Your Dream"
                        postDate="5 August 2017"
                        link="/chase-your-dreams/"
                        tag="FASHION"
                        tagLink="/category/fashion/"
                        customTitle="custom-title"
                        customePostDay="custom-postday"
                      />
                      <div className={cx("entry-summary1")}>
                        <p>
                          Proin gravida nibh vel velit auctor aliquet. Aenean
                          sollicitudin, lorem quis bibendum auctor, nisi elit
                          consequat ipsum, nec sagittis sem nibh id elit. Duis
                          sed odio sit amet nibh vulputate cursus a sit amet
                          mauris. Morbi accumsan ipsum velit. Nam nec tellus a
                          odio…
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <NavLinks
                olderPost="Older Posts"
                newerPost="Newer Posts"
                showNewerPosts={true}
                showOlderPosts={true}
                olderPostsLink="/tag/design/page/3/"
                newerPostsLink="/tag/design/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignPage2;
