import React from 'react';
import UserItem from './UserItem';
import { withDataNull, withListEmpty, withLoadingIndicator } from './HOC';
import { compose } from './Utils';

const Users = ({ data, loading }) => {
  return (
    <div className="className">
      {data.map(item => {
        return (
          <UserItem
            key = {new Date().getTime() * Math.random()}
            item={item}
          />
        )
      })}
    </div>
  );
}

const ListWithConditionalRendering = withLoadingIndicator(withDataNull(withListEmpty(Users)));

export default ListWithConditionalRendering;
