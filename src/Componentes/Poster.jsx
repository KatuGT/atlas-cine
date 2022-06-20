import styled from "styled-components"

const ImgPelicula = styled.img`
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    @media screen and (min-width: 714px) {
      width: 45%;
    }

    @media screen and (min-width: 1100px) {
      width: 100%;
    }
`


const Poster = (props) => {
  return (
    <ImgPelicula src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}/>
  )
}

export default Poster