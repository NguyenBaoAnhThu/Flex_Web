import React from 'react';
import ContentHome from '~/components/Content/ContentHome';
import NavLinks from '~/components/NavLinks';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('homeWrapper')}>
      <ContentHome />
      <NavLinks
        classNameWrapper={cx('customWrapper')}
        olderPost="Older Posts"
        showNewerPosts={false}
        showOlderPosts={true}
        olderPostsLink="/Home/Page/2"
      />
    </div>
  );
}

export default Home;
