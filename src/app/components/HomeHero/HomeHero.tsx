"use client"
import { useState } from "react";
import "./HomeHero.css";

interface HomeHeroProps {
  title: string;
}

export const HomeHero: React.FC<HomeHeroProps> = ({title}) => {
  return (
    <div className="HomeHero">
      <h1>{title}</h1>
    </div>
  );
}
