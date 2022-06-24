import styled from "styled-components";

const WrapperError = styled.div`
  height: 83.35vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Error404 = () => {
  return (
    <WrapperError>
      <p>Error 404</p>
      <p>Página no encontrada</p>
      <a href="/">Regresar a inicio</a>
    </WrapperError>
  );
};

export default Error404;
