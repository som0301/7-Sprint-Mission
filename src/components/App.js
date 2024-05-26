import Header from "./Layout/Header";

function App({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default App;
