import request from "../utils/request";
import { useEffect, useState } from "react";

const useRequest = (url,initialData) => {
    const [state, setState] = useState(initialData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        request(url)
            .then(data => setState(data))
            .finally(() => setLoading(false))
    }, [url])


    return {
        loading,
        data: state
    }
};

export default useRequest;