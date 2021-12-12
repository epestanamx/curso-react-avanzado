import ProductCard from "../components";
import useShoppingCart from "../hooks/useShoppingCart";
import { Product } from "../interfaces/interfases";
import '../styles/custom-styles.css';

import { products } from "../data/products";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            value={shoppingCart[product.id]?.count || 0}
            className="bg-dark text-white"
            style={{
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
            }}
            onChange={onProductCountChange}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}

        <div className="shopping-cart">
          {Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              value={product.count}
              className="bg-dark text-white"
              style={{
                width: "100px",
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
              }}
              onChange={onProductCountChange}
            >
              <ProductCard.Image className="custom-image" />
              <ProductCard.Buttons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;