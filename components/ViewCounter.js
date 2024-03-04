import React, { useEffect, useState } from 'react'

function ViewCounter({ slug }) {
  const [count, setCount] = useState('')

  useEffect(() => {
    fetch(`/api/views/${slug}`)
      .then((res) => res.json())
      .then((json) => {
        json.rows[0] ? setCount(json.rows[0].count) : setCount('-')
      })
  }, [slug])
  return <span> &#x2022; {count} Views</span>
}

export default ViewCounter
