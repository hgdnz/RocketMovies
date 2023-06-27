// import { RiShutDownLine } from 'react-icons/ri';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Profile, Logout } from './styles'
import { Input } from '../../components/Input'
import { Brand } from "./styles"


export function Header(){
  return(
    <Container>
        <Brand><h1>RocketMovies</h1></Brand>
               <Input placeholder="Pesquisar pelo título" icon={FiSearch}></Input>

      <Profile to="/profile">        
        <div>
           <strong>Hugo Diniz</strong>        
            <Logout><span>Sair</span></Logout>
        </div>
        <img
        src='https://github.com/hgdnz.png'
        alt="foto do usuário"
        />
      </Profile>

    </Container>
  )
}