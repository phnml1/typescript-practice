import React, { useRef } from "react";
interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}
function ShoppingListForm({onAddItem}: ShoppingListFormProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e:React.FormEvent) {
    e.preventDefault();
    // 반드시 값이 있음: !
    const newProduct = productInputRef.current!.value
    const quantity = parseInt(quantityInputRef.current!.value);
;    onAddItem(newProduct, quantity);
    productInputRef.current!.value = '';
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref = {productInputRef}/>
      <input type="number" min = {0} ref = {quantityInputRef}/>
      <button type="submit"> Add Item</button>
    </form>
  )
}
export default ShoppingListForm;