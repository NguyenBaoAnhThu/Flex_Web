import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import styles from "./PostFullWidth.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselOverlay from "~/components/CarouselOverlay";
import TagLinks from "~/components/TagLinks/index";
import NavLinks from "~/components/NavLinks/index";
import EntryFooter from "~/components/EntryFooter/index";
import Author from "~/components/Author/index";
import SpecialTittle from "~/components/SpecialTittle/index";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);

function PostFullWidth() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title> Move Thinking Forward – Felix </title>
      </Helmet>
      <Logo />
      <Header
        aboutClassName={cx(styles.aboutcustom)}
        customHomeClassName={cx(styles.customhome)}
      />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Move Thinking Forward"
            postDate="3 August 2017"
            tag="BUSINESS"
            tagLink="/category/business/"
            customOverlay={cx(styles.customoverlay)}
          />
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_242651911.jpg" />
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
            tag2="Lifestyle"
            tag3="Photography"
            linktag2="/tag/lifestyle/"
            linktag3="/tag/photography/"
            />
            <EntryFooter leaveCommentHref="/features/" />
            <NavLinks
              classNameWrapper={cx(styles.navlinkswrapper)}
              newerPost="LET THE BAGGAGE GO"
              olderPost="YOUR PERSONA"
              showNewerPosts={true}
              showOlderPosts={true}
              newerPostsLink="/let-the-baggage-go/"
              olderPostsLink="/your-persona/"
            />
            <Author authorwrapper={cx(styles.authorcustom)} />
            <SpecialTittle tittle="YOU MIGHT ALSO LIKE" />
            <div className={cx("list-posts")}>
            <div className={cx("entry-summary7-pictures")}>
              <div>
                <a href="/features/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457439157612-a1891ff037ff-770x570.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a
                    href="/features/"
                    className={cx("entry-title")}
                  >
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
                <a href="/saturday-night/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1444211353227-635db788ed4a-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/saturday-night/" className={cx("entry-title")}>
                    saturday night
                  </a>
                  <a
                    href="/saturday-night/"
                    className={cx("entry-post-on")}
                  >
                    10 August 2017
                  </a>
                </div>
              </div>
              <div>
                <a href="/flower-fiesta/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1452696024259-cb7474e79947-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/flower-fiesta/" className={cx("entry-title")}>
                    flower fiesta
                  </a>
                  <a href="/flower-fiesta/" className={cx("entry-post-on")}>
                    2 August 2017
                  </a>
                </div>
              </div>
            </div>
          </div>
          <FormPost/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostFullWidth;
