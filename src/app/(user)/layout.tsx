import React from "react";
import LayoutWrapper from "@/components/layout-wrapper";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
