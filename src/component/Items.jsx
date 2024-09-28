import { FaTimes } from 'react-icons/fa';
import Card from "./shared/Card";
import '../index.css'


function Item({ item, handleDelete }) {

    return (
        <Card >
            <div>{item.rating}</div>
            <button className="close" onClick={() => handleDelete(item.id)}>
                <FaTimes
                    color='red'
                />
            </button>
            <div>{item.text}</div>
        </Card>
    )
}

export default Item;