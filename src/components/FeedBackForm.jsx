import { useState } from 'react'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedBackForm() {
  const [text, setTextState] = useState('')
  const [message, setMessageState] = useState('')
  const [isDisabled, setButtonState] = useState(true)

  const textChangeHanler = (e) => {
    if (text === '') {
      setMessageState(null)
      setButtonState(true)
    } else if (text !== '' && text.trim().length < 10) {
      setMessageState('Text should be at least 10 characters')
      setButtonState(true)
    } else {
      setButtonState(false)
      setMessageState(null)
    }
    setTextState(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How will you rate your service with us?</h2>
        <div className='input-group'>
          <input
            type='text'
            placeholder='write a review'
            onChange={textChangeHanler}
            value={text}
          />
          <Button type='submit' isDisabled={isDisabled}>
            <span>Send</span>
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedBackForm
