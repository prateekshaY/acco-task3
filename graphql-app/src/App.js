import logo from './logo.svg';
import './App.css';
import {useQuery, gql} from "@apollo/client";

const GET_ALL_FILMS = `
query Query {
  allFilms {
    films {
      title
      director
      releaseDate
    }
  }
}
`;

function App() {
  const { loading, error, data } = useQuery(gql`${GET_ALL_FILMS}`);
  console.log(data);

  if(loading) return <div>Loading the data...</div>
  if(error) return <div>Error while loading the data</div>
  return (
    <div className="App">
      <div className='container'>
        <span className='child'>Title</span>
        <span className='child'>Director</span>
        <span className='child'>Release Date</span>
        </div>

     {data?.allFilms?.films.map((film) => <div className='container' key={film.title}>
        <span className='child'>{film.title}</span>
        <span className='child'>{film.director}</span>
        <span className='child'>{film.releaseDate}</span>
     </div>)}
    </div>
  );
}

export default App;
