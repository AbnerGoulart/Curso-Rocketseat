import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/AbnerGoulart.png" 
        alt="foto do usuário" />

        <div>
          <span>Bem vindo,</span>
          <strong>Abner Gamaliel</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}