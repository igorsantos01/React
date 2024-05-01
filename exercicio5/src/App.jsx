import CommentForm from "./components/CommentForm";
import styles from "./App.module.css";
import CommentList from "./components/CommentList";
import useAddComment from "./hooks/useAddComment";
const App = () => {
  const { email, text, handleInput, createComment, comments } = useAddComment();

  return (
    <div className={styles.container}>
      <CommentForm
        email={email}
        text={text}
        handleInput={handleInput}
        createComment={createComment}
      />
      <CommentList comments={comments} />
    </div>
  );
};

export default App;
