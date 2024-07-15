import React from "react";
import { Helmet } from "react-helmet";
import classNames from "classnames/bind";
import styles from "./HomePage4.module.scss";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import NavLinks from "~/components/NavLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);
function HomePage4() {
  return (
    <div>
      <Helmet>
        <title>Felix – Page 4 – Your Personal Blogging Friend</title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          <CarouselOverlay
            title="Tea With Sugar"
            postDate="7 August 2017"
            link="https://www.facebook.com/"
            tag="FASHION"
            tagLink="https://www.facebook.com/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456615074700-1dc12aa7364d-770x570.jpg" />
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
            title="Long Legs Walking"
            postDate="6 August 2017"
            link="/long-legs-walking/"
            tag="FASHION"
            tagLink="/category/fashion"
          />
          <div className={cx("entry-link")} >
            <div className={cx("icon-entry")}>
              <FontAwesomeIcon icon={faShareSquare} style={{ cursor: 'pointer' }}  />
            </div>
            <a href="http://themeforest.net/" target="_blank" rel="noopener noreferrer" className={cx("link-rel")}>
                http://themeforest.net/
            </a>
          </div>
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
            title="Reason To Be Happy"
            postDate="6 August 2017"
            link="https://www.facebook.com/"
            tag="PHOTOGRAPHY"
            tagLink="https://www.facebook.com/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456587349840-30f5d8581fc8-770x570.jpg" />
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
            title="Gone With The Wind"
            postDate="6 August 2017"
            link="https://www.facebook.com/"
            tag="PHOTOGRAPHY"
            tagLink="https://www.facebook.com/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445762467354-d6c921f33b14-770x570.jpg" />
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
            title="Chase Your Dreams"
            postDate="5 August 2017"
            link="https://www.facebook.com/"
            tag="FASHION"
            tagLink="https://www.facebook.com/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457178272755-08776f07dee3-770x570.jpg" />
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
            title="Saturday Night"
            postDate="5 August 2017"
            link="https://www.facebook.com/"
            tag="FASHION"
            tagLink="https://www.facebook.com/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1444211353227-635db788ed4a-770x570.jpg" />
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
            newerPostsLink="/Home/Page/3"
            olderPostsLink="/Home/Page/5"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage4;
