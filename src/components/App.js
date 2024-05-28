import Header from "./Layout/Header";

function App({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default App;
