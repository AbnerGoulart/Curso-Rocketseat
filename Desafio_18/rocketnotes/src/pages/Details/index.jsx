import { Container, Links } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

export function Details(){
  
  return(
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="https://google.com/" target="_blank">https://google.com/</a>
          </li>
          <li>
            <a href="https://jpost.com/" target="_blank">https://jpost.com/</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/>
      </Section>

      <Button label="Voltar"/>
    </Container>
  )
};