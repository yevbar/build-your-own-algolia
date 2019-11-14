import React, { Component } from 'react';
import { connect } from 'react-redux';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  connectSearchBox
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import Hit from './Hit';

import './App.css';

const searchClient = algoliasearch(
  '4J4C4V6PWW',
  '1ffa2bdbcd20904e55c7ffe097006bdc'
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: props.query
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== this.state.query) {
      this.setState({ query: this.props.query })
    }
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            <a href="/">algolia</a>
          </h1>
          <p className="header-subtitle">
            using{' '}
            <a href="https://github.com/algolia/react-instantsearch">
              React InstantSearch
            </a>
          </p>
        </header>

        <div className="container">
          <InstantSearch
            searchClient={searchClient}
            indexName="build_your_own_x"
          >
            <div className="search-panel">
              <div className="search-panel__results">
                <SearchBox
                  key={new Date().toString()}
                  className="searchbox"
                  defaultRefinement={this.state.query}
                />
                <Hits hitComponent={Hit} />

                <div className="pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.query
  }
}

export default connect(mapStateToProps)(App);
