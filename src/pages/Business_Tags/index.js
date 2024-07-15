import styles from "./Business_Tags.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import NavLinks from "~/components/NavLinks";
import GalleryComponent from "~/components/Gallery";

const cx = classNames.bind(styles);
const images = [
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1441986236893-3b3ed54c6cb1-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457178272755-08776f07dee3-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456348830699-7fb83b2d26b9-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1443242977742-25943754d269-770x570.jpg",
    linkUrl: "#",
  },
];
function BusinessTags() {
  return (
    <div>
      <Helmet>
        <title> Business - Felix </title>
      </Helmet>
      <div>
        <div className={cx("wrapper")}>
          <div className={cx("container")}>
            <div className={cx("content")}>
              <CarouselOverlay
                title="Vintage Cities"
                postDate="15 August 2017"
                link="/vintage-cities/"
                tag="TRAVEL"
                tagLink="/category/travel"
                customOverlay="custom-overlay"
              />
              <GalleryComponent images={images} className={cx("gallery-1")} />
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
                <a href="/vintage-cities/" className={cx("continue-reading")}>
                  CONTINUE READING...
                </a>
              </div>
              <EntryFooter leaveCommentHref="/vintage-cities/" />
              <div className={cx("card-container")}>
                <div className={cx("card-portrait")}>
                  <div className={cx("card-post")}>
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1449614016987-8c215bb90b94-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="The Cold Weather"
                        postDate="12 August 2017"
                        link="/the-cold-weather/"
                        tag="TRAVEL"
                        tagLink="/category/travel"
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
                        <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1448582649076-3981753123b5-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                    <CarouselOverlay
                        title="Prefect Backpacking"
                        postDate="12 August 2017"
                        link="/perfect-backpacking/"
                        tag="TRAVEL"
                        tagLink="/category/travel/"
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
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456962059735-289abeaff21c-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="The Breakfast Work"
                        postDate="10 August 2017"
                        link="/the-breakfast-work/"
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
                        <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457041106502-b6eb79642afd-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                    <CarouselOverlay
                        title="Jazz Haulters In Trend"
                        postDate="9 August 2017"
                        link="/jazzy-haulters-in-trend/"
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
                  <div
                    className={cx("card-post")}
                    style={{ borderBottom: "none" }}
                  >
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1422190441165-ec2956dc9ecc-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Sleeping Beauty"
                        postDate="7 August 2017"
                        link="/sleeping-beauty/"
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
                showNewerPosts={false}
                showOlderPosts={true}
                olderPostsLink="/tag/business/page/2/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessTags;
