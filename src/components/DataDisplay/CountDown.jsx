import React from 'react';


function Counter({renderer:Renderer, date, dateIncrement, onMount, onTick, onTickCondition, onComplete}) {

    const [timer, setTimer] = React.useState({
        days:0,
        hours:0,
        minutes:0,
        seconds:0,
    })

      // 👇️ get memoized value
    const getDate = React.useMemo(() => {
        return date
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getDateIncrement = React.useMemo(() => {
        return dateIncrement
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    const handleOnMount =  React.useCallback(() => {
        if(onMount){
            return onMount()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleOnTick =  React.useCallback(() => {
        if(onTick) {
            return onTick()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleOnTickCondition =  React.useCallback(() => {
        if(onTickCondition) {
            return onTickCondition()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const handleOnComplete =  React.useCallback(() => {
        if(onComplete) {
            return onComplete()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    React.useEffect(() => { 
        let days, hours, minutes, seconds;

        // Handle onMount
        handleOnMount()
        // dateIncrement
        let increment = getDateIncrement || 0
        // Set the date we're counting down to
        const countDownDate = new Date(getDate).getTime() + increment + 2000;

        // const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

        // Update the count down every 1 second
        const counterInterval = setInterval(function() {

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            if (distance >= 1) {
                // Time calculations for days, hours, minutes and seconds
                days    = Math.floor(distance / (1000 * 60 * 60 * 24));
                hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimer({days, hours, minutes, seconds})
                // Run onTick function
                handleOnTick()
                // handleOnTickCondition
                if (minutes === 0 && seconds === 15) {
                    handleOnTickCondition()
                }
                
            }

            // If the count down is finished, write some text
            if (distance < 1 ) {
                handleOnComplete()     
                clearInterval(counterInterval);
            }

        }, 1000);
             
    }, [getDate, getDateIncrement, handleOnMount, handleOnTick, handleOnTickCondition, handleOnComplete])

    return ( 
        <div>
            <Renderer 
                days={timer.days}
                hours={timer.hours}
                minutes={timer.minutes}
                seconds={timer.seconds}
            >
            </Renderer>
        </div>
     );
}

export default Counter;