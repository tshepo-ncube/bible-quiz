"use client";
import LeaderboardComponent from "@/components/LeaderboardComponent";
import Leaderboard from "@/components/LeaderboardComponent";
import QuizComponent from "@/components/QuizComponent";
import ShopComponent from "@/components/ShopComponent";
import React, { useEffect, useState } from "react";
import "./globals.css"; // Import CSS for star animations

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <QuizComponent />
      <ShopComponent />
      <LeaderboardComponent />
    </main>
  );
}
