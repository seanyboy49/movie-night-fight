import { shallow, mount } from 'enzyme'
import Button from '.'

const onSubmit = jest.fn()
const defaultProps = {
  text: 'LOG IN',
  onSubmit,
  isLoading: false,
  isDisabled: false,
}

describe('<Button />', () => {
  it.only('should handle onSubmit', () => {
    const wrapper = mount(<Button {...defaultProps} />)
    const button = wrapper.find('button')

    button.simulate('click')

    expect(onSubmit).toHaveBeenCalled()
  })

  it('should show loading spinner if isLoading is true', () => {})

  it('should show text if isLoading is false', () => {})
  it('should disable button if isDisabled is true', () => {})
})
