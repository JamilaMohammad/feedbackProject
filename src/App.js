import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';

import Header from './component/Header';
import Feedback from './data/Feedback';
import FeedbackList from './component/InputList';
import FeedbackStats from './component/FeedbackStats';
import InputForm from './component/InputForm';

function App() {

    const [feedback, setFeedback] = useState(Feedback)
    

    const deleteFeedback = (id) => {
        console.log("old list ", feedback)
        if (window.confirm('Deleting this will permanently remove this, are you sure you want to proceed?')) {
            setFeedback(feedback.filter(
                item => item.id !== id
            ));
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        console.log("feedback added ", newFeedback)

    }

    return (
        <>
            <Header text="McDonalds Feedback App" />
            <div className="feedback">
                <InputForm handleAddFeedback={(e) => addFeedback(e)} />
                <FeedbackStats feedback={feedback}/>
                <FeedbackList
                    feedback={feedback}
                    handleDelete={(id) => deleteFeedback(id)}
                />
            </div>
        </>
    );

}
export default App;