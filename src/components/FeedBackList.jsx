import FeedBackItem from './FeedBackItem'
import PropTypes from 'prop-types'

function FeedBackList({ feedBack, handleDelete }) {
  if (!feedBack || feedBack.length === 0) {
    return <p>No feed back yet</p>
  }
  return (
    <div className='feedback-list'>
      {feedBack.map((item) => {
        return (
          <FeedBackItem
            key={item.id}
            item={item}
            deleteHandler={handleDelete}
          />
        )
      })}
    </div>
  )
}

FeedBackList.propTypes = {
  feedBack: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      rating: PropTypes.number,
      text: PropTypes.string,
    })
  ),
}

export default FeedBackList
