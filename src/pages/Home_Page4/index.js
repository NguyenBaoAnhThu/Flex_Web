import React from 'react';
import NavLinks from '~/components/NavLinks';
import classNames from 'classnames/bind';
import styles from './HomePage4.module.scss';
import ContentHomeP4 from '~/components/Content/ContentHomeP4/index';

const cx = classNames.bind(styles);

function Home_Page4() {
  return (
    <div className={cx('homeWrapper')}>
      <ContentHomeP4 />
      <NavLinks
        classNameWrapper={cx('customWrapper')}
        newerPost="Newer Posts"
        olderPost="Older Posts"
        showNewerPosts={true}
        showOlderPosts={true}
        newerPostsLink="/Home/Page/3"
        olderPostsLink="/Home/Page/5"
      />
    </div>
  );
}

export default Home_Page4;
