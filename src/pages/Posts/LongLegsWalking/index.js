import React from "react";
import { Helmet } from "react-helmet";
import styles from "./LongLegsWalking.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import TagLinks from "~/components/TagLinks";
import EntryFooter from "~/components/EntryFooter";
import NavLinks from "~/components/NavLinks";
import SpecialTittle from "~/components/SpecialTittle";
import FormPost from "~/components/FormPost";
import Author from "~/components/Author";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function LongLegsWalking() {
  return (
    <div>
      <Helmet>
        <title>Long Legs Walking - Felix </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Long Legs Walking"
            postDate="6 August 2017"
            tag="FASHION"
            tagLink="/category/fashion/"
            customOverlay={cx(styles.customoverlay)}
          />
          <div className={cx("entry-link")} >
            <div className={cx("icon-entry")}>
              <FontAwesomeIcon icon={faShareSquare} style={{ cursor: 'pointer' }}  />
            </div>
            <a href="http://themeforest.net/" target="_blank" rel="noopener noreferrer" className={cx("link-rel")}>
                http://themeforest.net/
            </a>
          </div>
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
            tag1="Art"
            tag2="Design"
            tag3="Photography"
            linktag1="/tag/art/"
            linktag2="/tag/design/"
            linktag3="/tag/photography/"
          />
          <EntryFooter leaveCommentHref="/features/" />
          <NavLinks
            classNameWrapper={cx(styles.navlinkswrapper)}
            newerPost="TEA WITH SUGAR"
            olderPost="REASON TO BE HAPPY"
            showNewerPosts={true}
            showOlderPosts={true}
            newerPostsLink="/tea-with-sugar/"
            olderPostsLink="/reason-to-be-happy/"
          />
          <Author />
          <SpecialTittle tittle="YOU MIGHT ALSO LIKE" />
          <div className={cx("list-posts")}>
            <div className={cx("entry-summary7-pictures")}>
              <div>
                <a href="/features/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457439157612-a1891ff037ff-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/features/" className={cx("entry-title")}>
                    features
                  </a>
                  <a
                    href="/features/"
                    className={cx("entry-post-on")}
                  >
                    1 August 2017
                  </a>
                </div>
              </div>
              <div>
                <a href="/object-photography/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455134168668-4066045897c3-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/object-photography/" className={cx("entry-title")}>
                    Object Photography
                  </a>
                  <a href="/object-photography/" className={cx("entry-post-on")}>
                    2 August 2017
                  </a>
                </div>
              </div>
              <div>
                <a href="/the-breakfast-work/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456962059735-289abeaff21c-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/the-breakfast-work/" className={cx("entry-title")}>
                    The Breakfast Work
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

export default LongLegsWalking;
