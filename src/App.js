import React, { useState } from 'react';
import Header from './Header'
// Componente: bloco isolado de HTML, CSS e JS o qual não interfere no restante da aplicação
// Propriedade: informações que um componente pai passa para o componente filho
// Estedo: informações mantidas pelo componente (Lembrar so conceito de imutabilidade)

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <Header title="Dashboard1" />
      <Header title="Dashboard2" />
      <Header title="Dashboard3" />
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Add</button>
    </>
  );
}

export default App;
