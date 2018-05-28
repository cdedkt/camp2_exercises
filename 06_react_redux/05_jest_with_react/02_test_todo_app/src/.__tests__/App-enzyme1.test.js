import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import App from '../App';

test('App should be able to add several tasks', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find("input")).toHaveLength(1);
  expect(wrapper.find("input").text()).toEqual("");

  const newTask1 = "task 1";
  wrapper.setState({ newTask: newTask1 });
  wrapper.find("form").simulate("submit", {preventDefault: ()=>{}});
  expect(wrapper.find("li").text()).toEqual(newTask1);

  const newTask2 = "task 2";
  wrapper.find("#inputNewTask").simulate("change", {target: {value: newTask2}});
  wrapper.find("form").simulate("submit", {preventDefault: ()=>{}});
  const tasks = wrapper.find("li").map(node => node.text());
  expect(tasks).toEqual([newTask1, newTask2]);
});


test('App should be able to check a task', () => {
  const wrapper = shallow(<App />);

  const newTask1 = "task 1";
  wrapper.setState({ newTask: newTask1 });
  wrapper.find("form").simulate("submit", {preventDefault: ()=>{}});
  let nodeToCheck = wrapper.find("li");

  expect(nodeToCheck.children("input")).toHaveLength(1);

  nodeToCheck.children("input").simulate("change");
  //rechargement necessaire du node
  nodeToCheck = wrapper.find("li");

  expect(nodeToCheck.children("input")).toHaveLength(2);
  
});
