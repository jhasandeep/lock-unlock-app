// Write your code here

import {useState} from 'react'

import {Background, Heading} from './styledComponents'

import './index.css'

const Unlock = () => {
  const [state, setState] = useState(false)

  function unlock() {
    setState(preState => !preState)
  }

  return (
    <Background>
      {state ? (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Heading>Your Device is Unlocked</Heading>
        </div>
      ) : (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Heading>Your Device is locked</Heading>
        </div>
      )}

      <button className="button" type="button" onClick={unlock}>
        {state ? 'lock' : 'unlock'}
      </button>
    </Background>
  )
}

export default Unlock
