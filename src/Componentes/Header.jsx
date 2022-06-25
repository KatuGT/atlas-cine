import styled from "styled-components";
import imgHeader from "../Imagenes/ImagenHeader.jpg";

const WrapperHeader = styled.header`
  height: 700px;
  position: relative;
  cursor: default;
`;

const ImagenHeader = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top right;
`;

const FondoOscuro = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  margin: auto 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const WrapperTitulos = styled.div`
  color: #fff;
  position: absolute;
  top: calc(50% - 25%) ;
  left: 6%;
`;

const Titulo = styled.h1`
  font-size: max(10em, 9em);
  margin: 0;
`;

const SubTitulo = styled.h2`
  font-size: 2em;

`;

const Header = () => {
  return (
    <WrapperHeader>
      <ImagenHeader src={imgHeader} alt="The Boys" />
      <FondoOscuro></FondoOscuro>
      <WrapperTitulos>
        <Titulo>Atlas</Titulo>
        <SubTitulo>Algo para ver</SubTitulo>
      </WrapperTitulos>
    </WrapperHeader>
  );
};

export default Header;
