import React from "react";
import { Helmet } from "react-helmet";
import classNames from "classnames/bind";
import styles from "./ContentHomeP2.module.scss";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import GalleryComponent from "~/components/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import AudioPlayer from "~/components/AudioPlayer";

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
  function ContentHomeP2() {
    return (
      <div>
        <Helmet>
          <title>Felix – Page 2 – Your Personal Blogging Friend</title>
        </Helmet>
        <div className={cx("wrapper")}>
          <div className={cx("content")}>
            <CarouselOverlay
              title="Prefect Backpacking"
              postDate="12 August 2017"
              link="/perfect-backpacking/"
              tag="TRAVEL"
              tagLink="/category/travel/"
            />
            <div>
              <AudioPlayer />
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
              <a href="/perfect-backpacking/" className={cx("continue-reading")}>
                CONTINUE READING...
              </a>
            </div>
             <EntryFooter leaveCommentHref="/perfect-backpacking/" />
            <CarouselOverlay
              title="Back To Drake"
              postDate="11 August 2017"
              link="/back-to-drake/"
              tag="BUSINESS"
              tagLink="/category/business/"
            />
            <div style={{ width: "780px" }}>
  
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/216846955&amp;color=ff5500"
          ></iframe>
              <div
                style={{
                  fontSize: "10px",
                  color: "#cccccc",
                  lineBreak: "anywhere",
                  wordBreak: "normal",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  fontFamily:
                    "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                  fontWeight: "100",
                }}
              >
                <a
                  href="https://soundcloud.com/octobersveryown"
                  title="octobersveryown"
                  target="_blank"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  octobersveryown
                </a>{" "}
                ·
                <a
                  href="https://soundcloud.com/octobersveryown/drake-back-to-back-freestyle"
                  title="Drake ~ Back To Back Freestyle"
                  target="_blank"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  Drake ~ Back To Back Freestyle
                </a>
              </div>
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
              <a href="/back-to-drake/" className={cx("continue-reading")}>
                CONTINUE READING...
              </a>
            </div>
             <EntryFooter leaveCommentHref="/back-to-drake/" />
            <CarouselOverlay
              title="Working Hands Pray"
              postDate="10 August 2017"
              link="/working-hands-pray/"
              tag="BUSINESS"
              tagLink="/category/business/"
            />
            <iframe
              width="780"
              height="450"
              src="https://www.youtube.com/embed/YE7VzlLtp-4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
              <a href="/working-hands-pray/" className={cx("continue-reading")}>
                CONTINUE READING...
              </a>
            </div>
             <EntryFooter leaveCommentHref="/working-hands-pray/" />
            <CarouselOverlay
              title="Wordpress Theme"
              postDate="10 August 2017"
              link="/wordpress-theme/"
              tag="BUSINESS"
              tagLink="/category/business/"
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
              <a href="/wordpress-theme/" className={cx("continue-reading")}>
                CONTINUE READING...
              </a>
            </div>
             <EntryFooter leaveCommentHref="/wordpress-theme/" />
            <CarouselOverlay
              title="Coldplay Beneath"
              postDate="10 August 2017"
              link="/coldplay-beneath/"
              tag="TRAVEL"
              tagLink="/category/travel/"
            />
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/134757562?h=67a23b0f62" // Đường dẫn nhúng từ Vimeo
              width="780"
              height="450"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <div className={cx("entry-summary")}>
              <p>
                Cesar Chavez; free expression; medicine revitalize innovation.
                Safeguards technology health partnership nonprofit; accelerate.
                Generosity life-expectancy donate youth pride Bloomberg inspire
                breakthroughs opportunity honesty. Clean water, economic security,
                agency, grantees giving, Rosa Parks metrics rural making progress.
                Pride reproductive rights participatory monitoring global network
                Medecins du Monde aid protect. Partner sustainable future.
              </p>
              <p>
                Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
                non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
                nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris
                egestas quam, ut aliquam massa nisl quis neque. Suspendisse in
                orci enim. Sed ut imperdiet nisi. Proin condimentum fermentum
                nunc.
              </p>
              <a href="/coldplay-beneath/" className={cx("continue-reading")}>
                CONTINUE READING...
              </a>
            </div>
             <EntryFooter leaveCommentHref="/coldplay-beneath/" />
            <CarouselOverlay
              title="The Breakfast Work"
              postDate="10 August 2017"
              link="/the-breakfast-work/"
              tag="FASHION"
              tagLink="/category/fashion/"
            />
            <iframe
            width="780"
            height="450"
            src="https://www.youtube.com/embed/dKeann_nWIs" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
              <a href="/the-breakfast-work/" className={cx("continue-reading")}>
                CONTINUE READING...
              </a>
            </div>
             <EntryFooter leaveCommentHref="/the-breakfast-work/" />
          </div>
        </div>
      </div>
    );
  }

export default ContentHomeP2;
