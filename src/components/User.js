import React from 'react';

const User = props => (
  <tr>
    <td>
      <h2>{props.user.name} <br /></h2>
      
      <i>Company:</i> <b>"{props.user.company.name}"</b>
      <br />

      <span>
        <i>Address:</i> {props.user.address.city},
        <br />
        {props.user.address.street}, {props.user.address.suite}. <br />
        zipcode: {props.user.address.zipcode}
      </span>
      <br />
      <br />
      
      <i> username: <b>{props.user.username}</b> </i>
      <br />

      <i>e-mail:</i> <u>{props.user.email}</u>
      <br />

      <i>phone:</i> {props.user.phone}
      <br />

      <i>website: </i>
      <a href="#"> www.{props.user.website}</a>
      <br />
      <i>USER_ID:</i> {props.user.id}
      <br />
      <br />
      <br />
    </td>
  </tr>
);

export default User;