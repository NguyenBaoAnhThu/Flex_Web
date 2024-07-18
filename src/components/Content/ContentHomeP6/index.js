import React from "react";
import { Helmet } from "react-helmet";
import classNames from "classnames/bind";
import styles from "./ContentHomeP6.module.scss";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

function ContentHomeP6() {
  return (
    <div>
      <Helmet>
        <title>Felix – Page 6 – Your Personal Blogging Friend</title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          <CarouselOverlay
            title="Flower fiesta"
            postDate="2 August 2017"
            link="/flower-fiesta/"
            tag="FASHION"
            tagLink="/category/fashion/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1452696024259-cb7474e79947-770x570.jpg" />
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
            <a href="/flower-fiesta/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/flower-fiesta/" />
          <CarouselOverlay
            title="Object photography"
            postDate="2 August 2017"
            link="/object-photography/"
            tag="PHOTOGRAPHY"
            tagLink="/category/photography"
          />
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455134168668-4066045897c3-770x570.jpg"/>
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
            <a href="/object-photography/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/object-photography/" />
          <CarouselOverlay
            title="My Persona Around "
            postDate="2 August 2017"
            link="/my-persona-around/"
            tag="PHOTOGRAPHY"
            tagLink="/category/photography"
          />
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1455354269813-737d9df115bb-770x570.jpg"/>
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
            <a href="/my-persona-around/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/my-persona-around/" />
          <CarouselOverlay
            title="Lanscape Photo Walk"
            postDate="2 August 2017"
            link="/lanscape-photo-walk/"
            tag="PHOTOGRAPHY"
            tagLink="/category/photography"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-770x570.jpg" />
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
            <a href="/lanscape-photo-walk/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/lanscape-photo-walk/" />
          <CarouselOverlay
            title="The secrets of relationships"
            postDate="1 August 2017"
            link="/the-secrets-of-relationships/"
            tag="FASHION"
            tagLink="/category/fashion/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445915116209-31efbc3ae6b2-770x570.jpg" />
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
            <a href="/the-secrets-of-relationships/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>  
          <EntryFooter leaveCommentHref="/the-secrets-of-relationships/" />
          <CarouselOverlay
            title="Forest Hunger Game"
            postDate="1 August 2017"
            link="/forest-hunger-game/"
          />
          <a href="#">
            <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1445758184816-a0ad8e837278-770x570.jpg" />
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
            <a href="/forest-hunger-game/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/forest-hunger-game/" />
        </div>
      </div>
    </div>
  );
}

export default ContentHomeP6;
