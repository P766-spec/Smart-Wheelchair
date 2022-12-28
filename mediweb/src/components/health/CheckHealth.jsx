import React from 'react'
import HeartRate from './HeartRate'
import Oxygen from './Oxygen'
import Temperature from './Temperature'

const CheckHealth = () => {
  return (
    <div className="check_health">
      <h6>Check Health</h6>
      <HeartRate />
      <Oxygen />
      <Temperature />
    </div>
  )
}

export default CheckHealth
