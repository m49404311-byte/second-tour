import type { Metadata } from "next";
import Funnel from "@/components/Funnel";

export const metadata: Metadata = {
  title: "Ton calcul en 3 questions — Second Tour",
  description:
    "Combien l'oubli te coûte chaque mois, et ce que tu pourrais récupérer. 3 questions, gratuit.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ paiement?: string }>;
}) {
  const { paiement } = await searchParams;
  return <Funnel cancelled={paiement === "annule"} />;
}
