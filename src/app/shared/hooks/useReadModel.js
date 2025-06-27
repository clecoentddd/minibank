"use client";

import { useEffect, useState } from "react";
import { readModelSubscribe } from "../infrastructure/readModelStore";

export function useReadModel(key) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(`[HOOK] Subscribing to read model '${key}'`);
    const unsubscribe = readModelSubscribe(key, (newData) => {
      console.log(`[HOOK] Read model '${key}' updated in hook:`, newData);
      setData(newData);
    });

    return () => {
      console.log(`[HOOK] Cleaning up subscription for '${key}'`);
      unsubscribe();
    };
  }, [key]);

  return data;
}