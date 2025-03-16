import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";

export const appContext = createContext();

export default function App({ Component, pageProps }) {
  const [addedToCart, setAddedToCart] = useState(0);
  const [addedProducts, setAddedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <>
      <Toaster />
      <appContext.Provider value={{addedToCart , setAddedToCart , addedProducts , setAddedProducts , totalPrice ,setTotalPrice}}>
        <Navbar />
        <Component
          {...pageProps}
        />
      </appContext.Provider>
    </>
  );
}
