import { useState } from "react";
import AjudaRapida from "../../components/faq/AjudaRapida";
import CentralAjudaHero from "../../components/faq/CentralAjudaHero";
import TopicosFrequentes from "../../components/faq/TopicosFrequentes";

export default function FAQ() {
  const [busca, setBusca] = useState("");

  function falarComIA() {
    console.log("Abrir assistente IA");
  }

  function falarComHumano() {
    console.log("Falar com humano");
  }

  return (
    <section className="w-full bg-stone-50 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <CentralAjudaHero busca={busca} onChangeBusca={setBusca} />

        <AjudaRapida
          onFalarComIA={falarComIA}
          onFalarComHumano={falarComHumano}
        />

        <TopicosFrequentes />
      </div>
    </section>
  );
}
