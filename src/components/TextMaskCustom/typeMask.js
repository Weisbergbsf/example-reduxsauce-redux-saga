const cep = [/[0-9]/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/];
const telefone = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

export const typeMask = (mask) => {
  switch (mask) {
    case "cep":
      return cep;
    case "telefone":
      return telefone;
    default:
      return new Error(`Tipo de mascara não encontrada: ${mask}`);
  }
};
