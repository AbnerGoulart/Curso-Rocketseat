import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles"
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/PlaceholderAvatar.png"



export function Header(){
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return(
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} 
        alt="foto do usuário" />

        <div>
          <span>Bem vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}