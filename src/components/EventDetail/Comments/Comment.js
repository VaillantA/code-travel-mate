import PropTypes from 'prop-types';

import './style.scss';

const Message = ({ author, text }) => (
  <article className="comment">
    <p className="comment-author">{author}</p>
    <pre className="comment-content">{text}</pre>
  </article>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
