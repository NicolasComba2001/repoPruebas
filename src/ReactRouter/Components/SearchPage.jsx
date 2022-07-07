import {Link} from 'react-router-dom';

export default function SearchPage(){
    const tacos = [
        'cochinita',
        'chili',
        'carnita',
        'quesadilla'
    ]
    return(
        <section>
            <h1>BUSQUEDA MEXICANA</h1>
            <p>BUSCA TU TACO MAS RICO;</p>
            {
                tacos.map((nombre,i)=>(
                    <div key={i}>
                        <Link to={`/tacos/${nombre}`}>{nombre}</Link><br />
                        <hr />
                    </div>
                    
                ))
            }
        </section>
    );
}
