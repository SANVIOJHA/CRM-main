"use client";

import React from "react";
import CustomerTable from "@/components/customertable/customerTable";
import OrderOverview from "@/components/custordcomp/custordComp";
import OrdersTable from "@/components/ordertable/orderTable";
import { Button } from "@/components/ui/button";
import useShopData from "@/hooks/fetchData";
import { useParams } from "next/navigation";

const ShopDetailsPage = () => {
  const params = useParams<{ shopname: string }>();
  const shopName = decodeURIComponent(params.shopname);

  const { data: shopInfo, loading, error } = useShopData();
  const currentEmail = typeof window !== "undefined" ? localStorage.getItem("email") : null;
  const ownerEmail = shopInfo?.shopDetails?.[0]?.email;

  if (loading) {
    return <div className="text-center mt-10">Loading shop data...</div>;
  }

  if (!shopInfo || ownerEmail !== currentEmail) {
    return <div className="flex justify-center items-center h-screen text-xl">Page Not Found</div>;
  }

  return (
    <main className="container pt-6 md:pt-12">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">{shopName}</h1>
        <OrderOverview />
      </header>
      <section>
        <CustomerTable />
        <OrdersTable />
      </section>
    </main>
  );
};

export default ShopDetailsPage;
