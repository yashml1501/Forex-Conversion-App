import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/382cab30f00d4b65f7946cc4/latest/${baseCurrency}`)
            .then((res) => res.json())
            .then((res) => {
                console.log('Full API Response:', res);
                setData(res.conversion_rates);
            })
            .catch((error) => console.error('Error fetching currency data:', error));
    }, [baseCurrency]);

    return data;
}

export default useCurrencyInfo;
