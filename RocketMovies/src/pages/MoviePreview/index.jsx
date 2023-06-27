import { FiArrowLeft, FiStar } from 'react-icons/fi';
import { Container, Content } from './styles'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { Preview } from '../../components/Preview';
import { Tag } from '../../components/Tags'
import { Link } from 'react-router-dom'



export function MoviePreview(data, description, rating, ...rest){
  return(
    <Container>
  <Header/> 
  <Content>
       <Link to='/'><FiArrowLeft/>Voltar</Link>
       
        <Preview data={{
          tags: [
            {id: '1', name: 'ficção'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Família'},
    
          ],
          title: 'Interstellar',
          rating: <svg width="84" height="13" viewBox="0 0 84 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_305_402)">
          <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58802C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40538 12.0313C9.35249 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
          </g>
          <g clip-path="url(#clip1_305_402)">
          <path d="M45.2344 12.0729C45.1555 12.0732 45.0785 12.0486 45.0143 12.0026L42.0001 9.81724L38.9858 12.0026C38.9214 12.0493 38.8438 12.0743 38.7642 12.074C38.6847 12.0737 38.6073 12.0481 38.5432 12.0009C38.4792 11.9538 38.4318 11.8874 38.4079 11.8116C38.384 11.7357 38.3849 11.6542 38.4104 11.5788L39.586 8.0967L36.5391 6.00724C36.4731 5.96203 36.4233 5.89691 36.397 5.82137C36.3706 5.74584 36.3691 5.66386 36.3927 5.58741C36.4162 5.51096 36.4636 5.44405 36.5279 5.39646C36.5922 5.34886 36.6701 5.32308 36.7501 5.32287H40.509L41.6433 1.83185C41.6678 1.75648 41.7155 1.69079 41.7795 1.6442C41.8436 1.59761 41.9208 1.57251 42.0001 1.57251C42.0793 1.57251 42.1565 1.59761 42.2206 1.6442C42.2847 1.69079 42.3323 1.75648 42.3568 1.83185L43.4911 5.32404H47.2501C47.3301 5.324 47.4082 5.34961 47.4726 5.39711C47.5371 5.44461 47.5847 5.51152 47.6084 5.58802C47.6321 5.66453 47.6307 5.74662 47.6044 5.82227C47.5781 5.89792 47.5282 5.96315 47.4622 6.00841L44.4141 8.0967L45.589 11.5779C45.6081 11.6342 45.6134 11.6943 45.6047 11.7531C45.5959 11.812 45.5732 11.8679 45.5386 11.9163C45.504 11.9646 45.4583 12.004 45.4054 12.0313C45.3525 12.0585 45.2939 12.0728 45.2344 12.0729Z" fill="#FF859B"/>
          </g>
          <g clip-path="url(#clip2_305_402)">
          <path d="M63.2344 12.0729C63.1555 12.0732 63.0785 12.0486 63.0143 12.0026L60.0001 9.81724L56.9858 12.0026C56.9214 12.0493 56.8438 12.0743 56.7642 12.074C56.6847 12.0737 56.6073 12.0481 56.5432 12.0009C56.4792 11.9538 56.4318 11.8874 56.4079 11.8116C56.384 11.7357 56.3849 11.6542 56.4104 11.5788L57.586 8.0967L54.5391 6.00724C54.4731 5.96203 54.4233 5.89691 54.397 5.82137C54.3706 5.74584 54.3691 5.66386 54.3927 5.58741C54.4162 5.51096 54.4636 5.44405 54.5279 5.39646C54.5922 5.34886 54.6701 5.32308 54.7501 5.32287H58.509L59.6433 1.83185C59.6678 1.75648 59.7155 1.69079 59.7795 1.6442C59.8436 1.59761 59.9208 1.57251 60.0001 1.57251C60.0793 1.57251 60.1565 1.59761 60.2206 1.6442C60.2847 1.69079 60.3323 1.75648 60.3568 1.83185L61.4911 5.32404H65.2501C65.3301 5.324 65.4082 5.34961 65.4726 5.39711C65.5371 5.44461 65.5847 5.51152 65.6084 5.58802C65.6321 5.66453 65.6307 5.74662 65.6044 5.82227C65.5781 5.89792 65.5282 5.96315 65.4622 6.00841L62.4141 8.0967L63.589 11.5779C63.6081 11.6342 63.6134 11.6943 63.6047 11.7531C63.5959 11.812 63.5732 11.8679 63.5386 11.9163C63.504 11.9646 63.4583 12.004 63.4054 12.0313C63.3525 12.0585 63.2939 12.0728 63.2344 12.0729Z" fill="#FF859B"/>
          </g>
          <g clip-path="url(#clip3_305_402)">
          <path d="M27.2344 12.0729C27.1555 12.0732 27.0785 12.0486 27.0143 12.0026L24.0001 9.81724L20.9858 12.0026C20.9214 12.0493 20.8438 12.0743 20.7642 12.074C20.6847 12.0737 20.6073 12.0481 20.5432 12.0009C20.4792 11.9538 20.4318 11.8874 20.4079 11.8116C20.384 11.7357 20.3849 11.6542 20.4104 11.5788L21.586 8.0967L18.5391 6.00724C18.4731 5.96203 18.4233 5.89691 18.397 5.82137C18.3706 5.74584 18.3691 5.66386 18.3927 5.58741C18.4162 5.51096 18.4636 5.44405 18.5279 5.39646C18.5922 5.34886 18.6701 5.32308 18.7501 5.32287H22.509L23.6433 1.83185C23.6678 1.75648 23.7155 1.69079 23.7795 1.6442C23.8436 1.59761 23.9208 1.57251 24.0001 1.57251C24.0793 1.57251 24.1565 1.59761 24.2206 1.6442C24.2847 1.69079 24.3323 1.75648 24.3568 1.83185L25.4911 5.32404H29.2501C29.3301 5.324 29.4082 5.34961 29.4726 5.39711C29.5371 5.44461 29.5847 5.51152 29.6084 5.58802C29.6321 5.66453 29.6307 5.74662 29.6044 5.82227C29.5781 5.89792 29.5282 5.96315 29.4622 6.00841L26.4141 8.0967L27.589 11.5779C27.6081 11.6342 27.6134 11.6943 27.6047 11.7531C27.5959 11.812 27.5732 11.8679 27.5386 11.9163C27.504 11.9646 27.4583 12.004 27.4054 12.0313C27.3525 12.0585 27.2939 12.0728 27.2344 12.0729Z" fill="#FF859B"/>
          </g>
          <g clip-path="url(#clip4_305_402)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M78 1.57269C78.1624 1.57269 78.3064 1.67729 78.3566 1.83179L79.4911 5.32269H83.25C83.4143 5.32269 83.5595 5.4297 83.6082 5.58668C83.6568 5.74366 83.5976 5.91402 83.462 6.00697L80.4147 8.09655L81.5897 11.5778C81.6418 11.7324 81.5881 11.903 81.4567 11.9997C81.3253 12.0964 81.1464 12.0971 81.0143 12.0013L78 9.81705L74.9856 12.0013C74.8535 12.0971 74.6747 12.0964 74.5433 11.9997C74.4119 11.903 74.3581 11.7324 74.4103 11.5778L75.5852 8.09655L72.5379 6.00697C72.4024 5.91402 72.3431 5.74366 72.3918 5.58668C72.4404 5.4297 72.5856 5.32269 72.75 5.32269H76.5088L77.6433 1.83179C77.6935 1.67729 77.8375 1.57269 78 1.57269ZM78 3.16095L77.1379 5.8136C77.0876 5.9681 76.9437 6.07269 76.7812 6.07269H73.9599L76.2433 7.63842C76.3817 7.73332 76.4402 7.90861 76.3865 8.06761L75.4964 10.705L77.7799 9.05029C77.9112 8.95516 78.0887 8.95516 78.22 9.05029L80.5035 10.705L79.6134 8.06761C79.5597 7.90861 79.6182 7.73332 79.7566 7.63842L82.04 6.07269H79.2187C79.0563 6.07269 78.9123 5.9681 78.8621 5.8136L78 3.16095Z" fill="#FF859B"/>
          </g>
          <defs>
          <clipPath id="clip0_305_402">
          <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
          </clipPath>
          <clipPath id="clip1_305_402">
          <rect width="12" height="12" fill="white" transform="translate(36 0.822693)"/>
          </clipPath>
          <clipPath id="clip2_305_402">
          <rect width="12" height="12" fill="white" transform="translate(54 0.822693)"/>
          </clipPath>
          <clipPath id="clip3_305_402">
          <rect width="12" height="12" fill="white" transform="translate(18 0.822693)"/>
          </clipPath>
          <clipPath id="clip4_305_402">
          <rect width="12" height="12" fill="white" transform="translate(72 0.822693)"/>
          </clipPath>
          </defs>
                </svg>,
          description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.',
        }}/>

       
    </Content>        
</Container>

  );
}