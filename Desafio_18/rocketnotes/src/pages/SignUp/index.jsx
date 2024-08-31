import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock} from 'react-icons/fi';

import { Link } from "react-router-dom";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignUp(){
    console.log(name, email, password)
  }

  return(
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="Email"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button label="Cadastrar" onClick={handleSignUp} />

        <Link to="/">
          Voltar para o login
        </Link>

      </Form>
    </Container>
  );
}