import Link from "next/link";
export default function NotFound() {
  return (
    <section className="py-40">
      <div className="wrap flex flex-col items-start gap-6">
        <span className="kicker">Error 404</span>
        <h1 className="font-serif text-6xl font-medium">Esta página no existe</h1>
        <Link href="/" className="btn-gold">Volver al inicio</Link>
      </div>
    </section>
  );
}
