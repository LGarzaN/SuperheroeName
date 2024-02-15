import './App.css';
import { useState } from 'react';


function App() {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');

  const nombres = {
    "a": "Captain",
    "b": "Wonder",
    "c": "Super",
    "d": "Phantom",
    "e": "Dark",
    "f": "Incredible",
    "g": "Professor",
    "h": "Iron",
    "i": "Hawk",
    "j": "Archer",
    "k": "Steel",
    "l": "Bolt",
    "m": "Atomic",
    "n": "Torch",
    "o": "Space",
    "p": "Mega",
    "q": "Turbo",
    "r": "Fantastic",
    "s": "Invisible",
    "t": "Night",
    "u": "Silver",
    "v": "Aqua",
    "w": "Amazing",
    "x": "Giant",
    "y": "Rock",
    "z": "Power"
  }

  const months = {
    "enero": "Shield",
    "febrero": "Arrow",
    "marzo": "Justice",
    "abril": "Thunder",
    "mayo": "Rider",
    "junio": "Falcon",
    "julio": "Ninja",
    "agosto": "Spider",
    "septiembre": "Beast",
    "octubre": "Blade",
    "noviembre": "Hulk",
    "diciembre": "Down"
  }

  const handleClick = () => {
    if (name === '' && date === '') {
      alert('Por favor ingrese su nombre y mes de nacimiento correctamente');
      return;
    }
    if (name === '') {
      alert('Por favor ingrese su nombre correctamente');
      return;
    }
    if (months[date] === undefined) {
      alert('Por favor ingrese su mes de nacimiento correctamente');
      return;
    }
    console.log(name, date)
    const firstLetter = name.charAt(0).toLowerCase();
    console.log(firstLetter);
    const superName = nombres[firstLetter] + months[date];
    console.log(superName);
    alert(`Tu nombre de superheroe es: ${superName}`);
  }

  return (
    <div className="App">
        <h1 className='titleText'>Nombre de SuperHeroe</h1>
        <div className='containers'>
          <span style={{color: 'white'}}>Ingrese su nombre: </span>
          <input type='text' className='inputC' placeholder='ej: Ramon Danzos' onChange={
            (e) => setName(e.target.value)
          }/>
        </div>
        <div>
          <span style={{color: 'white'}}>Mes de Nacimiento: </span>
          <input type='text' className='inputC' placeholder='ej: Febrero' onChange={
            (e) => setDate(e.target.value)
          }/>
        </div>
        <div>
          <button className='button' onClick={handleClick}>Generar</button>
        </div>
        <img src='superheroe.jpg' alt='superheroes' className='img' width={400}/>
    </div>
  );
}

export default App;
