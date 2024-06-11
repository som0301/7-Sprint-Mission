import "./Tag.css";

function Tag({ children }) {
  return <a className="Tag">{`#${children}`}</a>;
}

export default Tag;
