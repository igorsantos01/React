/* eslint-disable react/prop-types */
const CommentList = ({ comments }) => {
  return (
    <section>
      {comments.length == 0 ? (
        <div>
          <p>Seja o primeiro a comentar</p>
        </div>
      ) : (
        comments.map((comment) => (
          <div key={comment.email}>
            <h3>{comment.email}</h3>
            <p style={{ fontSize: "0.8rem" }}>{comment.date}</p>
            <p>{comment.text}</p>
          </div>
        ))
      )}
    </section>
  );
};

export default CommentList;
