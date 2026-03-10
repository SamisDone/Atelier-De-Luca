"use client";

import { createContext, useContext, useRef, RefObject, ReactNode } from "react";

const ScrollContainerContext = createContext<RefObject<HTMLDivElement | null> | null>(null);

export function useScrollContainer() {
  return useContext(ScrollContainerContext);
}

export function ScrollContainerProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <ScrollContainerContext.Provider value={ref}>
      <div
        ref={ref}
        id="scroll-container"
        className="h-[100svh] w-full overflow-y-scroll overflow-x-hidden snap-y snap-mandatory bg-background relative scroll-smooth scrollbar-hide"
      >
        {children}
      </div>
    </ScrollContainerContext.Provider>
  );
}
