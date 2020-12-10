import React from 'react'
import {Redirect } from 'react-router-dom'

export const RedirectAs404 = ({ location }) => 
  <Redirect to={Object.assign({}, location, { state: { is404: true }})}/>