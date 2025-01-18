'use client'
import React, { createContext } from "react";
import Child1 from "./components/Child1";

// Create and export the context
export const DataContext = createContext({ fullName: "" });

function DataProvider() {
  return (
    <DataContext.Provider value={{ fullName: "Marjan Ahmed" }}>
      <Child1 />
    </DataContext.Provider>
  );
}

export default DataProvider;
