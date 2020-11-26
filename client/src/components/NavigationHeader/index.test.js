import React from 'react'
import { shallow } from 'enzyme'

import NavigationHeader from '.'

describe('<NavigationHeader />', () => {
  it('should render', () => {
    const wrapper = shallow(<NavigationHeader />)

    expect(wrapper).toIncludeText('Movie Night Fight')
    expect(wrapper).toMatchSnapshot()
  })
})
