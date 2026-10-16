import { Card as C } from "flowbite-react";
import { forwardRef } from "react";

const Card = forwardRef(({product,text},ref) => {
   
    
  return (
    <C  ref={ref} className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {text} ---   Noteworthy technology acquisitions 2021 ---  {product}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </C>
  );
});

export default Card;
