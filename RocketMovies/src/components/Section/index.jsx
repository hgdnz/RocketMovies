import { Container } from "./styles"
import { Button } from "../Button";
import { Link } from "react-router-dom";


export function Section({ title, children }){
  return (
    <Container>
      <div>
      <h2>{title}</h2>
     <Link to='/createmovie'><Button title='+ Adicionar filme'></Button></Link>
      </div>
      {children}
    </Container>
  );
}