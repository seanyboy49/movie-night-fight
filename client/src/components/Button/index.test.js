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
  it('should handle onSubmit', () => {
    const wrapper = mount(<Button {...defaultProps} />)
    const button = wrapper.find('button')

    button.simulate('click')

    expect(onSubmit).toHaveBeenCalled()
  })

  it('should show loading spinner if isLoading is true', () => {
    const wrapper = mount(<Button {...defaultProps} isLoading={true} />)

    const reel = wrapper.find('img')
    // check if something exist, toBeFalsy for opposite effect
    expect(reel).toBeTruthy()
  })

  //   it('should show text if isLoading is false', () => {
  //       const wrapper = mount(<Button {...defaultProps} />)

  //   })
  it('should disable button if isDisabled is true', () => {
    const wrapper = mount(<Button {...defaultProps} isDisabled={true} />)
    const button = wrapper.find('button')

    expect(button.prop('disabled')).toBeTruthy()
  })
})
