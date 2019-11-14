import React from 'react';
import { connect } from 'react-redux';
import { Highlight } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

function Hit(props) {
  return (
    <article>
      <a href={props.hit.url}>
        <h1>
          <Highlight attribute="title" hit={props.hit} />
        </h1>
      </a>
      <div className="tags">
        <span onClick={() => props.setQuery(props.hit.language)} className="language"><Highlight attribute="language" hit={props.hit} /></span>
        <span onClick={() => props.setQuery(props.hit.topic)} className="topic"><Highlight attribute="topic" hit={props.hit} /></span>
      </div>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuery: (query) => dispatch({ type: 'QUERY', payload: query })
  };
}

export default connect(null, mapDispatchToProps)(Hit);
