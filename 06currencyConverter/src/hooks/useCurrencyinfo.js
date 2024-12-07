// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() =>{
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//         ).then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
        
//     },[currency])
//     console.log(data);
//     return data
// }
// export default useCurrencyInfo;

import { useEffect, useState } from "react";

const API_KEY = "8003b198c65190d57d22f2b2";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!baseCurrency) return;

    async function fetchCurrencyData() {
      try {
        const response = await fetch(`${BASE_URL}/latest/${baseCurrency}`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result.conversion_rates || {}); // Store conversion rates
        setError(null);
      } catch (err) {
        console.error("Error fetching currency data:", err.message);
        setError(error)
      }
    }

    fetchCurrencyData();
  }, [baseCurrency]);

  return { data, error };
}

export default useCurrencyInfo;