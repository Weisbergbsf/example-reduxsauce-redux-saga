import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import { Grid, Button } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { schema } from "./yupValidation";
import { yupResolver } from "@hookform/resolvers";

import { Creators } from "./../../store/ducks/repositories/address/address";

import Input from "../../components/Input/Input";
import { useStyles } from "./styles";

const UserForm = () => {
  const classes = useStyles();
  const [cep, setCep] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cep) {
      dispatch(Creators.fetchAddress(cep));
    }
  }, [cep, dispatch]);

  const { address, loading } = useSelector((state) => state.address);

  const { handleSubmit, control, register, errors } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),

  });
  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <Input
                    name="name"
                    label="Nome"
                    required
                    errors={errors}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <Input
                    name="email"
                    label="Email"
                    required
                    errors={errors}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <Input
                    type="password"
                    name="password"
                    label="Senha"
                    required
                    errors={errors}
                    inputRef={register}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="telefone"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <Input
                    name="telefone"
                    label="Telefone"
                    mask="phone"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="cpf"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <Input
                    name="cpf"
                    label="CPF"
                    required
                    mask="cpf"
                    errors={errors}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="cnpj"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <Input
                    name="cnpj"
                    label="CNPJ"
                    required
                    mask="cnpj"
                    errors={errors}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="cep"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <Input
                    name="cep"
                    label="Cep"
                    errors={errors}
                    mask="cep"
                    value={value}
                    onChange={({ target }) => {
                      let cep = target.value.replace(/\D/g, "");
                      if (cep.length === 8) {
                        setCep(cep);
                      }
                      console.log(target.value)
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Input
                name="rua"
                label="Rua"
                errors={errors}
                inputRef={register}
                value={address ? address.logradouro || "" : ""}
                loading={loading}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                name="bairro"
                label="Bairro"
                errors={errors}
                inputRef={register}
                value={address ? address.bairro || "" : ""}
                loading={loading}
              />
            </Grid>

            <Grid item xs={12}>
              <Input
                name="localidade"
                label="Cidade"
                errors={errors}
                inputRef={register}
                value={address ? address.localidade || "" : ""}
                loading={loading}
              />
            </Grid>

            <Grid item xs={12}>
              <Input
                name="uf"
                label="UF"
                errors={errors}
                inputRef={register}
                value={address ? address.uf || "" : ""}
                loading={loading}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Salvar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default UserForm;
