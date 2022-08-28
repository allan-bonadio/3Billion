/*
** 3Billion -- root component of the 3 Billion and Me project
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable no-unused-vars */

import { render, screen } from '@testing-library/react';
import ThreeBillion from './ThreeBillion.js';

test('renders learn react link', () => {
  render(<ThreeBillion />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
