import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório.")
    .min(3, "Tamanho mínimo de 3 caracteres.")
    .max(40, "Tamanho máximo de 40 caracteres."),
  email: yup
    .string()
    .required("O email é obrigatório.")
    .email("Informe um endereço de email válido."),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(6, "Tamanho mínimo de 6 caracteres."),
});
