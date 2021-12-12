import { createContext, CSSProperties, ReactElement } from 'react';
import { InitialValues, OnChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfases';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  value?: number;
  children?:
    | ReactElement
    | ReactElement[]
    | ((Props: ProductCardHandlers) => JSX.Element);
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  initialValues?: InitialValues;
}

export const ProductCard = ({ product, value, children, className, style, onChange, initialValues }: Props) => {
  const { counter, increaseBy, reset, maxCount, isMaxCountReached } = useProduct({ product, onChange, value, initialValues });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {
          typeof children === 'function' ? children({
            count: counter,
            isMaxCountReached,
            maxCount,
            product,
            increaseBy,
            reset,
          }) : children
        }
      </div>
    </Provider>
  );
};

export default ProductCard;