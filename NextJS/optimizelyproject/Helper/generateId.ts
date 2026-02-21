import React from 'react'

const generateId = () => {
  const id = Math.floor(10000000 + Math.random() * 90000000);
  return id;
}

export default generateId
