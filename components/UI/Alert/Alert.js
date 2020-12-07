import React, { useState } from 'react'
import ErrorIcon from '../../Icons/generic/ErrorIcon'
import WarningIcon from '../../Icons/generic/WarningIcon'
import InfoIcon from '../../Icons/generic/InfoIcon'
import SuccessIcon from '../../Icons/generic/SuccessIcon'

const Alert = ({ color, titleAlert, messageAlert }) => {

  const Icon = () => {
    switch (color) {
      case 'red':
        return (<ErrorIcon />)
      case 'green':
        return (<SuccessIcon />)
      case 'yellow':
        return (<WarningIcon />)
      case 'blue':
        return (<InfoIcon />)
      default:
        break;
    }
  }

  return (
    <div className={`alert flex flex-row items-center bg-${color}-200 p-5 rounded border-b-2 border-${color}-300`}>
      <div className={`alert-icon flex items-center bg-${color}-100 border-2 border-${color}-500 justify-center h-10 w-10 flex-shrink-0 rounded-full`}>
        <span className={`text-${color}-500`}>
          <Icon />
        </span>
      </div>
      <div className="alert-content ml-4">
        <div className={`alert-title font-semibold text-lg text-${color}-800`}>
          {titleAlert}
        </div>
        <div className={`alert-description text-sm text-${color}-600`}>
          {messageAlert}
        </div>
      </div>
    </div>
  )
}

export default Alert
