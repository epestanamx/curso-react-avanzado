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
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, isMaxCountReached, increaseBy, count }) => (
            <>
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className="text-bold" />
              <ProductCard.Buttons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}
              <span>{count}</span>
            </>
          )}
        </ProductCard>
      </div>
    );
};

export default ShoppingPage;