import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import {ButtonText} from '../../components/ButtonText'

export function Details(){
  
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Hic amet laboriosam autem porro earum voluptatibus et 
            veniam quam qui molestiae! Saepe mollitia voluptatem, 
            hic voluptatum tenetur provident dignissimos fuga officiis!
          </p>

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
        </Content>
      </main>
    </Container>
  )
};