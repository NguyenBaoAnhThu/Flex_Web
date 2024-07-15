import React from 'react';
import NavLinks from '~/components/NavLinks';
function Upload() {
  return (
    <div> 
        <NavLinks
              showNewerPosts={false}
              showOlderPosts={true}
              olderPostsLink="/Home/Page/2"
            />
    </div>
  );
}

export default Upload;
