import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container, Links, Content } from './styles';
import { api } from '../../services/api';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import {ButtonText} from '../../components/ButtonText'

export function Details(){
  const [data, setData] = useState(null);
  const navigate = useNavigate()

  const params = useParams();

  function handleBack(){
    navigate("/")
  }

  async function handleRemove(){
    const confirm = window.confirm(`⚠️ Deseja DELETAR a nota? Se SIM clique em OK, caso contrário CANCELAR ⚠️`)
    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      alert("Nota deletada!")
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote();
  }, []);
  
  return(
    <Container>
      <Header />
      {
        data &&
        <main>
        <Content>
          <ButtonText 
            title="Excluir nota"
            onClick={handleRemove}
          />

          <h1>
            {data.title}
          </h1>

          <p>
            {data.description}
          </p>

          {
            data.links &&
            <Section title="Links úteis">
            <Links>
              {
                data.links.map( link => (
                  <li key={String(link.id)}>
                    <a href={link.url} target="_blank">
                      {link.url}
                    </a>
                  </li>
                ))
              }
            </Links>
            </Section>
          }

          {
            data.tags &&
            <Section title="Marcadores">
              {
                data.tags.map (tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name} />
                ))
              }
            </Section>
          }
          

          <Button 
            label="Voltar"
            onClick={handleBack}
          
          />
        </Content>
        </main>
      }
    </Container>
  )
};