// eslint-disable-next-line react/prop-types
export const Square = ({ children, isSelected, updateBoard, index, notFinish }) => {

    const className = `square ${isSelected && !notFinish ? 'animated flash' : ''}`

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            <img src={children} />
        </div>
    )
}