import  { useState, useEffect } from "react";
import axios from "axios";

const CryptoPriceFetcher = () => {
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Replace with your Alpha Vantage API key
  const apiKey = "859O5N1F3MBINQUS";
  const cryptoAssets = ["BTC", "ETH", "XRP"]; // List of cryptocurrencies

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      const promises = cryptoAssets.map(async (crypto) => {
        const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${crypto}&to_currency=USD&apikey=${apiKey}`;
        try {
          const response = await axios.get(url);
          const exchangeRate =
            response.data["Realtime Currency Exchange Rate"][
              "5. Exchange Rate"
            ];
          return { symbol: crypto, price: parseFloat(exchangeRate).toFixed(2) };
        } catch (err) {
          console.error(`Error fetching data for ${crypto}:`, err);
          return { symbol: crypto, price: "Error" };
        }
      });

      try {
        const results = await Promise.all(promises);
        setCryptoPrices(results);
        setError("");
      } catch (err) {
        setError("Error fetching prices");
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, [apiKey]);

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Crypto Prices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cryptoPrices.map(({ symbol, price }) => (
          <div
            key={symbol}
            className="p-4 bg-white shadow-md rounded-lg border border-gray-200 text-center"
          >
            <h2 className="text-xl font-semibold">{symbol}</h2>
            <p className={`text-lg ${price !== "Error" ? "text-green-500" : "text-red-500"}`}>
              {price !== "Error" ? `$${price}` : "Error fetching price"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoPriceFetcher;
