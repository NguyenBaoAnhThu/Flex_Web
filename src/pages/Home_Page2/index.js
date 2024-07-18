import React from 'react';
import ContentHomeP2 from '~/components/Content/ContentHomeP2/index';
import NavLinks from '~/components/NavLinks/index';
import classNames from 'classnames/bind';
import styles from './Home_Page2.module.scss';

const cx = classNames.bind(styles);
function Home_Page2() {
  return (
    <div> 
        <ContentHomeP2/>
        <NavLinks
            classNameWrapper={cx('customWrapper')}
            newerPost="Newer Posts"
            olderPost="Older Posts"
            showNewerPosts={true}
            showOlderPosts={true}
            newerPostsLink="/"
            olderPostsLink="/Home/Page/3"
          />
    </div>
  );
}

export default Home_Page2;