//llama a los componentes
import NavBar from "./navBar"
import Principal from "./principal.jsx"


//Muestra la app
function App() {
    return( <div>
                <div>
                    <NavBar/>
                </div>
                <div>
                    <p><Principal titulo="Bienvenidos a mi primera entrega"/></p>
                </div>
            </div>
            )
}

//Exporta al index
export default App