import React from 'react'
import { api } from '../../api';
import * as C from "./styles"
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';

const Register = () => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const valor = useForm("email");

  const handleRegister = async (e) => {

    e.preventDefault();

    if(valor.error){

      return;
      
    }

    if(password === confirmPassword){

    setLoading(true);

    const json = await api.userRegister(name, valor.value, password);

    if(json.error){

        setError(json.error)
        setLoading(false);
    }

    else{

        let token = json.result.token;
        setError(null);

        if(token){

            Cookies.set("token", token, {expires: 1});
            window.location.href = "/profile";
        }
    }

    }
    
    else{

        setError("As senhas não estão iguais!");
    }

  }

  return (
    <C.Container>
   
      <C.LoginArea>
        <C.LoginInfo>
          <C.LoginText><h1>Cadastro</h1></C.LoginText>
          <C.LoginInput>
            <form onSubmit={handleRegister}>

              <label>
              Nome
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              </label>

              <label>
              E-mail
              <input type="email" value={valor.value} onChange={valor.onChange} onBlur={valor.onBlur}/>
              </label>
              {valor.error && <p style={{marginTop: -15}}>{valor.error}</p>}

              <label>
              Senha
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </label>

              <label>
              Confirmar senha
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
              </label>

              {error && <p>{error}</p>}

              <button disabled={loading}>Cadastrar</button>
              
              <div></div>

              <Link to="/profile">Clique aqui se você já possui uma conta</Link>

            </form>

          </C.LoginInput>
        </C.LoginInfo>
      </C.LoginArea>
 
    </C.Container>
  )
}

export default Register