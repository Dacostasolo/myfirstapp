import { useState } from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedBackData'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm'

function App() {
  const [feedBack, setFeedBack] = useState(FeedBackData)
  const deleteFeedBack = (id) => {
    if (true) {
      setFeedBack(feedBack.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedBackForm />
        <FeedBackStats feedBack={feedBack} />
        <FeedBackList feedBack={feedBack} handleDelete={deleteFeedBack} />
      </div>
    </>
  )
}

export default App
