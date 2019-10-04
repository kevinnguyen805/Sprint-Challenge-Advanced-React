import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Search from './components/Search';
import App from './App';


test('App renders without crashiing', () => {
  render(<App />)
})
test('Search renders without crashing', () => {
  render(<Search />)
})
