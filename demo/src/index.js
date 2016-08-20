import React from 'react'
import {render} from 'react-dom'

import App from './app'
import './example.less'

class Page extends React.Component {

  componentDidMount(){
    var githubScript = document.createElement('script');
    githubScript.setAttribute('src','https://buttons.github.io/buttons.js');
    document.head.appendChild(githubScript);
  }

  render(){
    return (
      <div className="page-wrapper">
        <div className="container">
          <nav className="left-col">
            <ul className="page-nav">
              <li className="page-nav__item">
                <a className="page-nav__link" href="#examples">Examples</a>
              </li>
              <li className="page-nav__item">
                <a className="page-nav__link" href="#getting-started">Getting started</a>
              </li>
              <li className="page-nav__item">
                <a className="page-nav__link" href="#options">Options</a>
              </li>
              <li className="page-nav__item">
                <a className="page-nav__link" href="#license">License</a>
              </li>
              <li className="page-nav__item">
                <a className="page-nav__link" href="#help">Help</a>
              </li>
            </ul>
          </nav>
          <div className="right-col">
            <div className="page-content">
              <header className="page-header">
                <h1 className="page-header__title">React Images</h1>
                <p className="page-header__subtitle">A simple, responsive Lightbox component for <a href="http://facebook.github.io/react/" target="_blank">ReactJS</a> to display an array of images.</p>
              </header>
              <div className="page-subheader">
                <a href="http://github.com/jossmac/react-images" className="page-subheader__link" target="_blank">Code and Docs on GitHub</a>
                <span className="page-subheader__button">
                  <a id="github-stars-button" className="github-button" data-style={window.innerWidth > 480 ? 'mega': null} href="https://github.com/jossmac/react-images" data-count-href="/jossmac/react-images/stargazers" data-count-api="/repos/jossmac/react-images#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star jossmac/react-images on GitHub">Star</a>
                </span>
              </div>
              <div className="page-body">
                <section id="examples" className="section-examples">
                  <h2>Examples</h2>
                  <div id="example">
                    <App />
                  </div>
                </section>

                <section id="getting-started" className="section-getting-started">
                  <h2>Getting Started</h2>
                  <p>1. Install using npm:</p>
                  <pre>npm install react-images --save</pre>
                  <p>2. Example usage with JSX:</p>
                  <pre><code>{`<Lightbox
      images={[
        { src: '../images/photo-1.jpg' },
        { src: '../images/photo-2.jpg' }
      ]}
      isOpen={this.state.lightboxIsOpen}
      onClickPrev={this.gotoPrevLightboxImage}
      onClickNext={this.gotoNextLightboxImage}
      onClose={this.closeLightbox}
    />`}</code></pre>

                </section>

                <section id="options" className="section-options">
                  <h2>Options</h2>
                  <div className="options-table-container">
                    <table className="options-table">
                      <thead>
                        <tr>
                          <th align="left">Property</th>
                          <th align="left">Type</th>
                          <th align="left">Default</th>
                          <th align="left">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td align="left">backdropClosesModal</td>
                          <td align="left">bool</td>
                          <td align="left">false</td>
                          <td align="left">Allow users to exit the lightbox by clicking the backdrop</td>
                        </tr>
                        <tr>
                          <td align="left">currentImage</td>
                          <td align="left">number</td>
                          <td align="left">0</td>
                          <td align="left">The index of the image to display initially</td>
                        </tr>
                        <tr>
                          <td align="left">customControls</td>
                          <td align="left">array</td>
                          <td align="left">undefined</td>
                          <td align="left">An array of elements to display as custom controls on the top of lightbox</td>
                        </tr>
                        <tr>
                          <td align="left">enableKeyboardInput</td>
                          <td align="left">bool</td>
                          <td align="left">true</td>
                          <td align="left">Supports keyboard input - <code>esc</code>, <code>arrow left</code>, and <code>arrow right</code></td>
                        </tr>
                        <tr>
                          <td align="left">images</td>
                          <td align="left">array</td>
                          <td align="left">undefined</td>
                          <td align="left">Required. An array of objects containing valid src and srcset values of img element</td>
                        </tr>
                        <tr>
                          <td align="left">imageCountSeparator</td>
                          <td align="left">string</td>
                          <td align="left">' of '</td>
                          <td align="left">Custom separator for the image count</td>
                        </tr>
                        <tr>
                          <td align="left">isOpen</td>
                          <td align="left">bool</td>
                          <td align="left">false</td>
                          <td align="left">Whether or not the lightbox is displayed</td>
                        </tr>
                        <tr>
                          <td align="left">onClickPrev</td>
                          <td align="left">func</td>
                          <td align="left">undefined</td>
                          <td align="left">Fired on request of the previous image</td>
                        </tr>
                        <tr>
                          <td align="left">onClickNext</td>
                          <td align="left">func</td>
                          <td align="left">undefined</td>
                          <td align="left">Fired on request of the next image</td>
                        </tr>
                        <tr>
                          <td align="left">onClickImage</td>
                          <td align="left">func</td>
                          <td align="left">undefined</td>
                          <td align="left">Handle click event on the current image</td>
                        </tr>
                        <tr>
                          <td align="left">onClose</td>
                          <td align="left">func</td>
                          <td align="left">undefined</td>
                          <td align="left">Required. Handle closing of the lightbox</td>
                        </tr>
                        <tr>
                          <td align="left">preloadNextImage</td>
                          <td align="left">bool</td>
                          <td align="left">true</td>
                          <td align="left">Based on the direction the user is navigating, preload the next available image.</td>
                        </tr>
                        <tr>
                          <td align="left">showCloseButton</td>
                          <td align="left">bool</td>
                          <td align="left">true</td>
                          <td align="left">Optionally display a close "X" button in top right corner</td>
                        </tr>
                        <tr>
                          <td align="left">showImageCount</td>
                          <td align="left">bool</td>
                          <td align="left">true</td>
                          <td align="left">Optionally display image index, e.g., "3 of 20"</td>
                        </tr>
                        <tr>
                          <td align="left">width</td>
                          <td align="left">number</td>
                          <td align="left">1024</td>
                          <td align="left">Maximum width of the carousel; defaults to 1024px</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="license" className="section-license">
                  <h2>License</h2>
                  <p>React Images is free to use for personal and commercial projects under <a target="_blank" href="https://github.com/jossmac/react-images/blob/master/LICENSE">the MIT license</a>.</p>
                  <p>Attribution is not required, but greatly appreciated. It does not have to be user-facing and can remain within the code.</p>
                </section>

                <section id="help" className="section-help">
                  <h2>Help</h2>

                  <h3>Have a question?</h3>
                  <p>Follow the <a target="_blank" href="https://github.com/jossmac/react-images#quick-start">quick start guide</a> on GitHub to get up and running quickly. Please do not use Github Issues to report personal support requests.</p>

                  <h3>Found a bug?</h3>
                  <p>If you find a bug, please read the <a target="_blank" href="https://github.com/jossmac/react-images/blob/master/CONTRIBUTING.md">Contribution Guildelines</a> before you <a target="_blank" href="https://github.com/jossmac/react-images/issues">report the issue</a>.</p>
                </section>
              </div>
            </div>
          </div>
          <footer className="page-footer">
            <span className="page-footer__copyright--small">Copyright </span>
            <span className="page-footer__copyright--large">&copy; </span>
            <a target="_blank" href="https://twitter.com/jossmackison" target="_blank">Joss Mackison</a> 2016
          </footer>
        </div>
      </div>
    )
  }
}

render(<Page />, document.querySelector('#demo'))