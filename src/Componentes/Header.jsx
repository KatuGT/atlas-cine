import styled from "styled-components";
import imgHeader from "../Imagenes/ImagenHeader.jpg";

const WrapperHeader = styled.header`
  height: 700px;
`;

const ImagenHeader = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
`;

const Header = () => {
  return (
    <WrapperHeader>
      <ImagenHeader src={imgHeader} alt="The Boys" />
    </WrapperHeader>
  );
};

export default Header;
