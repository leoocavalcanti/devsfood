import React from 'react'
import { api } from '../../api';
import { isLogged, UserContext } from '../../Context/UserStorage';
import * as C from "./styles"
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';
import profileImage from "../../assets/profile.png"

const Profile = () => {

  const login = isLogged();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const data = React.useContext(UserContext);

  const handleLogin = async (e) => {

    setLoading(true);
    e.preventDefault();
  
    const json = await api.doLogin(email, password);

    if(json.error){
      
      setError(json.error);
      setLoading(false);

    }

    else{

      Cookies.set("token", json.result.token, {expires: 1});
      window.location.href = "/profile";

    }
    
  }

  const handleLogout = () => {

    let token = Cookies.get("token");

    if(token){
      Cookies.remove("token");
      window.location.href = "/profile";
    }

  }

  return (
    <C.Container>
      {!data &&
      <C.LoginArea>
        <C.LoginInfo>
          <C.LoginText><h1>Login</h1></C.LoginText>
          <C.LoginInput>
            <form onSubmit={handleLogin}>

              <label>
              E-mail
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </label>

              <label>
              Senha
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </label>

              {error && <p>{error}</p>}

              <button disabled={loading}>Entrar</button>
              
              <div></div>

              <Link to="/register">Clique aqui para se cadastrar</Link>

            </form>

          </C.LoginInput>
        </C.LoginInfo>
      </C.LoginArea>
      }

      {data && login &&
      
      <C.Container>
        <C.UserArea>
          <C.UserPhoto>
            <C.PhotoText><span>Foto do perfil</span></C.PhotoText>
            <C.PhotoUserArea>
            <C.PhotoUser src={profileImage}/>
            </C.PhotoUserArea>
            <button onClick={handleLogout}>Sair</button>
          </C.UserPhoto>
          <C.UserInfo>
            <span>Nome</span>
            <C.UserData>{data.result.user.name}</C.UserData>
            <span>Email</span>
            <C.UserData>{data.result.user.email}</C.UserData>
            <span>ID</span>
            <C.UserData>{data.result.user.id}</C.UserData>
          </C.UserInfo>
        </C.UserArea>
       </C.Container>
    }

    </C.Container>

  )
  
}

export default Profile