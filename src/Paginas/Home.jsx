import Header from "../Componentes/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Poster from "../Componentes/Poster";
import styled from "styled-components";

const WrapperSectionTopPelis = styled.section`
  width: 100%;
  margin-top: 5em;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
`;

const CabezeraTopPelis = styled.div`
  margin-bottom: 0.2em;
  margin-left: 1em;
  display: flex;
  gap: 0.5em;

  & .fa-fire-flame-curved,
  & p {
    margin: 0;
  }

  & .fa-fire-flame-curved {
    color: #fea130;
  }

  & p {
    font-size: 1.2em;
    font-weight: 700;
  }
`;
const ListaPelis = styled.div`
  width: 100%;
  padding: 1em 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  @media screen and (min-width: 1100px) {
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Home = () => {
  const [topPeliculas, setTopPeliculas] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=23413c6b6dad4437049b94c075c35690&sort_by=popularity.desc`
        )
        .then((res) => {
          setTopPeliculas(res.data.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(topPeliculas.slice(0, 9));
  return (
    <>
      <Header />

      <WrapperSectionTopPelis>
        <CabezeraTopPelis>
          <i className="fa-solid fa-fire-flame-curved"></i>
          <p>Películas pupulares</p>
        </CabezeraTopPelis>

        <ListaPelis>
          {topPeliculas?.slice(0, 9).map((pelicula, index) => (
            <Poster poster_path={pelicula?.poster_path} key={index} />
          ))}
        </ListaPelis>
      </WrapperSectionTopPelis>
    </>
  );
};

export default Home;
