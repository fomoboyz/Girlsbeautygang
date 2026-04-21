import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhySection from "@/components/home/WhySection";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import ReviewsTeaser from "@/components/home/ReviewsTeaser";
import GroupCTA from "@/components/home/GroupCTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhySection />
      <GalleryTeaser />
      <ReviewsTeaser />
      <GroupCTA />
    </>
  );
}
