import {useState, useEffect} from 'react';

        //must pass in the url to fetch
const useFetch = (url, id) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [obligFag, setObligFag] = useState(null);
    
    
      
      //runs every re-render
      //Fetches data as soon as the component renders, then updates state
    useEffect(() => {
        const abortCont = new AbortController();
        console.log('use effetct ran');

        fetch(url, {signal: AbortController.signal})
          .then(res => {
              
              if(!res.ok){
                  throw Error('Could not fetch the data for that resource');
                  
              }
              return res.json()
          })
          .then(data => {
              setData(data);
              setIsPending(false);
              setError(null);
              setObligFag(obligFag);
              

          })
          .catch(err => {
              if(err.name === 'AbortError'){
                  console.log('fetch aborted');
              }
              else{
                setIsPending(false);
                setError(err.message);
              }
              

          })
        return () => abortCont.abort();
        //the dependency array [] below makes sure that the useEffect hook
        //only run the function after the first initial render
    }, [url]);

    return {data, isPending, error, obligFag}

}

export default useFetch;