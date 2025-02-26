import { cn } from "@/lib/utils";

const ProductPrice = ({ value }: { value: number; className?: string }) => {
  //ensure two decimal places
  const stringValue = value.toFixed(2);
  //Get the int/float
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl, className")}>
      <span className="text-xs align-super">&#8369;</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
