import { useSelector } from 'react-redux';
import './style.scss';
import Comment from 'src/components/EventDetail/Comments/Comment';

const Comments = () => {
  const comments = useSelector((state) => state.events.listOfComments);

  return (
    <section className="comments">
      {comments.map((currentComment) => (
        <Comment
          key={currentComment.id}
          author={currentComment.author}
          text={currentComment.message}
        />
      ))};
    </section>
  );
};

export default Comments;
