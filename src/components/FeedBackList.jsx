import { motion, AnimatePresence } from 'framer-motion'
import FeedBackItem from './FeedBackItem'
import PropTypes from 'prop-types'

function FeedBackList({ feedBack, handleDelete }) {
  if (!feedBack || feedBack.length === 0) {
    return <p>No feed back yet</p>
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedBack.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, transitionDuration: '250ms' }}
              animate={{ opacity: 1, transitionDuration: '250ms' }}
              exit={{ opacity: 0, transitionDuration: '250ms' }}
            >
              <FeedBackItem
                key={item.id}
                item={item}
                deleteHandler={handleDelete}
              />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
  // return (
  //   <div className='feedback-list'>
  //     {feedBack.map((item) => {
  //       return (
  //         <FeedBackItem
  //           key={item.id}
  //           item={item}
  //           deleteHandler={handleDelete}
  //         />
  //       )
  //     })}
  //   </div>
  // )
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
