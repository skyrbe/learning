import React from 'react';

export const withDataNull = (Component) => (props) =>
  !props.data ? null : <Component { ...props } />;

export const withListEmpty = (Component) => (props) =>
  !props.data.length
    ? <div><p>No data to show.</p></div>
    : <Component { ...props } />

export const withLoadingIndicator = (Component) => (props) =>
  props.loading
    ? <div><p>Loading...</p></div>
    : <Component { ...props } />
