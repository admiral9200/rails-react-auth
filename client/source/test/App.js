import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

// import App from 'containers/App';

const render = reactDom.renderToStaticMarkup;

test('Hello', assert => {
  assert.end();
});
