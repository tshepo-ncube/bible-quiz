import LeaderboardComponent from "@/components/LeaderboardComponent";
import React from "react";

function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="mt-8">
        <LeaderboardComponent />
      </div>
    </main>
  );
}

export default page;
