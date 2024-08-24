import './App.css';
// import Card from './cardComponent/Card';
import Color from './colorChange/Color';
// import Counter from './counter/Counter';

function App() {

    // const gridBox = {
    //     display: "grid",
    //     gridTemplateColumns: "repeat(3, 1fr)",
    // };
    return (
        // <div>
        //     <Counter/>
        // </div>

        // <div style={gridBox} className="App">
        //     <Card
        //         name="Amrendra"
        //         email="amrendra@gmail.com"
        //         image="https://via.placeholder.com/200"
        //     />
        //     <Card
        //         name="Ashish"
        //         email="ashish@gmail.com"
        //         image="https://via.placeholder.com/200"
        //     />
        //     <Card
        //         name="Sinu"
        //         email="sinu@gmail.com"
        //         image="https://via.placeholder.com/200"
        //     />
        // </div>

        <div>
            <Color/>
        </div>
    );
}

export default App;
