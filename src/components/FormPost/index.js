import React, { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './FormPost.module.scss';
import SpecialTittle from '~/components/SpecialTittle';
const cx = classNames.bind(styles);

function FormPost() {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    const handleSubmit = (event) => {
      event.preventDefault();
      const name = form.author.value.trim();
      const email = form.email.value.trim();
      const comment = form.comment.value.trim();
      if (!name && !email && !comment) {
        window.location.href = '/wp-comments-post.php';
      } else if (!name || !email || !comment) {
        alert('All fields are required');
      }
    };
    form.addEventListener('submit', handleSubmit);
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <div>
      <form ref={formRef} className={cx("commentForm")} method="post">
      <SpecialTittle
          tittle = "LEAVE A REPLY	"
          />
        <p className={cx("comment-form-field-notes")}>* All fields are required</p>
        <div className={cx("input-comment")}>
          <textarea
            id="comment"
            className={cx("form-field")}
            name="comment"
            cols="45"
            rows="6"
            placeholder="Write Message *"
            aria-required="true"
          ></textarea>
        </div>
        <div className={cx('input-inf')}>
          <div className={cx("input-name")}>
            <input
              id="name"
              name="author"
              type="text"
              size="30"
              placeholder="Your Name *"
            />
          </div>
          <div className={cx("input-email")}>
            <input
              id="email"
              name="email"
              type="text"
              size="30"
              placeholder="Your Email *"
            />
          </div>
        </div>
        <div className={cx("form-submit")}>
          <button name="submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormPost;
