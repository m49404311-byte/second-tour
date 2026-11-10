import Link from "next/link";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/config";

const BENEFITS = [
  {
    title: "Le rappel part tout seul",
    text: "Quatre semaines après la coupe, ton client reçoit un message. Toi, tu n'as rien à faire.",
  },
  {
    title: "Une offre de retour, une seule fois",
    text: "Un petit geste qui donne une raison de revenir cette semaine, sans brader tes prix.",
  },
  {
    title: "Tu vois ce que ça rapporte",
    text: "Combien de clients sont revenus, et combien d'euros ça représente. Pas de doute possible.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="mx-auto max-w-3xl px-5 pb-12 pt-6">
          <p className="font-display text-xl font-bold tracking-tight">
            {SITE.name}
          </p>
          <div className="pole mt-3 max-w-[120px]" />

          <h1 className="font-display mt-10 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            {SITE.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gris">{SITE.subhead}</p>

          <div className="mt-8 max-w-sm">
            <Link href="/commencer" className="btn">
              Commencer, c&apos;est gratuit
            </Link>
            <p className="mt-3 text-sm text-gris">
              3 questions, 1 minute. Pas de carte demandée.
            </p>
          </div>
        </section>

        <section className="bg-sapin text-papier">
          <div className="mx-auto max-w-3xl px-5 py-12">
            <p className="text-sm font-bold uppercase tracking-widest text-sable">
              Le calcul que personne ne fait
            </p>
            <p className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              10 clients oubliés par mois × 25 € la coupe × 12 mois =
              <span className="text-[#ff8a6b]"> 3 000 € par an.</span>
            </p>
            <p className="mt-4 max-w-xl text-sable">
              Ils ne sont pas mécontents. Ils pensaient repasser, et la vie a
              pris le dessus. Personne ne tient de fichier, personne ne les
              relance.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-12">
          <ul className="grid gap-4 sm:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <li key={b.title} className="card p-5">
                <span className="font-display text-3xl font-extrabold text-brique">
                  {i + 1}
                </span>
                <h2 className="font-display mt-2 text-xl font-bold leading-snug">
                  {b.title}
                </h2>
                <p className="mt-2 text-gris">{b.text}</p>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-12 max-w-sm">
            <Link href="/commencer" className="btn">
              Commencer, c&apos;est gratuit
            </Link>
            <p className="mt-3 text-center text-sm text-gris">
              Tu découvres ton chiffre avant de payer quoi que ce soit.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
