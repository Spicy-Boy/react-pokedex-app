// Imports
import React, { useState, useEffect } from "react";
import axios from "axios";

// function
function useAxios() {
    // This holds the result of an API call, default null
    const [data, setData] = useState(null);
    // This can tell other components that the axios call is still gathering data
    const [loading, setLoading] = useState(false);
    // This holds the URL from a component; gives us control over when the call occurs
    const [url, setUrl] = useState("");
    // This handles an error status based on the results of an axios call (failure to get wanted results)
    const [error, setError] = useState(false);
    // OPTIONAL: Set an API key using setAuth()
    const [auth, setAuth] = useState(null);

    /*
    This function below is where the API call is made using Axios. It checks if the auth state is set and includes it in the request headers if so. If the request is successful, it updates the data state with the response and resets loading and error. If there's an error, it handles it by setting the error state and resetting data and loading.
    */
    async function customFetch() {
        try {
            let payload;
            if (auth) {
                console.log(`auth was used`);

                payload = await axios.get(url, {
                    headers: {
                        Authorization: auth,
                    },
                });
            } else {
                console.log(`auth was not used`);

                payload = await axios.get(url);
            }

            setData(payload.data);
            setLoading(false);
            setError(null);
        } catch (error) {
            if (error.response.status === 404) {
                setError("data could not be found");
                setData(null);
                setLoading(false);
            } else {
                setError(error.message);
                setData(null);
                setLoading(false);
            }
        }
    }

    // On the component side, use `setLoading(true)` to trigger this hook
    /*
    This useEffect runs whenever the loading state changes. If loading is true, it triggers the customFetch function to make the API request. This design allows components using the hook to control when the API request is made by updating the loading state.
    */
    useEffect(() => {
        if (loading) {
            customFetch();
        }
    }, [loading]);

    return [setUrl, data, loading, setLoading, error, setAuth];
    /*
    This hook returns 
        setUrl: A function to set the URL for the API request.
        data: The data received from the API.
        loading: A flag indicating whether the request is in progress.
        setLoading: A function to start/stop the loading process.
        error: Any error that occurred during the request.
        setAuth: A function to set the authorization header.
    */
}

export default useAxios;
