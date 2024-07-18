import React from "react";
import { Helmet } from "react-helmet";
import styles from "./JazzyHaultersInTrend.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import TagLinks from "~/components/TagLinks";
import EntryFooter from "~/components/EntryFooter";
import NavLinks from "~/components/NavLinks";
import SpecialTittle from "~/components/SpecialTittle";
import FormPost from "~/components/FormPost";
import Author from "~/components/Author/index";

const cx = classNames.bind(styles);
function JazzyHaultersInTrend() {
  return (
    <div>
      <Helmet>
        <title>Jazzy Haulters In Trend - Felix </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Jazzy Haulters In Trend"
            postDate="9 August 2017"
            tag="FASHION"
            tagLink="/category/fashion/"
            customOverlay={cx(styles.customoverlay)}
          />
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457041106502-b6eb79642afd-770x570.jpg"/>
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
            tag1="Art"
            tag2="Business"
            tag3="Design"
            linktag1="/tag/art"
            linktag2="/tag/business/"
            linktag3="/tag/design/"
          />
          <EntryFooter leaveCommentHref="#" />
          <NavLinks
            classNameWrapper={cx(styles.navlinkswrapper)}
            newerPost="THE BREAKFAST WORK"
            olderPost="LAZY SUNDAY MORNING"
            showNewerPosts={true}
            showOlderPosts={true}
            newerPostsLink="/the-breakfast-work/"
            olderPostsLink="/lazy-sunday-morning/"
          />
          <Author />
          <SpecialTittle tittle="YOU MIGHT ALSO LIKE" />
          <div className={cx("list-posts")}>
            <div className={cx("entry-summary7-pictures")}>
              <div>
                <a href="/lazy-sunday-morning/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213344097-6e0cb15024f9-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a
                    href="/lazy-sunday-morning/"
                    className={cx("entry-title")}
                  >
                    Lazy Sunday Morning
                  </a>
                  <a
                    href="/lazy-sunday-morning/"
                    className={cx("entry-post-on")}
                  >
                    9 August 2017
                  </a>
                </div>
              </div>
              <div>
                <a href="/beautiful-light/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1450280624943-de28ff588a6d-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/beautiful-light/" className={cx("entry-title")}>
                    Beautiful Light
                  </a>
                  <a
                    href="/beautiful-light/"
                    className={cx("entry-post-on")}
                  >
                    4 August 2017
                  </a>
                </div>
              </div>
              <div>
                <a href="/the-breakfast-work/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456962059735-289abeaff21c-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/the-breakfast-work/" className={cx("entry-title")}>
                  The breakfast work
                  </a>
                  <a href="/the-breakfast-work/" className={cx("entry-post-on")}>
                  10 August 2017
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

export default JazzyHaultersInTrend;
