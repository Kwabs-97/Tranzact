"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import axios from "axios";

import { LoadingSpinner } from "../ui/loading-spinner";
import Skeleton from "../Skeleton";
import { Button } from "../ui/button";

//import action creators for use in our component
import { addToCart } from "@/lib/features/cart/cart-slice";

//import event triggers to the store
import { useAppDispatch } from "@/lib/hooks";

function Items() {
  const [imgData, setImgData] = useState([]);
  const [loading, setLoading] = useState({});

  useEffect(() => {
    setLoading(true);
    async function fetchBagsData() {
      const res = await axios.get("api/bags");
      const data = res.data;
      setImgData(data.imgData);
    }
    fetchBagsData();
    setLoading(false);
  }, []);

  const dispatch = useAppDispatch();

  function handleAddToCart() {
    dispatch(addToCart());
  }

  return (
    <div className="h-[calc(100vh-186px)] overflow-scroll px-3 py-8">
      {loading ? (
        <div className="w-screen h-[calc(70vh-186px)] overflow-hidden flex flex-row items-center justify-center">
          <p>We are fetching your bags.. just a moment 😉</p>
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex flex-row flex-wrap gap-3 w-full justify-center">
          {imgData.map((data) => {
            return (
              <div
                key={data._id}
                className="flex flex-1 flex-col items-center justify-between"
              >
                <Image
                  src={data.url}
                  alt={data.name}
                  height={80}
                  width={80}
                  className="w-full h-full object-scale-down"
                  placeholder="blur"
                  blurDataURL="https://placehold.co/40x40"
                />
                <p>Price:</p>
                <Button
                  className="p-1 text-sm border border-white"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
              </div>
            );
          })}
        </div>
      )}
      <div className="flex flex-row flex-wrap gap-3 w-full justify-center">
        {imgData.map((data) => {
          return (
            <div
              key={data._id}
              className="flex flex-1 flex-col items-center justify-between"
            >
              {loading ? (
                <Skeleton className="w-44 h-44" />
              ) : (
                <Image
                  src={data.url}
                  alt={data.name}
                  height={80}
                  width={80}
                  className="w-full h-full object-scale-down"
                />
              )}
              <p>Price:</p>
              <Button className="p-1 text-sm border border-white">
                Add to cart
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Items;
