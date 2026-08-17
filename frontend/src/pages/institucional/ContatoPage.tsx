import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

interface ContatoForm {
  nome: string;
  email: string;
  mensagem: string;
}

const valoresIniciais: ContatoForm = {
  nome: "",
  email: "",
  mensagem: "",
};

export default function ContatoPage() {
  const [form, setForm] = useState<ContatoForm>(valoresIniciais);
  const [enviado, setEnviado] = useState(false);

  function handleChange(campo: keyof ContatoForm, valor: string) {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
    setForm(valoresIniciais);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#7c2d12]">Fale Conosco</h1>
        <p className="mt-3 text-stone-600">
          Estamos por aqui para ajudar. Responda o formulário ou use um dos
          canais abaixo.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-stone-200 p-6"
        >
          <div>
            <label className="mb-1 block text-sm font-medium text-stone-700">
              Nome
            </label>
            <input
              type="text"
              required
              value={form.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-[#7c2d12] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-stone-700">
              E-mail
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-[#7c2d12] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-stone-700">
              Mensagem
            </label>
            <textarea
              required
              rows={5}
              value={form.mensagem}
              onChange={(e) => handleChange("mensagem", e.target.value)}
              className="w-full resize-none rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-[#7c2d12] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#7c2d12] py-2.5 text-sm font-semibold text-white transition hover:bg-[#9b421c]"
          >
            Enviar mensagem
          </button>

          {enviado && (
            <p className="text-center text-sm text-emerald-600">
              Mensagem enviada! Responderemos em breve.
            </p>
          )}
        </form>

        <div className="space-y-4">
          <div className="flex items-start gap-3 rounded-xl bg-stone-50 p-4">
            <Mail
              size={18}
              strokeWidth={1.8}
              className="mt-0.5 flex-shrink-0 text-[#7c2d12]"
            />
            <div>
              <p className="text-sm font-semibold text-stone-800">E-mail</p>
              <p className="text-sm text-stone-600">
                contato@jpvariedades.com.br
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-stone-50 p-4">
            <Phone
              size={18}
              strokeWidth={1.8}
              className="mt-0.5 flex-shrink-0 text-[#7c2d12]"
            />
            <div>
              <p className="text-sm font-semibold text-stone-800">Telefone</p>
              <p className="text-sm text-stone-600">(83) 99999-0000</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-stone-50 p-4">
            <MapPin
              size={18}
              strokeWidth={1.8}
              className="mt-0.5 flex-shrink-0 text-[#7c2d12]"
            />
            <div>
              <p className="text-sm font-semibold text-stone-800">
                Atendimento
              </p>
              <p className="text-sm text-stone-600">Seg a Sex, 8h às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
