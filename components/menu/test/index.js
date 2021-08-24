import { expect, fixture, html } from '@open-wc/testing';
// this test file can be run on command line with npm run test or with visual debug via npm run test:visual

import '../src/index.js';

describe('<cagov-navoverlay>', () => {
  it('works', async () => {

    const csslink  = document.createElement('link');
    csslink.rel  = 'stylesheet';
    csslink.type = 'text/css';
    csslink.href = '../index.css';
    csslink.media = 'all';
    document.getElementsByTagName('head')[0].appendChild(csslink);

    // import our element starting HTML from the component's template file which includes the setup code used in cannabis site at headless.cannabis.ca.gov
    let response = await fetch('../template.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let startHTML = await response.text();
    // use this HTML as a test fixture
    const el = await fixture(startHTML);

    // automated axe accessibility test
    // this test can be made to intentionally fail by adding inaccessible code to the template.html like a form field with no labels
    // reproduce these results manually by installing the axe chrome extension and loading this component's preview.html file after running npm run start in the repo root to start local web server (https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd/related?hl=en-US)
    await expect(el).to.be.accessible(); // vscode thinks this await is unnecessary but it is required when doing the accessible test

    // verify an expected initial class is present
    expect(el.querySelector('.search-container')).to.have.class('hidden-search'); 
    
    // verify attribute expected to change on click is in the initial off state
    expect(el.querySelector('.expanded-menu-col').getAttribute('aria-expanded')).to.equal('false');    

    // click to expand menu
    el.querySelector('.expanded-menu-col').click();

    // verify attribute is changed as expected after click
    expect(el.querySelector('.expanded-menu-col').getAttribute('aria-expanded')).to.equal('true');

  });
});