import "./InfoBlock.css";

function InfoBlock({ title, children, direction = "row" }) {
  const detailDirection = {
    flexWrap: "wrap",
    flexDirection: direction,
  };

  return (
    <section className="InfoBlock">
      <h2 className="InfoBlock-title">{title}</h2>
      <div className="InfoBlock-detail" style={detailDirection}>
        {children}
      </div>
    </section>
  );
}

export default InfoBlock;
