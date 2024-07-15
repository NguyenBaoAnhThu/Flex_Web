import React from "react";
import { Helmet } from "react-helmet";
import styles from "./LazySundayMorning.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import TagLinks from "~/components/TagLinks";
import EntryFooter from "~/components/EntryFooter";
import NavLinks from "~/components/NavLinks";
import SpecialTittle from "~/components/SpecialTittle";
import FormPost from "~/components/FormPost";
import Author from "~/components/Author/index";

const cx = classNames.bind(styles);
function LazySundayMorning() {
  return (
    <div>
      <Helmet>
        <title>Lazy Sunday Morning - Felix </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Lazy Sunday Morning"
            postDate="9 August 2017"
            tag="PHOTOGRAPHY"
            tagLink="/category/photography/"
            customOverlay={cx(styles.customoverlay)}
          />
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213344097-6e0cb15024f9-770x570.jpg"/>
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
            tag2="Design"
            tag3="Photography"
            linktag1="/tag/art"
            linktag2="/tag/design/"
            linktag3="/tag/photography/"
          />
          <EntryFooter leaveCommentHref="#" />
          <NavLinks
            classNameWrapper={cx(styles.navlinkswrapper)}
            newerPost="JAZZY HAULTERS IN TREND"
            olderPost="ELEVATION PHOTOS IN TREND"
            showNewerPosts={true}
            showOlderPosts={true}
            newerPostsLink="/jazzy-haulters-in-trend/"
            olderPostsLink="/elevation-photos-in-trend/"
          />
          <Author />
          <SpecialTittle tittle="YOU MIGHT ALSO LIKE" />
          <div className={cx("list-posts")}>
            <div className={cx("entry-summary7-pictures")}>
              <div>
                <a href="/tea-with-sugar/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456615074700-1dc12aa7364d-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a
                    href="/tea-with-sugar/"
                    className={cx("entry-title")}
                  >
                    Tea With Sugar
                  </a>
                  <a
                    href="/tea-with-sugar/"
                    className={cx("entry-post-on")}
                  >
                    7 August 2017
                  </a>
                </div>
              </div>
              <div>
                <a href="/wild-like-workshop/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455772569729-9a95a88f3e9d-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/wild-like-workshop/" className={cx("entry-title")}>
                    Wild Like The Workshop
                  </a>
                  <a
                    href="/wild-like-workshop/"
                    className={cx("entry-post-on")}
                  >
                    8 August 2017
                  </a>
                </div>
              </div>
              <div>
                <a href="/my-winter-diary/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/my-winter-diary/" className={cx("entry-title")}>
                  My Winter Diary
                  </a>
                  <a href="/my-winter-diary/" className={cx("entry-post-on")}>
                  14 August 2017
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

export default LazySundayMorning;
