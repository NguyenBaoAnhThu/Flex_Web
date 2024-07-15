import React from "react";
import { Helmet } from "react-helmet";
import styles from "./ElevationPhotosInTrend.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import TagLinks from "~/components/TagLinks";
import EntryFooter from "~/components/EntryFooter";
import NavLinks from "~/components/NavLinks";
import SpecialTittle from "~/components/SpecialTittle";
import FormPost from "~/components/FormPost";
import Author from "~/components/Author/index";

const cx = classNames.bind(styles);
function ElevationPhotosInTrend() {
  return (
    <div>
      <Helmet>
        <title>Elevation Photos In Trend - Felix </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Elevation Photos In Trend"
            postDate="9 August 2017"
            tag="PHOTOGRAPHY"
            tagLink="/category/photography/"
            customOverlay={cx(styles.customoverlay)}
          />
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457257626018-77036a3d4da0-770x570.jpg"/>
          <div className={cx("entry-summary")}>
          <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              in erat justo.
            </p>
            <p>
              Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
              non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris
              egestas quam, ut aliquam massa nisl quis neque. Suspendisse in
              orci enim. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc.
            </p>
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
              <strong>Population Size:</strong> Second, the fact that we’re holding everyone to
              the same high standards may mean that in some cases, equal
              opportunity may not always equate to equal participation. Here,
              we’ll incorporate lessons we’ve learned in the past, like how the
              Navy has integrated women onto surface ships and more recently,
              submarines. The Army and the Marine Corps will integrate women
              officers and senior enlisted into previously-closed units before
              integrating junior enlisted women, and where they can, they’ll
              assign more than just one woman into a unit at a time.
            </p>
          </div>
          <TagLinks
            tag2="Music"
            tag3="Travel"
            linktag2="/tag/music/"
            linktag3="/tag/travel/"
          />
          <EntryFooter leaveCommentHref="#" />
          <NavLinks
            classNameWrapper={cx(styles.navlinkswrapper)}
            newerPost="LAZY SUNDAY MORNING"
            olderPost="WILD LIKE WORKSHOP"
            showNewerPosts={true}
            showOlderPosts={true}
            newerPostsLink="/lazy-sunday-morning/"
            olderPostsLink="/wild-like-workshop/"
          />
          <Author />
          <SpecialTittle tittle="YOU MIGHT ALSO LIKE" />
          <div className={cx("list-posts")}>
            <div className={cx("entry-summary7-pictures")}>
              <div>
                <a href="/my-winter-diary/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a
                    href="/my-winter-diary/"
                    className={cx("entry-title")}
                  >
                    My winter diary
                  </a>
                  <a
                    href="/my-winter-diary/"
                    className={cx("entry-post-on")}
                  >
                    14 August 2017
                  </a>
                </div>
              </div>
              <div>
                <a href="/my-exterior-behaviors/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457466066908-9c1cfbf05a0e-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/my-exterior-behaviors/" className={cx("entry-title")}>
                    My exterior behaviors
                  </a>
                  <a
                    href="/my-exterior-behaviors/"
                    className={cx("entry-post-on")}
                  >
                    8 August 2017
                  </a>
                </div>
              </div>
              <div>
                <a href="/gone-with-the-wind/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445762467354-d6c921f33b14-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/gone-with-the-wind/" className={cx("entry-title")}>
                  Gone With The Wind
                  </a>
                  <a href="/gone-with-the-wind/" className={cx("entry-post-on")}>
                  6 August 2017
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

export default ElevationPhotosInTrend;
