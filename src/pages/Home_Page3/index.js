import React from "react";
import { Helmet } from "react-helmet";
import classNames from "classnames/bind";
import styles from "./HomePage3.module.scss";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import NavLinks from "~/components/NavLinks";
import BlockQuote from "~/components/BlockQuote";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);
const images = [
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1441448770220-76743f9e6af6-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/95cdfeef-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457041106502-b6eb79642afd-770x570.jpg",
    linkUrl: "#",
  },
];
function HomePages3() {
  return (
    <div>
      <Helmet>
        <title>Felix – Page 3 – Your Personal Blogging Friend</title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          <CarouselOverlay
            title="Jazzy Haulters In Trend"
            postDate="9 August 2017"
            link="https://www.facebook.com/"
            tag="FASHION"
            tagLink="https://www.facebook.com/"
          />
          <a href="#">
            <img
              src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457041106502-b6eb79642afd-770x570.jpg"
              alt="Description of the image"
            />
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
            <a href="#" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter />
          <CarouselOverlay
            title="Lazy Sunday Morning"
            postDate="9 August 2017"
            link="https://www.facebook.com/"
            tag="PHOTOGRAPHY"
            tagLink="https://www.facebook.com/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457213344097-6e0cb15024f9-770x570.jpg" />
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
            <a href="#" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter />
          <CarouselOverlay
            title="Elevation Photos In Trend"
            postDate="9 August 2017"
            link="https://www.facebook.com/"
            tag="PHOTOGRAPHY"
            tagLink="https://www.facebook.com/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457257626018-77036a3d4da0-770x570.jpg" />
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
            <a href="#" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter />
          <CarouselOverlay
            title="Wild Like Workshop"
            postDate="8 August 2017"
            link="https://www.facebook.com/"
            tag="PHOTOGRAPHY"
            tagLink="https://www.facebook.com/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455772569729-9a95a88f3e9d-770x570.jpg" />
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
            <a href="#" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter />
          <CarouselOverlay
            title="My Exterior Behaviors"
            postDate="8 August 2017"
            link="https://www.facebook.com/"
            tag="PHOTOGRAPHY"
            tagLink="https://www.facebook.com/"
          />
          <BlockQuote/>
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
            <a href="#" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter />
          <CarouselOverlay
            title="Sleeping Beauty"
            postDate="7 August 2017"
            link="https://www.facebook.com/"
            tag="FASHION"
            tagLink="https://www.facebook.com/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1422190441165-ec2956dc9ecc-770x570.jpg" />
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
            <a href="#" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter />
          <NavLinks
            showNewerPosts={true}
            showOlderPosts={true}
            newerPostsLink="/Home/Page/2"
            olderPostsLink="/Home/Page/4"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePages3;
