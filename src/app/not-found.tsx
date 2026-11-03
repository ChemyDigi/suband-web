import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-display text-6xl text-ivory md:text-8xl">
        Not <em className="text-gold">here.</em>
      </h1>
      <p className="mt-6 max-w-sm text-ivory-2">That page has been melted down and recast as something else.</p>
      <div className="mt-10">
        <Button href="/">Back to the workshop</Button>
      </div>
    </section>
  );
}
