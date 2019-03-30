import React from 'react';
import {shallow} from 'enzyme';
import Person from './person';


// const testProps = {
//   name
// }
it('finds someting', ()=>{

  const wrapper = shallow(<Person
    name='test-name'/>)

    expect(wrapper.find('div.user-name').first().text()).toContain("test-name")
})

it.skip('simulates click', ()=>{

  const wrapper = shallow(<Person
    name='test-name'/>)


    expect(wrapper.find('div.user-name').first().next()).toEqual("test-name")
})
