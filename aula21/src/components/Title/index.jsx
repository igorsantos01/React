/* eslint-disable react/prop-types */
import style from "./style.module.css";
const Title = (props) => {
  return <h2 className={style.title}>{props.children}</h2>;
};

export default Title;
