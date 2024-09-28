import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
    //calculate ratings average

    let average = feedback.reduce((accumulator, current) => {
        return accumulator + current.rating
    }, 0) / feedback.length;

    //making sure it doesnt have too many trailing decimal places
    //regex is to remove the .0 if there is a zero decimal place at the end
    average = average.toFixed(1).replace(/[.,]0$/, '')

    console.log("average ", average)

    return (
        <div className=''>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Feedback from customers : {isNaN(average) ? 0 : average}</h4>
        </div>
    );
}

FeedbackStats.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            rating: PropTypes.number.isRequired,

        })
    )
}
export default FeedbackStats;