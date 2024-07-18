import React from 'react';
import NavLinks from '~/components/NavLinks';
import classNames from 'classnames/bind';
import styles from './Home_Page3.module.scss';
import ContentHomeP3 from '~/components/Content/ContentHomeP3';

const cx = classNames.bind(styles);

function Home_Page3() {
  return (
    <div className={cx('homeWrapper')}>
      <ContentHomeP3 />
      <NavLinks
        classNameWrapper={cx('customWrapper')}
        newerPost="Newer Posts"
        olderPost="Older Posts"
        showNewerPosts={true}
        showOlderPosts={true}
        newerPostsLink="/Home/Page/2"
        olderPostsLink="/Home/Page/4"
      />
    </div>
  );
}

export default Home_Page3;
