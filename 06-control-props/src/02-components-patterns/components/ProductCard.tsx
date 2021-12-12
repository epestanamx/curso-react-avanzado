import { createContext, CSSProperties, ReactElement } from 'react';
import { OnChangeArgs, Product, ProductContextProps } from '../interfaces/interfases';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  value?: number;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
}

export const ProductCard = ({ product, value, children, className, style, onChange }: Props) => {
  const { counter, increaseBy } = useProduct({ product, onChange, value });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;