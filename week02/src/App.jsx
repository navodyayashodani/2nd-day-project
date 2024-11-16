import Hero from "./Hero";
import Navigation from "./Navigation";

function App() {

  const name="Harindi";
  const cartCount = 0;

  
  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero />
    </div>
  );
}

export default App;
