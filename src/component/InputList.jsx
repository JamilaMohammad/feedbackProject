import PropTypes from 'prop-types';
import Item from "./Items";

function FeedbackList({ feedback, handleDelete }) {

    if (!feedback || feedback.length === 0) {
        return (
            <p>
                Nothing to report
            </p>
        )
    }
    return (
        <div >
            {feedback.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    handleDelete={(id) => handleDelete(id)}
                />
            ))}

        </div>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    ),
}

export default FeedbackList;