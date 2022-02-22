import { Header, Categories, ProductsList } from './components';

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Categories
        onClick={(name) => console.log(name)}
        items={['Все', 'Мясные', 'Вегетарианские', 'Острые', 'Гриль', 'Закрытые']}
      />
      <ProductsList />
    </div>
  );
}

export default App;
