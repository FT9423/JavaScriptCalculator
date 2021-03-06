import { fireEvent, getByText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let container;

describe('calculator functionality', () => {
    beforeEach(() => {
      // Constructing a new JSDOM with this option is the key
      // to getting the code in the script tag to execute.
      // This is indeed dangerous and should only be done with trusted content.
      // https://github.com/jsdom/jsdom#executing-scripts
      dom = new JSDOM(html, { runScripts: 'dangerously' });
      container = dom.window.document.body;
    })
  
    test('has an add button', () => {
      expect(container.querySelector('.btn-plus')).not.toBeNull();
      expect(getByText(container, '+')).toBeInTheDocument();
    })
  
    test('has a subtract button', () => {
      expect(container.querySelector('.btn-subtract')).not.toBeNull();
      expect(getByText(container, '-')).toBeInTheDocument();
    })

    test('has a multiplication button', () => {
      expect(container.querySelector('.btn-multiply')).not.toBeNull();
      expect(getByText(container, '*')).toBeInTheDocument();
    })

    test('has a division button', () => {
      expect(container.querySelector('.btn-divide')).not.toBeNull();
      expect(getByText(container, '/')).toBeInTheDocument();
    })
  
    test('can add two numbers', () => {
  
      let number1 = container.querySelector("#FirstInput");
      let number2 = container.querySelector("#SecondInput");
  
      fireEvent.change(number1, {target: { value: 3 } });
      fireEvent.change(number2, {target: { value: 2 } });
  
      const button = getByText(container, '+');
      fireEvent.click(button);
  
      let result = container.querySelector("#output");
      expect(parseFloat(result.innerHTML)).toBe(5);
    })
  
    test('can subtract two numbers', () => {
  
      let number1 = container.querySelector("#FirstInput");
      let number2 = container.querySelector("#SecondInput");
  
      fireEvent.change(number1, {target: { value: 15 } });
      fireEvent.change(number2, {target: { value: 3 } });
  
      const button = getByText(container, '-');
      fireEvent.click(button);
  
      let result = container.querySelector("#output");
      expect(parseFloat(result.innerHTML)).toBe(12);
    })

    test('can multiply two numbers', () => {
  
      let number1 = container.querySelector("#FirstInput");
      let number2 = container.querySelector("#SecondInput");
  
      fireEvent.change(number1, {target: { value: 5 } });
      fireEvent.change(number2, {target: { value: 6 } });
  
      const button = getByText(container, '*');
      fireEvent.click(button);
  
      let result = container.querySelector("#output");
      expect(parseFloat(result.innerHTML)).toBe(30);
    })

    test('can divide two numbers', () => {
  
      let number1 = container.querySelector("#FirstInput");
      let number2 = container.querySelector("#SecondInput");
  
      fireEvent.change(number1, {target: { value: 6 } });
      fireEvent.change(number2, {target: { value: 2 } });
  
      const button = getByText(container, '/');
      fireEvent.click(button);
  
      let result = container.querySelector("#output");
      expect(parseFloat(result.innerHTML)).toBe(3);
    })

    test('result is a number', () => {
      let result = container.querySelector("#output");
      expect(parseFloat(result.innerHTML)).not.toBeNaN();
    })

  })