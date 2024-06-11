import "./DividerLine.css";

function DividerLine({ space }) {
  const lineSpace = {
    margin: space,
  };

  return <hr className="DividerLine" style={lineSpace} />;
}

export default DividerLine;
