import React, { memo } from 'react'

const Child = ({count, myFunc}) => {
    console.log("------------- Child Component");
    
  return (
    <div>Child : {count}</div>
  )
}

// export default React.memo()
export default memo(Child)