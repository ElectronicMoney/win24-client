import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  SSE_URL } from '../../utils';
import { setActiveGame } from './sseSlice';




function SSEvent({children}) {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    


    React.useEffect(() => {
        const sse = new EventSource(`${SSE_URL}/stream?uuid=${auth.accessToken}`, { withCredentials: true });

        sse.addEventListener('active_game', (e) => {
            const data = JSON.parse(e.data)
            // Set the active game
            dispatch(setActiveGame(data))
        });

        
        sse.onmessage = e => {
            console.log(e)
        }

        sse.onerror = () => {
            // error log here 
            sse.close();
        }

        return () => {
            sse.close();
        };
            // eslint-disable-next-line
    }, []);


    return ( 
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}

export default SSEvent;