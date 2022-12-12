import * as React from 'react';

//import LoginIcon from '@mui/icons-material/Login';
//import LogoutIcon from '@mui/icons-material/Logout';
import './App.css';
import Nav from './nav';
import { MovieContext,MovieProvider } from './MovieContext';
import AddMovie from './AddMovie';
import Movie from'./Movie';
import MovieList from'./MovieList';
//import ButtonGroup from "@material-ui/core/ButtonGroup";
//import ErrorBoundary from './ErrorBoundary';
//import Counter from './counter';
export function App() {
  return (
    <MovieProvider>
      <div classname="App">
      <Nav />
    <MovieContext/>
    <AddMovie/>
    <Movie/>
    <MovieList/>
    </div>
    </MovieProvider>

  );
}
export default App;
