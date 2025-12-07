import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill for libraries (like react-router) that expect TextEncoder/TextDecoder
if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder;
}

if (!global.TextDecoder) {
  global.TextDecoder = TextDecoder;
}

// Global mock for framer-motion in unit tests; this is necessary for testing the home page.
jest.mock('framer-motion', () => {
  const React = require('react');
  const Mock = ({ children, ...rest }) => <div {...rest}>{children}</div>;
  return {
    motion: {
      div: Mock,
      h1: Mock,
      h2: Mock,
      p: Mock,
      span: Mock,
    },
  };
});
