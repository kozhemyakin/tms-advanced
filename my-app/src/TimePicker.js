import React, {useEffect} from 'react';

function TimePicker() {
    const [ hours, setHours ] = React.useState(0);
    const [ mins, setMins ] = React.useState(0);

    const decrementHours = () => {
        setHours(hours - 1);
    }

    const incrementHours = () => {
        setHours(hours + 1);
    }

    const decrementMins = () => {
        setMins(mins - 1);
    }

    const incrementMins = () => {
        setMins(mins + 1);
    }

    useEffect(() => {
        if (hours > 23) {
            setHours(0);
        } else if (hours < 0) {
            setHours(23);
        }

        if (mins > 59) {
            setMins(0);
            setHours(hours + 1)
        } else if (mins < 0) {
            setMins(59);
            setHours(hours - 1)
        } 

    }, [hours, mins]);

    return (
        <div className='App-header'>

            <div className='clock'>
                {hours < 10  ? '0' + hours : hours}:{mins < 10 ? '0' + mins : mins}
            </div>

            <div className="counters">
                <div>
                    <button onClick={decrementHours}>  -  </button>   
                    <button onClick={incrementHours}>  +  </button>
                </div>
                <div>
                    <button onClick={decrementMins}>  -  </button>   
                    <button onClick={incrementMins}>  +  </button>
                </div>
            </div>

        </div>
    )
}

export default TimePicker;
