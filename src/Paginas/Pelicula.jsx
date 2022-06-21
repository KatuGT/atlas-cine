import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const WrapperInfoPeli = styled.div`
  margin-top: 3em;
`;

const ImagenPortada = styled.img`
  display: none;
  width: 100%;
`;

const WrapperDatos = styled.article``;

const ImagePoster = styled.img`
  width: 100%;
`;

const Datos = styled.div`
  padding: 0 1em;
`;

const WrapperGeneros = styled.section`
  display: flex;
  gap: 0.5em;
  justify-content: center;
`;

const Genero = styled.p`
  background-color: #d3d3d3;
  padding: 1em;
  border: 1px solid #e2e2e2;
  border-radius: 100vh;
  color: #181818;
`;

const Titulo = styled.h2`
  font-size: 2em;
  margin: 0;
`;

const EstrenoDuracion = styled.p`
  margin-top: 0;
`;

const Resumen = styled.p``;

const Rating = styled.div`
  font-weight: 600;
  display: flex;
  gap: 0.5em;

  & p {
    margin-top: 0;
  }

  & .fa-star {
    color: #dfbc0d;
  }
`;

const Budget = styled.p`
  font-weight: bold;
`;

const Pelicula = () => {
  let { id } = useParams();
  const [pelicula, setPelicula] = useState("");
  console.log(pelicula);
  useEffect(() => {
    const getPelicula = async () => {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=23413c6b6dad4437049b94c075c35690`
          )
          .then((res) => setPelicula(res.data));
      } catch (error) {}
    };
    getPelicula();
  }, [id]);

  return (
    <>
      <WrapperInfoPeli>
        <ImagenPortada
          src={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`}
        />
        <WrapperDatos>
          <ImagePoster
            src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
          />
          <Datos>
            <WrapperGeneros>
              {pelicula?.genres?.map((genero, index) => (
                <Genero key={index}>{genero.name}</Genero>
              ))}
            </WrapperGeneros>
            <Titulo>{pelicula?.original_title}</Titulo>
            <EstrenoDuracion>
              {pelicula?.release_date} - {pelicula?.runtime}min{" "}
            </EstrenoDuracion>
            <Resumen>{pelicula?.overview}</Resumen>
            <Rating>
              <i className="fa-solid fa-star"></i>
              <p>
                {pelicula?.vote_average} / 10 - {pelicula?.vote_count} votos
              </p>
            </Rating>
            <Budget>Presupuesto: ${pelicula?.budget.toLocaleString()}</Budget>
          </Datos>
        </WrapperDatos>
      </WrapperInfoPeli>
    </>
  );
};

export default Pelicula;
