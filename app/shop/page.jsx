import LeaderboardComponent from "@/components/LeaderboardComponent";
import ShopComponent from "@/components/ShopComponent";
import React from "react";

function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="mt-8">
        <ShopComponent />
      </div>
    </main>
  );
}

export default page;
