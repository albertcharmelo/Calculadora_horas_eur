import "./App.css";
import { useEffect, useState } from "react";
import CardAddHours from "./components/CardAddHours";
import ResultsHours from "./components/ResultsHours";
import { useFetchCurrency } from "./hooks/useFetchCurrency";

function App() {
  const { data, error } = useFetchCurrency();
  const [hours, setHours] = useState(1);
  const [hoursPrice, setHoursPrice] = useState(5.5);

  return (
    <div className="h-screen w-screen bg-slate-50">
      {error && <li>{error}</li>}
      <div className="flex h-1/3 items-center justify-center">
        <CardAddHours
          hours={hours}
          setHours={setHours}
          setHoursPrice={setHoursPrice}
        />
      </div>
      <div className="flex items-center justify-center">
        <ResultsHours
          eur={data?.EUR ?? 0}
          usd={data?.USD ?? 0}
          hours={hours}
          hoursPrice={hoursPrice}
        />
      </div>
    </div>
  );
}
export default App;
