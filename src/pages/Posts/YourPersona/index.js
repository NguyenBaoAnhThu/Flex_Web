import React from "react";
import { Helmet } from "react-helmet";
import styles from "./YourPersona.module.scss";
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
        "https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_280607738-570x422.jpg",
      linkUrl: "#",
    },
    {
      imageUrl:
        "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457466066908-9c1cfbf05a0e-570x422.jpg",
      linkUrl: "#",
    },
    {
      imageUrl:
        "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457459588520-2ae325c92c09-570x422.jpg",
      linkUrl: "#",
    },
  ];
function YourPersona() {
  return (
    <div>
      <Helmet>
        <title>Your Persona - Felix </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Your Persona"
            postDate="3 August 2017"
            tag="FASHION"
            tagLink="/category/fashion/"
            customOverlay={cx(styles.customoverlay)}
          />
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1452188530871-d44f2eaf1f3a-770x570.jpg"/>
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
            <GalleryComponent images={images} className={cx("gallery-1")} />
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
            tag1 = "Design"
            tag2="Lifestyle"
            tag3="Music"
            linktag1="/tag/design"
            linktag2="/tag/lifestyle/"
            linktag3="/tag/music/"
          />
          <EntryFooter leaveCommentHref="#" />
          <NavLinks
            classNameWrapper={cx(styles.navlinkswrapper)}
            newerPost="MOVE THINKING FORWARD"
            olderPost="GOSSIP IN THE TOWN"
            showNewerPosts={true}
            showOlderPosts={true}
            newerPostsLink="/move-thinking-forward/"
            olderPostsLink="/gossip-in-the-town/"
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
                    1 August 2017
                  </a>
                </div>
              </div>
              <div>
                <a href="/flower-fiesta/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1452696024259-cb7474e79947-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/flower-fiesta/" className={cx("entry-title")}>
                    Flower Fiesta
                  </a>
                  <a
                    href="/flower-fiesta/"
                    className={cx("entry-post-on")}
                  >
                    2 August 2017
                  </a>
                </div>
              </div>
              <div>
                <a href="/elevation-photos-in-trend/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457257626018-77036a3d4da0-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/elevation-photos-in-trend/" className={cx("entry-title")}>
                    Elevation Photos In Trend
                  </a>
                  <a href="/elevation-photos-in-trend/" className={cx("entry-post-on")}>
                    9 August 2017
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

export default YourPersona;
