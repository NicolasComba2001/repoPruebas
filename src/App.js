import './App.css';
import ShoppingCart from './Components/ShoppingCart';
import {Route, Routes, Link, useParams, Outlet, useRoutes} from 'react-router-dom';
import Home from './ReactRouter/Components/Home';
import SearchPage from './ReactRouter/Components/SearchPage';

const rutas = [
  {
    path: '/locura',
    element: <p>hola soy otra pagina</p>
  }
]


export function Tacos(){
  
  const {nombreTaco}  = useParams();
  return(
      <section>
          <h2>TACOS GRATIS</h2>
          <p>consume el mejor taco de: <mark>{nombreTaco}</mark></p>
          <p><Link to={"details"}>Detalles del taco: <mark>{nombreTaco}</mark></Link></p>

          {/* ACA SE RENDERIZA EL COMPONENTE DE LA RUTA ANIDADA */}
          <Outlet></Outlet>
      </section>
  );
}

export function TacoDetails(){
  return(
    <section>
      <p>DETALLES DEL TACO: <mark>ea</mark></p>
    </section>
  );
}

function App() {
  const locura = useRoutes(rutas);
  return (
    <>
      <ShoppingCart></ShoppingCart>
      <hr/><br/>
      {/* REACT ROUTER DOM */}
      <header>
        <nav>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/search-page"}>Search Page</Link></li>
            <li><Link to={"/locura"}>Locura</Link></li>
          </ul>
        </nav>
      </header>
      <hr/>

      <Routes> 

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/search-page' element={<SearchPage></SearchPage>}></Route>

        <Route path='/tacos/:nombreTaco' element={<Tacos></Tacos>}>
          <Route index element={<p>holiw</p>}></Route>
          {/* RUTA ANIDADA */}
            <Route path='details' element={<TacoDetails></TacoDetails>}></Route>
        </Route>

        <Route path='*' element={<h1>ERROR 404 SOFT DEL LADO DEL CLIENTE</h1>}></Route>
        
      </Routes>

      {locura}
    </>
  );
}

export default App;
