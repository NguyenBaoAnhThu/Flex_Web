import styles from "./Design_Tags.module.scss";
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
function DesignTags() {
  return (
    <div>
      <Helmet>
        <title> Design - Felix </title>
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
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456689337957-34d689850f36-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Shoe Without You"
                        postDate="15 August 2017"
                        link="/shoe-without-you/"
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
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/man-hands-photographer-cameras-770x570.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Photographer's Diary"
                        postDate="13 August 2017"
                        link="/photographers-diary/"
                        tag="PHOTOGRAPHY"
                        tagLink="/category/photography/"
                        customTitle="custom-title"
                        customePostDay="custom-postday"
                      />
                      <div className={cx("entry-summary1")}>
                        <p>
                          I was in Dubai to receive an award from HIPA for my
                          contributions to photographic education, and the whole
                          experience was just really surreal. I’m covering that
                          part of the trip over on my blog at scottkelby.com,
                          but here on exposure I’m going to…
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
                  <div
                    className={cx("card-post")}
                    style={{ borderBottom: "none" }}
                  >
                    <a href="#">
                      <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213324382-98c478e77e1f-570x422.jpg" />
                    </a>
                    <div className={cx("card-content")}>
                      <CarouselOverlay
                        title="Coldplay Beneath"
                        postDate="10 August 2017"
                        link="/coldplay-beneath/"
                        tag="TRAVEL"
                        tagLink="/category/travel/"
                        customTitle="custom-title"
                        customePostDay="custom-postday"
                      />
                      <div className={cx("entry-summary1")}>
                        <p>
                          Cesar Chavez; free expression; medicine revitalize
                          innovation. Safeguards technology health partnership
                          nonprofit;  accelerate. Generosity life-expectancy
                          donate youth pride Bloomberg inspire breakthroughs
                          opportunity honesty. Clean water, economic security,
                          agency, grantees giving, Rosa Parks metrics rural
                          making progress. Pride reproductive rights
                          participatory monitoring global network…
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
                olderPostsLink="/tag/design/page/2/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignTags;
