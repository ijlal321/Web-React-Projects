import './App.css';
import Title from './components/Title';
import MenuSelector from './components/MenuSelector';
import FoodMenu from "./components/FoodMenu.jsx";
import menu from "./data";
import { useState } from 'react';

function App() {
  const [curMenu, setMenu] = useState(menu);
  function onMenuChange(newCategory){
    if (newCategory.category === "all"){
      setMenu(menu);
      return;
    }
    const newMenu = menu.filter((food)=>{
      return food.category === newCategory.category;
      console.log(food);
    })
    setMenu(newMenu);
  }
  return (
    <div className="App">
        <Title />
        <MenuSelector onMenuChange={onMenuChange}/>
        <FoodMenu data={curMenu} />
    </div>
  );
}

export default App;