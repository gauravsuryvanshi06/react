import "./App.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";

function App() {
  const productList = [
    {
      price: 99999,
      name: "Event 1",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Event 2",
      quantity: 0,
    },
    {
      price: 999,
      name: "Event 3",
      quantity: 0,
    },
    {
      price: 999,
      name: "Event 4",
      quantity: 0,
    },
    {
      price: 999,
      name: "Event 5",
      quantity: 0,
    },
  ];
  return (
    <>
      <NavBar />
      <main className="container mt-4">
        <ProductList productList={productList} />
      </main>
    </>
  );
}

export default App;
