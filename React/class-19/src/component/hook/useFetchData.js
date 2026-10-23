import axios from "axios";
import { useEffect, useState } from "react";

let useFetchData = (url) => {
    let [data, setData] = useState(null)
    let [isLoading, setIsLoading] = useState(false);
    let [error, setError] = useState(null);

    useEffect(() => {

        let handleFetchData = async () => {
            try {
                setData(null);
                setError(null);
                setIsLoading(true);


                let res = await axios.get(url);
                setData(res.data);


            } catch (error) {
                setError(error.message || 'ERROR Agaya!')
            } finally {
                setIsLoading(false);
            }
        }

        handleFetchData();

    }, [url])


return {data,isLoading,error}


}

export default useFetchData;