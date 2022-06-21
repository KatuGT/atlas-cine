import styled from "styled-components";
import sinImagen from "../Imagenes/SinImagen.png"


const EnlacePelicula = styled.a`
  @media screen and (min-width: 714px) {
    width: 100%;
  }
`;

const ImgPelicula = styled.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  @media screen and (min-width: 714px) {
    width: 100%;
  }

`;

const Poster = (props) => {
  return (
    <>
      <EnlacePelicula href={`pelicula/${props.id}`}>
        <ImgPelicula
          src={props.poster_path ? `https://image.tmdb.org/t/p/original/${props.poster_path}` : sinImagen}
        />
      </EnlacePelicula>
    </>
  );
};

export default Poster;
