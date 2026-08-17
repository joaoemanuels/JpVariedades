export interface EnderecoForm {
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
}

export interface OpcaoFrete {
  id: string;
  nome: string;
  prazo: string;
  preco: number;
}

export type MetodoPagamento = "cartao" | "pix";

export interface CartaoForm {
  numero: string;
  nomeImpresso: string;
  validade: string;
  cvv: string;
}

export interface ItemResumoCheckout {
  id: string;
  nome: string;
  imagem: string;
  preco: number;
  quantidade: number;
}
