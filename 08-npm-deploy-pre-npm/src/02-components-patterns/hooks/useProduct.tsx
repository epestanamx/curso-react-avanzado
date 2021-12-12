import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from "../interfaces/interfases";

interface UseProductArgs {
  product: Product;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
  initialValues?: InitialValues;
}

export const useProduct = ({ product, value = 0, onChange, initialValues }: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);
  const isControlled = useRef(!!onChange);

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }

    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {

    if (isControlled.current) {
      return onChange!({ product, count: value });
    }

    const newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount && newValue <= initialValues.maxCount) {
      setCounter(newValue);
      onChange && onChange({ product, count: newValue });
    }
  };

  const reset = () => {
    setCounter(initialValues?.count || value || 0);
    // onChange && onChange({ product, count: 0 });
  };

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.maxCount && counter === initialValues.maxCount,
    increaseBy,
    reset,
  };
};

export default useProduct;
