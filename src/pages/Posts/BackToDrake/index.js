import React from "react";
import { Helmet } from "react-helmet";
import styles from "./BackToDrake.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import TagLinks from "~/components/TagLinks";
import EntryFooter from "~/components/EntryFooter";
import NavLinks from "~/components/NavLinks";
import SpecialTittle from "~/components/SpecialTittle";
import FormPost from "~/components/FormPost";
import Author from "~/components/Author/index";

const cx = classNames.bind(styles);

function BackToDrake() {
  return (
    <div>
      <Helmet>
        <title>Back To Drake - Felix </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Back To Drake"
            postDate="11 August 2017"
            tag="BUSINESS"
            tagLink="/category/business/"
            customOverlay={cx(styles.customoverlay)}
          />
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/216846955&color=ff5500"
          ></iframe>
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
              Fluctuation, Action Against Hunger onflict resolution many voices
              civil society. Incubation, carbon emissions reductions, invest;
              donation opportunity social entrepreneurship. Disrupt
              life-expectancy carbon rights policy dialogue resolve global
              organization frontline. Medecins du Monde progressive minority
              democracy social worker natural resources end hunger.
            </p>
            <p>
              Carbon emissions reductions, invest; donation opportunity social
              entrepreneurship. Policy dialogue resolve global organization
              frontline.
            </p>
          </div>
          <TagLinks
            tag1="Art"
            tag2="Design"
            tag3="Photography"
            linktag1="/tag/art"
            linktag2="/tag/design"
            linktag3="/tag/photography/"
          />
          <EntryFooter leaveCommentHref="/features/" />
          <NavLinks
            classNameWrapper={cx(styles.navlinkswrapper)}
            newerPost="PERFECT BACKPACKING"
            olderPost="WORKING HANDS PRAY"
            showNewerPosts={true}
            showOlderPosts={true}
            newerPostsLink="/perfect-backpacking/"
            olderPostsLink="/working-hands-pray/"
          />
          <Author />
          <SpecialTittle tittle="YOU MIGHT ALSO LIKE" />
          <div className={cx("list-posts")}>
            <div className={cx("entry-summary7-pictures")}>
              <div>
                <a href="/my-exterior-behaviors/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457466066908-9c1cfbf05a0e-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a
                    href="/my-exterior-behaviors/"
                    className={cx("entry-title")}
                  >
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
                <a href="/wild-like-workshop/">
                  <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455772569729-9a95a88f3e9d-570x422.jpg" />
                </a>
                <div className={cx("entry-content")}>
                  <a href="/wild-like-workshop/" className={cx("entry-title")}>
                    Wild Like Workshop
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

export default BackToDrake;
