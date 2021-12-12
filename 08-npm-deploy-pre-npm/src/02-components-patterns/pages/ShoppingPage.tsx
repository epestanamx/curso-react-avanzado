import ProductCard from "../components";
import '../styles/custom-styles.css';

import { products } from "../data/products";
const product = products[0];

export const ShoppingPage = () => {
    return (
      <div>
        <h1>Shopping Page</h1>
        <hr />

        <ProductCard
          product={product}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, isMaxCountReached, increaseBy, count }) => (
            <>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
            </>
          )}
        </ProductCard>
      </div>
    );
};

export default ShoppingPage;