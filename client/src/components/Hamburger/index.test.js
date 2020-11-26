import { shallow } from 'enzyme'
import Burger from '.'

const onClick = jest.fn()
const defaultProps = {
  onClick,
  isOpen: false,
}

describe('<Burger />', () => {
  it('should render', () => {
    const wrapper = shallow(<Burger {...defaultProps} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should handle onClick', () => {
    const wrapper = shallow(<Burger {...defaultProps} />)

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalled()
  })
})
