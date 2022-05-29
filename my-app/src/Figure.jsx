import { useParams } from 'react-router-dom';

function Figure() {
    const { number, color } = useParams();

    const style = {
        backgroundColor: color,
    }

    return (
    <>
        {Number(number) === 1 ? <div className='squareFigure' style={style}></div> : <div className='circleFigure' style={style}></div>}
    </>
    )
}

export default Figure;