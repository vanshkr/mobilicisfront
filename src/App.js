import { Route, Routes } from "react-router-dom";
import {
  Home,
  LowIncome,
  ExpensivePhones,
  QuoteRequirements,
  LuxuryCars,
  TopCities,
} from "./pages";
const App = () => {
  return (
    <div className='App' style={{ color: "black" }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/low_income' element={<LowIncome />} />
        <Route path='/expensive_phones' element={<ExpensivePhones />} />
        <Route path='/quote_requirements' element={<QuoteRequirements />} />
        <Route path='/luxury_cars' element={<LuxuryCars />} />
        <Route path='/top_cities' element={<TopCities />} />
      </Routes>
    </div>
  );
};

export default App;
