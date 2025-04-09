import { Order } from "@/types";
import { SEMAPHORE_API_KEY } from "@/lib/constants";

export const sendSMSPurchaseReceipt = async ({ order }: { order: Order }) => {
  console.log(SEMAPHORE_API_KEY);

  const message = `Hi ${order.user.name}, your order ${order.id} is confirmed! 🎉 Please prepare ${order.totalPrice}`;

  const formData = new URLSearchParams();
  formData.append("apikey", SEMAPHORE_API_KEY);
  formData.append("number", order.user.contactNo);
  formData.append("message", message);

  try {
    console.log(order);
    const response = await fetch("https://semaphore.co/api/v4/messages", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message");
    }

    console.log(`${order.user.contactNo}`);
    return { success: true, data };
  } catch (error: any) {
    console.error("[Semaphore SMS Error]", error.message);
    return { success: false, error: error.message || "Unknown error" };
  }
};
