import './index.css'

const DestinationItem = (props) => {
    const {destinationDetails} = props
    const {name, imgUrl} = destinationDetails

    return(
        <li className='item-container'>
            <img src={imgUrl} alt={name} className='img' />
            <p className='name'>{name}</p>
        </li>
    )
}

export default DestinationItem