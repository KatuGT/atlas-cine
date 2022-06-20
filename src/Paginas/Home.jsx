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
  width: 95%;
  margin-bottom: 0.2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .fa-fire-flame-curved,
  & p {
    margin: 0;
  }

  & .fa-fire-flame-curved,
  & .fa-magnifying-glass {
    color: #fea130;
  }

  & p {
    font-size: 1.2em;
    font-weight: 700;
  }
  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TextoTopPelis = styled.div`
  display: flex;
  gap: 0.5em;
  order: 1;
  @media screen and (min-width: 600px) {
    order: 0;
  }
`;

const SearchBar = styled.input`
  border-radius: 1em;
  padding: 1em;
  margin-bottom: 1em;
  order: 0;
  @media screen and (min-width: 600px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 600px) {
    order: 1;
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

const WrapperRatingFilter = styled.div``;

const IconoStrella = styled.i`
  font-size: 4em;
  cursor: pointer;
  color: ${(props) => (props.color ? "#dfbc0d" : "#cbcbcb")};
`;

const InputRadio = styled.input`
  display: none;
`;
const Home = () => {
  const [topPeliculas, setTopPeliculas] = useState([]);
  const [query, setQuery] = useState("");

  // STAR RATING
  const [rating, setRating] = useState(null);

  useEffect(() => {
    try {
      axios
        .get(
          !query
            ? `https://api.themoviedb.org/3/discover/movie?api_key=23413c6b6dad4437049b94c075c35690&sort_by=popularity.desc`
            : `https://api.themoviedb.org/3/search/movie?api_key=23413c6b6dad4437049b94c075c35690&language=en-US&page=1&include_adult=false&query=${query}`
        )
        .then((res) => {
          setTopPeliculas(res.data.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return (
    <>
      <Header />
      <WrapperRatingFilter>
        {[...Array(5)].map((star, i) => {
          const valorRating = i + 1;
          return (
            <label key={i}>
              <InputRadio
                type="radio"
                name="star"
                value={valorRating}
                onClick={() => (valorRating !== rating) ? setRating(valorRating) :setRating (null) }
              />

              <IconoStrella
                className="fa-solid fa-star"
                color={valorRating <= rating ? "yellow" : ""}
              ></IconoStrella>
            </label>
          );
        })}
      </WrapperRatingFilter>
      <WrapperSectionTopPelis>
        <CabezeraTopPelis>
          <TextoTopPelis>
            {!query ? (
              <>
                <i className="fa-solid fa-fire-flame-curved"></i>
                <p>Películas pupulares</p>
              </>
            ) : (
              <>
                <i className="fa-solid fa-magnifying-glass"></i>
                <p>Resultado de Busqueda</p>
              </>
            )}
          </TextoTopPelis>
          <SearchBar
            type="search"
            placeholder="Busca aqui... "
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
          />
        </CabezeraTopPelis>

        <ListaPelis>
          {topPeliculas?.map((pelicula, index) =>
            rating ? (
              <>
                {pelicula?.vote_average <= rating * 2 ? (
                  <Poster
                    poster_path={pelicula?.poster_path}
                    key={index * Math.random()}
                  />
                ) : (
                  ""
                )}
              </>
            ) : (
              <Poster
                poster_path={pelicula?.poster_path}
                key={index * Math.random()}
              />
            )
          )}
        </ListaPelis>
      </WrapperSectionTopPelis>
    </>
  );
};

export default Home;
