'use client';

export default function MainContent() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      {/* Coloque aqui seus cards de projetos, etc. 
          Mantive só um placeholder pra não poluir. */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-zinc-800/70 bg-black/30 p-6">
          <h3 className="font-semibold text-lg">BravoForm — Smart Form</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Builder dinâmico com respostas em tempo real, PDF/CSV, e Firestore.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800/70 bg-black/30 p-6">
          <h3 className="font-semibold text-lg">Apetito BI — Power BI Embed</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Dashboards seguros com acesso por usuário via Firebase Auth.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800/70 bg-black/30 p-6">
          <h3 className="font-semibold text-lg">Agendador-Bravo — Desktop</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Agendador Python/Tkinter com auto-update e alertas.
          </p>
        </div>
      </div>
    </section>
  );
}
