import { Container } from "./styles"
import { Tag } from '../../components/Tags'

export function Preview({data, description, ...rest}){
  return (
    <Container {...rest}>
      <div>
      <h1>
        {data.title}
        {data.rating}
      </h1>
      <span className="infoUser">
        <img
        src='https://github.com/hgdnz.png'
        alt="foto do usuário"
        />
        <p>Hugo Diniz</p>
        <p>00/00/00 às 09:00</p>
      </span>
      {
      data.tags &&
      <span className="infoTags">{
         data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
        }
      </span>
      }
      
      <p className="description">{data.description}</p>

        
      </div>
    </Container>
  )
}