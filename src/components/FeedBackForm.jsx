import { useState } from 'react'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedBackForm() {
  const [text, setTextState] = useState('')
  const [message, setMState] = useState('')
  const [button, setButtonState] = useState(false)

  const textChangeHanler = (e) => {
    setTextState(() => {
      return e.target.value
    })
  }

  return (
    <Card>
      <h2>How will you rate your service with us?</h2>
      <div className='input-group'>
        <input
          type='text'
          placeholder='write a review'
          onChange={textChangeHanler}
          value={text}
        />
        <Button type='submit' isDisabled={button}>
          <span></span>
        </Button>
      </div>
    </Card>
  )
}

export default FeedBackForm
