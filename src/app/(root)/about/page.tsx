"use client";

import Image from "next/image";
import { CompanyHistorySection } from "./_components/CompanyHistorySection";
import { TeamSection } from "./_components/TeamSection";
import { CultureSection } from "./_components/CultureSection";

const AboutPage = () => {
  return (
    <>
      <CompanyHistorySection />
      <TeamSection />
      <CultureSection />
    </>
  );
};

export default AboutPage;
