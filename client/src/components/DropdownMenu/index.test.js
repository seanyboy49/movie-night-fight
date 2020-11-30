import { mount } from 'enzyme'

import DropdownMenu from '.'
import { logout } from '../../auth'

// first parameter = spy function path
jest.mock('../../auth', () => ({ logout: jest.fn() }))

describe('<DropdownMenu />', () => {
  it('should open if isOpen is true', () => {
    const wrapper = mount(<DropdownMenu isOpen={true} />)

    expect(wrapper.prop('isOpen')).toBe(true)
  })

  it('should call logout if <SmallText /> is clicked', () => {
    const wrapper = mount(<DropdownMenu isOpen={true} />)
    const smallText = wrapper.find('p').last()

    smallText.simulate('click')
    expect(logout).toHaveBeenCalled()
  })
  it('should contain log out inside <SmallText />', () => {
    const wrapper = mount(<DropdownMenu isOpen={true} />)
    const smallText = wrapper.find('p').last()

    expect(smallText).toHaveText('Log out')
  })
})
