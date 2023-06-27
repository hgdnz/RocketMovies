import { FiPlus } from 'react-icons/fi';
import { Container, Content } from './styles'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { Link } from 'react-router-dom';


export function Home(){
  return(
<Container>
  <Header/>     
      <div>
        <Section title="Meus filmes"></Section>
       </div>
      <main><Content>
        <Link to='moviepreview'>
    <Note data={{
      title: 'Interstellar', 
      description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas',
      tags: [
        {id: '1', name: 'ficção'},
        {id: '2', name: 'Drama'},
        {id: '3', name: 'Família'},

      ]
    }}
      />
      </Link>
      <Note data={{
      title: 'Interstellar', 
      description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas',
      tags: [
        {id: '1', name: 'ficção'},
        {id: '2', name: 'Drama'},
        {id: '3', name: 'Família'},

      ]
    }}
      /><Note data={{
        title: 'Interstellar', 
        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas',
        tags: [
          {id: '1', name: 'ficção'},
          {id: '2', name: 'Drama'},
          {id: '3', name: 'Família'},
  
        ]
      }}
        />
         <Note data={{
      title: 'Interstellar', 
      description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas',
      tags: [
        {id: '1', name: 'ficção'},
        {id: '2', name: 'Drama'},
        {id: '3', name: 'Família'},

      ]
    }}
      />
      <Note data={{
      title: 'Interstellar', 
      description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas',
      tags: [
        {id: '1', name: 'ficção'},
        {id: '2', name: 'Drama'},
        {id: '3', name: 'Família'},

      ]
    }}
      /><Note data={{
        title: 'Interstellar', 
        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas',
        tags: [
          {id: '1', name: 'ficção'},
          {id: '2', name: 'Drama'},
          {id: '3', name: 'Família'},
  
        ]
      }}
        />
  </Content>  </main>

  
</Container>

  );
}