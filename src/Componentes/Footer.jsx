import styled from "styled-components";
const WrapperFooter = styled.footer`
  box-sizing: border-box;
  width: 100%;
  padding: 1em;
  margin-top: 2em;
  background-color: #7e7e7e;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.5em;
  @media screen and (min-width: 700px) {
  box-sizing: border-box;

    padding: 2em;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;

  }

  @media screen and (min-width: 1000px){
    justify-content: space-around;
  }
`;

const Columna = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5em;
  @media screen and (min-width: 700px) {
    flex-direction: column;
   gap: 1em;
  }
`;

const Contenido = styled.div`
  box-sizing: border-box;

  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.5em;
  font-weight: 100;
  font-size: 1.2em;
  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: ${(props) =>
      props.alignIzquierda ? "flex-start" : "flex-end"};
  }
`;

const ContenidoBold = styled(Contenido)`
  font-weight: 700;
  text-align: left;
`;

const Item = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Footer = () => {
  return (
    <WrapperFooter>
      <Columna>
        <ContenidoBold alignIzquierda>
          <Item href="*">About</Item>
          <Item href="*">Jobs</Item>
          <Item href="*">Press</Item>
          <Item href="*">News</Item>
          <Item href="*">Gift</Item>
        </ContenidoBold>
        <Contenido alignIzquierda>
          <Item href="*">Legal</Item>
          <Item href="*">Cookies</Item>
          <Item href="*">AdChoices</Item>
        </Contenido>
      </Columna>

      <Columna>
        <ContenidoBold>
          <Item href="*">Facebook</Item>
          <Item href="*">Twitter</Item>
        </ContenidoBold>
        <Contenido>
          <Item href="*">Derechos Reservados</Item>
        </Contenido>
      </Columna>
    </WrapperFooter>
  );
};

export default Footer;
