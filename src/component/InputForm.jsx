import { useState } from 'react'

import Card from "./shared/Card";
import Button from './shared/Button';
import '../index.css'
import RatingSelect from './RatingSelect';

function InputForm({ handleAddFeedback }) {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    const handleTextChange = (e) => {

        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 20) {
            setBtnDisabled(true)
            setMessage("Input needs to be at least 20 charcters long")
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
        console.log("event changed", e.target.value)
    }

    const handleSelect = (rating) => {
        console.log("selected rating ", rating)
        setRating(rating)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 20) {
            const newFeedback = {
                text,
                rating
            }
            handleAddFeedback(newFeedback)
            setText('')
            setBtnDisabled(true)
        }
    }

    return (
        <Card className='form'>
            <form onSubmit={handleSubmit}>

                <h3>You can provide feedback on your last Mcdonalds meal</h3>

                <RatingSelect select={(rating) => handleSelect(rating)} />

                <div className='input-data'>
                    <input onChange={handleTextChange}
                        type='text'
                        placeholder="Add comments here"
                        value={text}
                    />

                    <Button
                        type='submit'
                        isDisabled={btnDisabled}
                    >Send
                    </Button>
                </div>

                {message &&
                    <div className='message'>
                        {message}
                    </div>}
            </form>

        </Card>
    );
}

export default InputForm;