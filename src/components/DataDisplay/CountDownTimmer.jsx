import React from 'react';


function CountDownTimmer({renderer:Renderer, date, dateIncrement, onMount, onTick, onTickCondition, onComplete}) {

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
    }, [date]);

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
        // Get the browser timezone offset in minutes and convert it to miliseonds
        /* The time-zone offset is the difference, in minutes, 
         between UTC and local time. Note that this means that the offset is 
         positive if the local timezone is behind UTC and negative if it is ahead. 
         For example, if your time zone is UTC+10 (Australian Eastern Standard Time), 
         -600 will be returned. Daylight savings time prevents this value from being 
         a constant even for a given locale
         */
        let offset = new Date().getTimezoneOffset() * 60 * 1000
        
        // Have to split time funny for IOS and Safari NAN and timezone bug
        let arr = getDate.split(/[- :]/)
        const date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);

        // Set the date we're counting down to
        // const countDownDate = countDown + increment - (offset);
        const countDownDate = new Date(date).getTime() + increment - (offset);

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

export default CountDownTimmer;