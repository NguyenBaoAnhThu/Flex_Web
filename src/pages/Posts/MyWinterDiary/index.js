import React from "react";
import { Helmet } from "react-helmet";
import styles from "./MyWinterDiary.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import TagLinks from "~/components/TagLinks";
import EntryFooter from "~/components/EntryFooter";
import NavLinks from "~/components/NavLinks";
import SpecialTittle from "~/components/SpecialTittle";
import FormPost from "~/components/FormPost";
import Author from "~/components/Author/index";
import GalleryComponent from "~/components/Gallery";

const cx = classNames.bind(styles);
const images = [
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457459588520-2ae325c92c09-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_242651911-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_280607738-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_321766322-770x570.jpg",
    linkUrl: "#",
  },
];
function MyWinterDiary() {
  return (
    <div>
      <Helmet>
        <title>My Winter Diary - Felix </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="My Winter Diary"
            postDate="14 August 2017"
            tag="PHOTOGRAPHY"
            tagLink="/category/photography/"
            customOverlay={cx(styles.customoverlay)}
          />
          <GalleryComponent images={images} className={cx("gallery-1")} />
          <div className={cx("entry-summary")}>
            <p>
              Cesar Chavez; free expression; medicine revitalize innovation.
              Safeguards technology health partnership nonprofit; accelerate.
              Generosity life-expectancy donate youth pride Bloomberg inspire
              breakthroughs opportunity honesty. Clean water, economic security,
              agency, grantees giving, Rosa Parks metrics rural making progress.
              Pride reproductive rights participatory monitoring global network{" "}
              <span>Medecins du Monde</span> aid protect. Partner sustainable
              future.
            </p>
            <p>
              <strong>Transparent Standards:</strong> My first and foremost
              guiding principle was that the services would need to continue to
              apply transparent and objective standards for all career fields to
              ensure leaders assign tasks, jobs, and career fields throughout
              the force based on ability, not gender.In this respect, the
              services have been able to leverage the great amounts of data they
              gathered over three years’ worth of studies to make their
              standards up to date and operationally relevant. We found over the
              last few years that in some cases we were doing things because
              that’s the way we’ve always done them.
            </p>
            <p>
              In this respect, the services have been able to leverage the great
              amounts of data they gathered over three years’ worth of studies
              to make their standards up to date and operationally relevant. We
              found over the last few years that in some cases we were doing
              things because that’s the way we’ve always done them.
            </p>
            <p>
              <strong>Population Size:</strong> Second, the fact that we’re
              holding everyone to the same high standards may mean that in some
              cases, equal opportunity may not always equate to equal
              participation. Here, we’ll incorporate lessons we’ve learned in
              the past, like how the Navy has integrated women onto surface
              ships and more recently, submarines. The Army and the Marine Corps
              will integrate women officers and senior enlisted into
              previously-closed units before integrating junior enlisted women,
              and where they can, they’ll assign more than just one woman into a
              unit at a time.
            </p>
          </div>
          <TagLinks
            tag2="Lifestyle"
            tag3="Photography"
            linktag2="/tag/lifestyle/"
            linktag3="/tag/photography/"
          />
          <EntryFooter leaveCommentHref="/features/" />
          <NavLinks
            classNameWrapper={cx(styles.navlinkswrapper)}
            newerPost="WOMEN ENTERPRENUER"
            olderPost="PHOTOGRAPHER'S DIARY"
            showNewerPosts={true}
            showOlderPosts={true}
            newerPostsLink="/women-enterprenuer/"
            olderPostsLink="/photographers-diary/"
          />
          <Author />
          <SpecialTittle tittle="YOU MIGHT ALSO LIKE" />
          <div className={cx("list-posts")}>
            <div className={cx("entry-summary7-pictures")}>
              <div>
                <a href="/object-photography/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455134168668-4066045897c3-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a
                    href="/object-photography/"
                    className={cx("entry-title")}
                  >
                    object photography
                  </a>
                  <a
                    href="/object-photography/"
                    className={cx("entry-post-on")}
                  >
                    2 August 2017
                  </a>
                </div>
              </div>
              <div>
                <a href="/coldplay-beneath/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213324382-98c478e77e1f-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/coldplay-beneath/" className={cx("entry-title")}>
                    Coldplay beneath
                  </a>
                  <a
                    href="/coldplay-beneath/"
                    className={cx("entry-post-on")}
                  >
                    10 August 2017
                  </a>
                </div>
              </div>
              <div>
                <a href="/crusties-cones/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455128677232-0413bef74851-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/crusties-cones/" className={cx("entry-title")}>
                    Crustie's Cones
                  </a>
                  <a href="/crusties-cones/" className={cx("entry-post-on")}>
                    5 August 2017
                  </a>
                </div>
              </div>
            </div>
          </div>
          <FormPost />
        </div>
      </div>
    </div>
  );
}

export default MyWinterDiary;
