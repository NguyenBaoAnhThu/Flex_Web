import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header/index";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar/index";
import UnHdDemo2 from "~/components/Layout/CustomLayout/UnHdDemo2/index";
import GalleryComponent from "~/components/Gallery";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import styles from "./Demo2.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import NavLinks from "~/components/NavLinks";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function Demo2() {
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
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Felix – Your Personal Blogging Friend</title>
      </Helmet>
      <Header tableCellClassName1={cx(styles.demo2)} />
      <Logo />
      <UnHdDemo2 />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("content")}>
            <CarouselOverlay
              title="Vintage Cities"
              postDate="15 August 2017"
              link="/vintage-cities/"
              tag="TRAVEL"
              tagLink="/category/travel/"
            />
            <GalleryComponent images={images} className={cx("gallery-1")} />
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
              <a href="/vintage-cities/" className={cx("continue-reading")}>
                CONTINUE READING...
              </a>
            </div>
            <EntryFooter leaveCommentHref="/vintage-cities/" />
            <div className={cx("card-container")}>
              <div className={cx("card-portrait")}>
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
                    </p>
                  </div>
                </div>
                {/* ////////////////////// */}
                <div className={cx("card-post")}>
                  <a href="#">
                    <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1427088625471-da8a7193afd3-570x422.jpg" />
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
                      Cesar Chavez; free expression; medicine revitalize
                      innovation. Safeguards technology health partnership
                      nonprofit; accelerate. Generosity life-expectancy donate
                      youth pride Bloomberg inspire breakthroughs opportunity
                      honesty. Clean water, economic security, agency, grantees
                      giving, Rosa Parks metrics…
                    </p>
                  </div>
                </div>
                {/* ////////////////////// */}
                <div className={cx("card-post")}>
                  <a href="#">
                    <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/man-hands-photographer-cameras-570x422.jpg" />
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
                      experience was just really surreal. I’m covering that part
                      of the trip over on…
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
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
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursus a sit…
                    </p>
                  </div>
                </div>
                {/* ////////////////////// */}
                <div className={cx("card-post")}>
                  <a href="#">
                    <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/95cdfeef-570x422.jpg" />
                  </a>
                  <CarouselOverlay
                    title="Wordpress Theme "
                    postDate="10 August 2017"
                    link="/wordpress-theme/"
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
                    <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213324382-98c478e77e1f-570x422.jpg" />
                  </a>
                  <CarouselOverlay
                    title="Coldplay Beneath "
                    postDate="10 August 2017"
                    link="/coldplay-beneath/"
                    tag="TRAVEL"
                    tagLink="/category/travel/"
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
                olderPost = "Older Posts"
                showNewerPosts={false}
                showOlderPosts={true}
                olderPostsLink="/demo=2/Page/2"
              />
          </div>
          <Sidebar className={cx("sidebar")} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Demo2;
