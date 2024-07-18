import React from "react";
import { Helmet } from "react-helmet";
import classNames from "classnames/bind";
import styles from "./ContentHome.module.scss";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import GalleryComponent from "~/components/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";


const cx = classNames.bind(styles);
const images = [
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1441986236893-3b3ed54c6cb1-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457178272755-08776f07dee3-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456348830699-7fb83b2d26b9-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1443242977742-25943754d269-770x570.jpg",
    linkUrl: "#",
  },
];
const images1 = [
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1448920231336-a3886589d68a-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457439157612-a1891ff037ff-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-770x570.jpg",
    linkUrl: "#",
  },
];
const images2 = [
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_280607738-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_321766322-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/shutterstock_242651911-770x570.jpg",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1457459588520-2ae325c92c09-770x570.jpg",
    linkUrl: "#",
  },
];
function ContentHome() {
  return (
    <div>
      <Helmet>
        <title>Felix – Your Personal Blogging Friend</title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          <CarouselOverlay
            title="Vintage Cities"
            link="/vintage-cities/"
            postDate="15 August 2017"
            tag="TRAVEL"
            tagLink="/category/travel/"
            customOverlay={cx(styles.customoverlay)}
          />
          <GalleryComponent images={images} className={cx("gallery-1")} />
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
            <a href="/vintage-cities/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/vintage-cities/" />
          <CarouselOverlay
            title="Shoe Without You"
            postDate="15 August 2017"
            link="/shoe-without-you/"
            tag="FASHION"
            tagLink="/category/fashion/"
          />

          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1456689337957-34d689850f36-770x570.jpg" />

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
            <a href="/shoe-without-you/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/shoe-without-you/" />
          <CarouselOverlay
            title="Women Enterprenuer"
            postDate="15 August 2017"
            link="/women-enterprenuer/"
            tag="BUSINESS"
            tagLink="/category/business/"
          />
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1427088625471-da8a7193afd3-770x570.jpg" />
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
            <a href="/women-enterprenuer/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/women-enterprenuer/" />
          <CarouselOverlay
            title="My Winter Diary"
            postDate="14 August 2017"
            link="/my-winter-diary/"
            tag="PHOTOGRAPHY"
            tagLink="/category/photography/"
          />
          <GalleryComponent images={images2} className={cx("gallery-1")} />
          <div className={cx("entry-summary")}>
            <p>
              Cesar Chavez; free expression; medicine revitalize innovation.
              Safeguards technology health partnership nonprofit; accelerate.
              Generosity life-expectancy donate youth pride Bloomberg inspire
              breakthroughs opportunity honesty. Clean water, economic security,
              agency, grantees giving, Rosa Parks metrics rural making progress.
              Pride reproductive rights participatory monitoring global network
              <span> Medecins du Monde</span> aid protect. Partner sustainable
              future.
            </p>
            <p>
              <strong>Transparent Standards:</strong> My first and foremost guiding principle was
              that the services would need to continue to apply transparent and
              objective standards for all career fields to ensure leaders assign
              tasks, jobs, and career fields throughout the force based on
              ability, not gender.
            </p>
            <a href="/my-winter-diary/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/my-winter-diary/" />
          <CarouselOverlay
            title="Photographer's Diary"
            postDate="13 August 2017"
            link="/photographers-diary/"
            tag="PHOTOGRAPHY"
            tagLink="/category/photography/"
          />
          <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/man-hands-photographer-cameras-770x570.jpg" />
          <div className={cx("entry-summary")}>
            <p>
              I was in Dubai to receive an award from HIPA for my contributions
              to photographic education, and the whole experience was just
              really surreal. I’m covering that part of the trip over on my blog
              at scottkelby.com, but here on exposure I’m going to focus on the
              2-1/2 days I got to shoot (the “half” day was actually 1-hour at
              dawn the first morning I arrived).
            </p>
            <p>
              The shot below is from dawn on our last day there — our new
              friend, cityscape and time-lapse photographer Daniel Cheong, was
              not only kind enough to arrange access to an awesome rooftop for a
              dawn shoot, he was an incredible wealth of knowledge on where and
              what to shoot in Dubai. If only we had met sooner. You know those
              incredible shots of Dubai where you see just the tops of the
              building sticking out of the clouds? Some of those are Daniel’s.
            </p>
            <a href="/photographers-diary/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/photographers-diary/" />
          <CarouselOverlay
            title="The Cold Weather"
            link="/the-cold-weather/"
            postDate="13 August 2017"
            tag="TRAVEL"
            tagLink="/category/travel/"
            customOverlay={cx(styles.customoverlay)}
          />
          <GalleryComponent images={images1} className={cx("gallery-1")} />
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
            <a href="/the-cold-weather/" className={cx("continue-reading")}>
              CONTINUE READING...
            </a>
          </div>
          <EntryFooter leaveCommentHref="/the-cold-weather/" />
          
        </div>
      </div>
    </div>
  );
}

export default ContentHome;
