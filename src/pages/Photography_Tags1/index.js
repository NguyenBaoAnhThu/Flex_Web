import styles from "./Photography_Tags1.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import NavLinks from "~/components/NavLinks";

const cx = classNames.bind(styles);

function PhotographyTags1() {
  return (
    <div>
      <Helmet>
        <title> Photography - Felix </title>
      </Helmet>
      <div>
        <div className={cx("wrapper")}>
          <div className={cx("container")}>
            <div className={cx("content")}>
              <CarouselOverlay
                title="Shoe Without You "
                postDate="15 August 2017"
                link="/shoe-without-you/"
                tag="FASHION"
                tagLink="/category/fashion"
                customOverlay="custom-overlay"
              />
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456689337957-34d689850f36-770x570.jpg" />
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
                <a href="/shoe-without-you/" className={cx("continue-reading")}>
                  CONTINUE READING...
                </a>
              </div>
              <EntryFooter leaveCommentHref="/shoe-without-you/" />
              <div className={cx("card-container")}>
                <div className={cx("card-portrait")}>
                  <div className={cx("card-post")}>
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="My Winter Diary"
                        postDate="14 August 2017"
                        link="/my-winter-diary/"
                        tag="PHOTOGRAPHY"
                        tagLink="/category/photography"
                        customTitle="custom-title"
                        customePostDay="custom-postday"
                      />
                      <div className={cx("entry-summary1")}>
                        <p>
                          Cesar Chavez; free expression; medicine revitalize
                          innovation. Safeguards technology health partnership
                          nonprofit; accelerate. Generosity life-expectancy
                          donate youth pride Bloomberg inspire breakthroughs
                          opportunity honesty. Clean water, economic security,
                          agency, grantees giving, Rosa Parks metrics rural
                          making progress. Pride reproductive rights
                          participatory monitoring global network Medecins…
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={cx("card-post")}>
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/sport-white-rolls-skateboard-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Back To Drake"
                        postDate="11 August 2017"
                        link="/back-to-drake/"
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
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/95cdfeef-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Wordpress Theme "
                        postDate="10 August 2017"
                        link="/wordpress-theme/"
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
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213344097-6e0cb15024f9-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Lazy Sunday Morning"
                        postDate="9 August 2017"
                        link="/lazy-sunday-morning/"
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
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455772569729-9a95a88f3e9d-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Wild Like Workshop "
                        postDate="8 August 2017"
                        link="/wild-like-workshop/"
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
                </div>
              </div>
              <NavLinks
                olderPost="Older Posts"
                showNewerPosts={false}
                showOlderPosts={true}
                olderPostsLink="/tag/photography/page/2/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotographyTags1;
