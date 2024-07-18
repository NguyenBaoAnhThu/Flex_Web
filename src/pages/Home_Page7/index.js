import React from 'react';
import NavLinks from '~/components/NavLinks';
import classNames from 'classnames/bind';
import styles from './Home_Page7.module.scss';
import ContentHomeP7 from '~/components/Content/ContentHomeP7/index';


const cx = classNames.bind(styles);

function Home_Page7() {
  return (
    <div className={cx('homeWrapper')}>
      <ContentHomeP7 />
      <NavLinks
        classNameWrapper={cx('customWrapper')}
        newerPost="Newer Posts"
        showNewerPosts={true}
        showOlderPosts={false}
        newerPostsLink="/Home/Page/6"
      />
    </div>
  );
}

export default Home_Page7;
