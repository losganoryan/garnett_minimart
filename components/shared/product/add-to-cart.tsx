"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus, Minus, Loader } from "lucide-react";
import { CartItem, Cart } from "@/types";
import { toast } from "sonner"; // Import Sonner toast
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { useTransition } from "react";

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(item);

      if (!res.success) {
        toast.error(res.message); // Error toast
        return;
      }

      // Success toast with functional action
      toast.success(res.message, {
        action: (
          <button
            className="bg-primary text-white px-3 py-1 rounded-md hover:bg-gray-800"
            onClick={() => router.push("/cart")} // Ensure the function runs onClick
          >
            Go to Cart
          </button>
        ),
      });
    });
  };

  // Handle remove from cart
  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId);

      if (!res.success) {
        toast.error(res.message); // Error toast
        return;
      }
      // Success toast with functional action
      toast.success(res.message, {
        action: (
          <button
            className="bg-primary text-white px-3 py-1 rounded-md hover:bg-gray-800"
            onClick={() => router.push("/cart")} // Ensure the function runs onClick
          >
            Go to Cart
          </button>
        ),
      });
    });
  };

  // Check if item is in cart
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button type="button" variant="outline" onClick={handleRemoveFromCart}>
        {isPending ? (
          <Loader className="w-4 h-4 animate-spin"></Loader>
        ) : (
          <Minus className="h-4 w-4" />
        )}
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button type="button" variant="outline" onClick={handleAddToCart}>
        {isPending ? (
          <Loader className="w-4 h-4 animate-spin"></Loader>
        ) : (
          <Plus className="h-4 w-4" />
        )}
      </Button>
    </div>
  ) : (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      {isPending ? (
        <Loader className="w-4 h-4 animate-spin"></Loader>
      ) : (
        <Plus className="h-4 w-4" />
      )}{" "}
      Add To Cart
    </Button>
  );
};

export default AddToCart;
