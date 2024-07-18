import React from "react";
import { Helmet } from "react-helmet";
import classNames from "classnames/bind";
import styles from "./ContentHomeP5.module.scss";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import GalleryComponent from "~/components/Gallery/index";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);
const images = [
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_321766322-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456412684996-31507d7d17b6-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_280607738-770x570.jpg",
    linkUrl: "#",
  },
];
function ContentHomeP5() {
  return (
    <div>
      <Helmet>
        <title>Felix – Page 5 – Your Personal Blogging Friend</title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          <CarouselOverlay
            title="Crustie's Cones"
            postDate="5 August 2017"
            link="/crusties-cones/"
            tag="PHOTOGRAPHY"
            tagLink="/category/photography/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455128677232-0413bef74851-770x570.jpg" />
          </a>
          <div className={cx("entry-summary1")}>
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
            <a href="/crusties-cones/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/crusties-cones/" />
          <CarouselOverlay
            title="Beautiful Light"
            postDate="4 August 2017"
            link="/beautiful-light/"
            tag="PHOTOGRAPHY"
            tagLink="/category/photography"
          />
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1450280624943-de28ff588a6d-770x570.jpg"/>
          <div className={cx("entry-summary1")}>
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
            <a href="/beautiful-light/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/beautiful-light/" />
          <CarouselOverlay
            title="Let The Baggage Go "
            postDate="4 August 2017"
            link="/let-the-baggage-go/"
            tag="FASHION"
            tagLink="/category/fashion/"
          />
          <GalleryComponent images={images} className={cx("gallery-1")} />
          <div className={cx("entry-summary1")}>
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
            <a href="/let-the-baggage-go/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/let-the-baggage-go/" />
          <CarouselOverlay
            title="Move Thinking Forward"
            postDate="3 August 2017"
            link="/move-thinking-forward/"
            tag="BUSINESS"
            tagLink="/category/business/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_242651911-770x570.jpg" />
          </a>
          <div className={cx("entry-summary1")}>
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
            <a href="/move-thinking-forward/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/move-thinking-forward/" />
          <CarouselOverlay
            title="Your persona"
            postDate="3 August 2017"
            link="/your-persona/"
            tag="FASHION"
            tagLink="/category/fashion/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1452188530871-d44f2eaf1f3a-770x570.jpg" />
          </a>
          <div className={cx("entry-summary1")}>
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
            <a href="/your-persona/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>  
          <EntryFooter leaveCommentHref="/your-persona/" />
          <CarouselOverlay
            title="Gossip In The Town"
            postDate="3 August 2017"
            link="/gossip-in-the-town/"
            tag="FASHION"
            tagLink="/category/fashion/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1427096105551-15e2512fd2dc-770x570.jpg" />
          </a>
          <div className={cx("entry-summary1")}>
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
            <a href="/gossip-in-the-town/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/gossip-in-the-town/" />
        </div>
      </div>
    </div>
  );
}

export default ContentHomeP5;
