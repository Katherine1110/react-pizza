import { Header, Categories } from './components';

function App() {
  return (
    <>
      <Header />
      <Categories 
      onClick={(name)=>console.log(name)}
      items={['Все', 'Мясные', 'Вегетарианские', 'Острые', 'Гриль', 'Закрытые']} />
    </>
  );
}

export default App;