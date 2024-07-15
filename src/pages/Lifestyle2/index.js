import styles from "./Lifestyle2.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import NavLinks from "~/components/NavLinks";

const cx = classNames.bind(styles);

function Lifestyle2() {
  return (
    <div>
      <Helmet>
        <title> Lifestyle - Page 2 - Felix </title>
      </Helmet>
      <div>
        <div className={cx("wrapper")}>
          <div className={cx("container")}>
            <div className={cx("content")}>
              <CarouselOverlay
                title="Gone With The Wind"
                postDate="6 August 2017"
                link="/gone-with-the-wind/"
                tag="PHOTOGRAPHY"
                tagLink="/category/photography"
                customOverlay="custom-overlay"
              />
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445762467354-d6c921f33b14-770x570.jpg" />
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
                  href="/gone-with-the-wind/"
                  className={cx("continue-reading")}
                >
                  CONTINUE READING...
                </a>
              </div>
              <EntryFooter leaveCommentHref="/gone-with-the-wind/" />
              <div className={cx("card-container")}>
                <div className={cx("card-portrait")}>
                  <div className={cx("card-post")}>
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457178272755-08776f07dee3-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Chase Your Dreams"
                        postDate="5 August 2017"
                        link="/chase-your-dreams/"
                        tag="FASHION"
                        tagLink="/category/fashion"
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
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_242651911-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Move Thinking Forward"
                        postDate="3 August 2017"
                        link="/move-thinking-forward/"
                        tag="BUSINESS"
                        tagLink="/category/business/"
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
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1452188530871-d44f2eaf1f3a-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Your Persona"
                        postDate="3 August 2017"
                        link="/your-persona/"
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
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Lanscape Photo Walk "
                        postDate="2 August 2017"
                        link="/lanscape-photo-walk/"
                        tag="PHOTOGRAPHY"
                        tagLink="/category/photography/"
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
                  <div
                    className={cx("card-post")}
                    style={{ borderBottom: "none" }}
                  >
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445915116209-31efbc3ae6b2-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="The Secrets Of Relationships "
                        postDate="1 August 2017"
                        link="/the-secrets-of-relationships/"
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
                newerPost="Newer Posts"
                showNewerPosts={true}
                showOlderPosts={true}
                newerPostsLink="/tag/lifestyle/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lifestyle2;
