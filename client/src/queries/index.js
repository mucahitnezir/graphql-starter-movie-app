import { gql } from 'apollo-boost';

export const getMoviesQuery = gql`
  {
    movies{
      id,
      title,
      year,
      description,
      director{
        name
      }
    }
  }
`;

export const getMovieQuery = gql`
  query($id: String){
    movie(id:$id){
      id,
      title,
      year,
      description,
      director{
        name
        movies{
          id
          title
        }
      }
    }
  }
`;

export const getDirectorsQuery = gql`
  {
    directors{
      id,
      name
    }
  }
`;

export const addMovieMutation = gql`
  mutation($title: String!, $description: String, $year: Int!, $directorId: String!){
    addMovie(title:$title, description:$description, year:$year, directorId: $directorId){
      id,
      title
    }
  }
`;
