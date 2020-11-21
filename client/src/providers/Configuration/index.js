import React, { useContext } from 'react'
import PropTypes from 'prop-types'

const ConfigurationContext = React.createContext()

export const useConfiguration = () => {
  return useContext(ConfigurationContext) || {}
}

const ConfigurationProvider = ({ children, value }) => {
  return (
    <ConfigurationContext.Provider value={value}>
      {children}
    </ConfigurationContext.Provider>
  )
}

ConfigurationProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({ apiUrl: PropTypes.string }),
}

export default ConfigurationProvider
