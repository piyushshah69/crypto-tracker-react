import { useState } from "react"
import { useQuery } from "react-query";
import fetchCoinData from "../services/fetchCoinData";

const CoinTable = ({currency}) => {
    const [page, setPage] = useState(1);
    const {data, isLoading, isError, error} = useQuery(
        ['coins', page, currency],
        () => fetchCoinData(page, currency),
        {
            // retry: 1,
            // retryDelay: 1000,
            cacheTime: 1000 * 60 * 2,
            staleTime: 1000 * 60 * 2,
        }
    );

    if (isError) {
        return <div>{error}</div>
    }

    console.log(data);
    
    
    return (
        <div className="w-[90%] mt-6 md:mt-12 md:w-[70%] m-auto">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr className="md:text-lg">
                            <th>#</th>
                            <th>Name</th>
                            <th className="text-end">Price</th>
                            <th className="text-end">24h Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && <div className="m-4 text-xl">Please wait, Data is loading...</div>}
                        {data && data.map((coin) => {
                            const isPositive = coin.price_change_24h > 0;
                            return (
                                <tr key={coin.id}>
                                    <td>{coin.market_cap_rank}</td>
                                    <th
                                        className="flex gap-2 items-center">
                                        <img className="w-10" src={coin.image} />{coin.name} • {coin.symbol.toUpperCase()}
                                    </th>
                                    <td
                                        className={isPositive ? "text-end text-green-500" : "text-end text-red-500"}>
                                        {(currency == "inr") && "₹"}{(currency == "usd") && "$"}{coin.current_price.toFixed(2)}
                                    </td>
                                    <td
                                        className={isPositive ? "text-end text-green-500" : "text-end text-red-500"}>
                                        {isPositive && "+"}{coin.price_change_24h.toFixed(2)} ({isPositive && "+"}{coin.price_change_percentage_24h.toFixed(2)}%)
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="mx-auto my-10 flex justify-center gap-10">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="text-lg bg-white text-black px-4 py-1 rounded disabled:bg-gray-400">
                    ←
                </button>
                <button
                    onClick={() => setPage(page + 1)}
                    className="text-lg bg-white text-black px-4 py-1 rounded">
                    →
                </button>
            </div>
        </div>
    )
}

export default CoinTable