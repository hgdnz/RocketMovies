import { Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function CreateMovie(){
  return(
    <Container>
        <Header/>
        <main>
          <Form>
            <header>
              <Link to="/"><FiArrowLeft/>Voltar</Link>
              <h1>Novo filme</h1>
            </header>
            <div className="inputs">
            <Input placeholder='Título'/>
            <Input placeholder='Sua nota (de 0 a 5)'/>
            </div>
            <Textarea placeholder='Observações'/>   

            <Section className='Marcadores' title="Marcadores">
          <div className='tags'>
            <NoteItem value="react"/>
            <NoteItem isNew placeholder='Nova Tag'/>
          </div>
          </Section>
          <div className='buttons'>
          <Button title="Excluir Filme"/><Button title="Salvar Alterações"/>
          </div>
          </Form>
        </main>
    </Container>
  )
}