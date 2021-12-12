import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/interfases";

interface UseProductArgs {
  product: Product;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
}

export const useProduct = ({ product, value = 0, onChange }: UseProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {

    if (isControlled.current) {
      return onChange!({ product, count: value });
    }


    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ product, count: newValue });
  };

  return { counter, increaseBy };
};

export default useProduct;
