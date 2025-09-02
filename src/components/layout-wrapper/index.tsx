"use client";

import React, { PropsWithChildren } from "react";
import Sidebar from "../sidebar";
import { sidebarLinks } from "../sidebar/menu-link";

const LayoutWrapper = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Sidebar sidebarLinks={sidebarLinks} />
      <main className="bg-red ml-[var(--sidebar-width)] px-6">{children}</main>
    </>
  );
};

export default LayoutWrapper;
