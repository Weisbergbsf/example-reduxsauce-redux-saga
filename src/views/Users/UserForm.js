import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import { Grid, Button } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
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
      dispatch(Creators.loadAddress(cep));
    }
  }, [cep, dispatch]);

  const { address, loading } = useSelector((state) => state.address);

  const { handleSubmit, register, errors } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const onHadleChangeCep = (e) => {
    let cep = e.target.value.replace(/\D/g, "");
    if (cep.length === 8) {
      setCep(cep);
    }
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
              <Input
                name="name"
                label="Nome"
                required
                errors={errors}
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                name="email"
                label="Email"
                required
                errors={errors}
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                type="password"
                name="password"
                label="Senha"
                required
                errors={errors}
                inputRef={register}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Input
                name="telefone"
                label="Telefone"
                mask="telefone"
                inputRef={register}
              />
            </Grid>

            <Grid item xs={12}>
              <Input
                name="cep"
                label="Cep"
                errors={errors}
                inputRef={register}
                mask="cep"
                onChange={onHadleChangeCep}
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
