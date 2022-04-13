function FeedBackStats({ feedBack }) {
  var average = (
    feedBack.reduce((acc, item) => {
      return acc + item.rating
    }, 0) / feedBack.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedBack.length} Review</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedBackStats
