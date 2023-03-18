import { useEffect, useState } from "react";
import axios from "axios";

export function useFetchCurrency() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD,EUR"
      )
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  return { data, error };
}
