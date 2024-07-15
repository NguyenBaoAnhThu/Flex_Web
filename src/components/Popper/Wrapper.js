import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from './Popper.module.scss';
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 

const cx = classNames.bind(styles);

function Wrapper({ children }) {
  const [dropdowns, setDropdowns] = useState({
    home: false,
    posts: false,
  });

  const handleToggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('sidenav-block')}>
        <div className={cx('sub-search')}>
          <input type="text" placeholder="SEARCH..." className={cx('search-input')} />
          <button className={cx('search-button')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
          </button>
        </div>
        <div className={cx('primary-menu-container')}>
          <ul className={cx('primary-menu')}>
            <li className={cx('primary-menu-home')}>
              <a href="#"> Home </a>
              <svg
                className={cx('btn-down-arrow', { open: dropdowns.home })}
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => handleToggleDropdown('home')}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </li>
            {dropdowns.home && (
              <div className={cx('sub-home')}>
                <table>
                  <tbody>
                    <tr><td className={cx('table-cell')}><a href="/demo=2">Demo 2</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="/demo=3">Demo 3</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="/demo=4">Demo 4</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="/demo=5">Demo 5</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="/demo=6">Demo 6</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="/demo=7">Demo 7</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="/demo=8">Demo 8</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Living Demo</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Food Demo</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Wedding Demo</a></td></tr>
                  </tbody>
                </table>
              </div>
            )}
            <li className={cx('primary-menu-posts')}>
              <a href="#"> Posts </a>
              <svg
                className={cx('btn-down-arrow', { open: dropdowns.posts })}
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => handleToggleDropdown('posts')}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </li>
            {dropdowns.posts && (
              <div className={cx('sub-home')}>
                <table>
                  <tbody>
                    <tr><td className={cx('table-cell')}><a href="#">Video Post</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Audio Post</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Sideshow Post</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Gallery Post</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Image Post</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Quote Post</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Link Post</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Post Full Width</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Page Default</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Page Left Sidebar</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Page Right Sidebar</a></td></tr>
                    <tr><td className={cx('table-cell')}><a href="#">Page Full Width Alternate</a></td></tr>
                  </tbody>
                </table>
              </div>
            )}
            <li className={cx('primary-menu-features')}><a href="#"> Features </a></li>
            <li className={cx('primary-menu-fashion')}><a href="#"> Fashion </a></li>
            <li className={cx('primary-menu-photography')}><a href="#"> Photography </a></li>
            <li className={cx('primary-menu-about')}><a href="#"> About </a></li>
            <li className={cx('primary-menu-contact')}><a href="#"> Contact </a></li>
          </ul>
        </div>
        <div className={cx('sub-author')} >
            <div className={cx('widget-title')}> About Me </div>
            <img 
                width="240" 
                height="240" 
                src="https://demo.farost.net/felix/wp-content/uploads/2017/08/about-me.jpg" 
                className={cx('portrait-author')} 
                alt="Felix" 
                decoding="async" 
                fetchpriority="high" 
            />
            <p className={cx('inf-author')}>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                 lorem quis bibendum auctor, nisi elit consequat ipsum...</p>
            <a href="#" className={cx('mom-blogger')}> Mom & Blogger </a>
            <img 
                width="150" 
                height="48" 
                src="http://demo.farost.net/felix/wp-content/uploads/2017/08/my-sign.png" 
                className={cx('signature-author')} 
                alt="Felix" 
                decoding="async" 
                fetchpriority="high" 
            />
            <div className={cx('widget-title')}> Social Me </div>
            <div className={cx('social-menu-container')} >
              <ul className={cx('list-social')}>
                  <li className={cx('icon')}>
                      <a href="#" title="Facebook" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                  </li>
                  <li className={cx('icon')}>
                      <a href="#" title="Twitter" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faTwitter} />
                      </a>
                  </li>
                  <li className={cx('icon')}>
                      <a href="#" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                  </li>
                  <li className={cx('icon')}>
                      <a href="#" title="Pinterest" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faPinterestP} />
                      </a>
                  </li>
              </ul>
            </div>
            <div className={cx('widget-custom')}>
                <a href="#" className={cx('widget-custom-item')}> Privacy </a>
                <a href="#" className={cx('widget-custom-item')}> Terms </a>
                <a href="#" className={cx('widget-custom-item')}> Advertise </a>
                <a href="#" className={cx('widget-custom-item')}> About </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
