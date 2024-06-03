export default function ProductSectionHeader({ children, text }) {
  return (
    <div className="product-section__header">
      <h2 className="product-section__header-text">{text}</h2>
      {children}
    </div>
  );
}
