import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/bf3bf57e110f1e936fe481e0/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.conversion_rates);  // Corrected key
      })
      .catch((error) => {
        console.error("Failed to fetch currency info:", error);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;