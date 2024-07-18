import React from 'react';
import NavLinks from '~/components/NavLinks';
import classNames from 'classnames/bind';
import styles from './Home_Page6.module.scss';
import ContentHomeP6 from '~/components/Content/ContentHomeP6/index';

const cx = classNames.bind(styles);

function Home_Page6() {
  return (
    <div className={cx('homeWrapper')}>
      <ContentHomeP6 />
      <NavLinks
        classNameWrapper={cx('customWrapper')}
        newerPost="Newer Posts"
        olderPost="Older Posts"
        showNewerPosts={true}
        showOlderPosts={true}
        newerPostsLink="/Home/Page/5"
        olderPostsLink="/Home/Page/7"
      />
    </div>
  );
}

export default Home_Page6;
