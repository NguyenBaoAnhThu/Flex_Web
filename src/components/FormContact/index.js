import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FormContact.module.scss';

const cx = classNames.bind(styles);

function FormContact() {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ comment: false, name: false, email: false });
  const [generalError, setGeneralError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    const newErrors = { comment: false, name: false, email: false };

    if (name.trim() === '') {
      newErrors.name = true;
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = true;
      isValid = false;
    }

    if (comment.trim() === '') {
      newErrors.comment = true;
      isValid = false;
    }

    setErrors(newErrors);
    setGeneralError(!isValid);

    if (isValid) {
      console.log('Form submitted successfully');
    } else {
      console.log('Form submission failed, please correct the errors');
    }
  };

  return (
    <div>
      <form className={cx("commentForm")} method="post" onSubmit={handleSubmit}>
        <div className={cx('input-inf')}>
          <div className={cx("input-name")}>
            <input
              id="name"
              name="author"
              type="text"
              value={name}
              size="30"
              placeholder="Your Name *"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div className={cx("error-message")} id="nameError">The field is required.</div>}
          </div>
          <div className={cx("input-email")}>
            <input
              id="email"
              name="email"
              type="text"
              value={email}
              size="30"
              placeholder="Your Email *"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className={cx("error-message")} id="emailError">The field is required.</div>}
          </div>
        </div>
        <div className={cx("input-comment")}>
          <textarea
            id="comment"
            className={cx("form-field")}
            name="comment"
            cols="45"
            rows="6"
            placeholder="Write Message *"
            aria-required="true"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          {errors.comment && <div className={cx("error-message")} id="commentError">The field is required.</div>}
        </div>
        <div className={cx("form-submit")}>
          <button name="submit" type="submit">Submit</button>
        </div>
        {generalError && (
          <div className={cx("error-message-general")}>
            One or more fields have an error. Please check and try again.
          </div>
        )}
      </form>
    </div>
  );
}

export default FormContact;
