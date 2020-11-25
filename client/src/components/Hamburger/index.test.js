import { shallow } from 'enzyme'
import Burger from '.'

describe('<Burger />', () => {
  it('should render', () => {
    const wrapper = shallow(<Burger />)

    console.log('wrapper', wrapper)
  })
})
