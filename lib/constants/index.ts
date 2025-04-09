export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Garnet Minimart";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Grocery app built with Next.js";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
  email: "gierazon_admin@gmail.com",
  password: "123456",
};

export const signUpDefaultValues = {
  name: "",
  email: "",
  storeName: "",
  contactNo: "",
  password: "",
  confirmPassword: "",
};

export const shippingAddressDefaultValues = {
  fullName: "Losgano",
  streetAddress: "104",
  city: "Galimuyod",
  postalCode: "2709",
  country: "Philippines",
};

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(", ")
  : ["PayPal", "Gcash", "CashOnDelivery"];

export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || "CashOnDelivery";

export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 100;

export const productDefaultValues = {
  name: "",
  slug: "",
  category: "",
  images: [],
  brand: "",
  description: "",
  price: "0",
  stock: 0,
  rating: "0",
  numReviews: "0",
  isFeatured: false,
  banner: null,
};

export const USER_ROLES = process.env.USER_ROLES
  ? process.env.USER_ROLES.split(", ")
  : ["admin", "user"];

export const reviewFormDefaultValues = {
  title: "",
  comment: "",
  rating: 0,
};

export const SENDER_EMAIL = process.env.SENDER_EMAIL || "admin@ichooseiccb.com";

export const SEMAPHORE_API_KEY =
  process.env.SEMAPHORE_API_KEY || "8a7398df9b62a71fcd210dd5830d08c5";
