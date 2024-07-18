import React from 'react';
import NavLinks from '~/components/NavLinks';
import classNames from 'classnames/bind';
import styles from './Home_Page5.module.scss';
import ContentHomeP5 from '~/components/Content/ContentHomeP5/index';

const cx = classNames.bind(styles);

function Home_Page5() {
  return (
    <div className={cx('homeWrapper')}>
      <ContentHomeP5 />
      <NavLinks
        classNameWrapper={cx('customWrapper')}
        newerPost="Newer Posts"
        olderPost="Older Posts"
        showNewerPosts={true}
        showOlderPosts={true}
        newerPostsLink="/Home/Page/4"
        olderPostsLink="/Home/Page/6"
      />
    </div>
  );
}

export default Home_Page5;
