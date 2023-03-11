import React from 'react';

const NoLinks = () => {
  return (
    <h3>No links to show</h3>
  )
}

export const UnorderLinks = ({ listItems }) => {
  let links = [];
  let noLinks = <NoLinks />;

  if (listItems.length >= 0) {
    links = listItems.map((listItem, key) => {
      return <li key={key}>{listItem}</li>
    });
  } else {
    return noLinks;
  }
  return (
    <div>
      <ul>{links.length > 0 ? links : noLinks}</ul>
    </div>
  )
}