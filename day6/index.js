const getProductsData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
};

const HeaderComponent = () => (
  <div style={{
    textAlign: "center",
    backgroundColor: "black",
    color: "white"
  }}>
    <h1>E-Commerce page</h1>
  </div>
);

const ProductComponent = ({ products }) => (
  <div id="prod-container">
    {products.map(product => (
      <div key={product.id}>
        <img src={product.thumbnail} alt={product.title} />
        <h1>{product.title}</h1>
      </div>
    ))}
  </div>
);

const FooterComponent = () => (
  <div style={{
    textAlign: "center",
    backgroundColor: "black",
    color: "white"
  }}>
    <h1>Copyright all rights reserved.</h1>
  </div>
);

const App = async () => {
  const products = await getProductsData();
  const reactElement = (
    <>
      <HeaderComponent />
      <ProductComponent products={products} />
      <FooterComponent />
    </>
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(reactElement);
};

App();
