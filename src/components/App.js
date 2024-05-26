import Header from "./Layout/Header";

function App({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default App;
