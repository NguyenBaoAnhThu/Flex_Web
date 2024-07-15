import styles from "./PhotographyPage3.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import NavLinks from "~/components/NavLinks";

const cx = classNames.bind(styles);

function PhotographyPage3() {
  return (
    <div>
      <Helmet>
        <title> Photography - Page 3 - Felix </title>
      </Helmet>
      <div>
        <div className={cx("wrapper")}>
          <div className={cx("container")}>
            <div className={cx("content")}>
              <CarouselOverlay
                title="Lanscap Photo Walk"
                postDate="2 August 2017"
                link="/lanscape-photo-walk/"
                tag="PHOTOGRAPHY"
                tagLink="/category/photography"
                customOverlay="custom-overlay"
              />
              <img src="https://demo.farost.net/felix/wp-content/uploads/2017/08/photo-1446064851258-7944734cb1bf-770x570.jpg" />
              <div className={cx("entry-summary")}>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                  nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                  velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                  Sed non mauris vitae erat consequat auctor eu in elit. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Mauris in erat justo.
                </p>
                <p>
                  Nullam ac urna eu felis dapibus condimentum sit amet a augue.
                  Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                  fermentum nunc. Etiam pharetra, erat sed fermentum feugiat,
                  velit mauris egestas quam, ut aliquam massa nisl quis neque.
                  Suspendisse in orci enim. Sed ut imperdiet nisi. Proin
                  condimentum fermentum nunc.
                </p>
                <a
                  href="/lanscape-photo-walk/"
                  className={cx("continue-reading")}
                >
                  CONTINUE READING...
                </a>
              </div>
              <EntryFooter  leaveCommentHref="/lanscape-photo-walk/" />
              <NavLinks
                newerPost="Newer Posts"
                showNewerPosts={true}
                showOlderPosts={false}
                newerPostsLink="/category/photography/page/2/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotographyPage3;
