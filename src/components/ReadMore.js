import React from 'react'
import ReadMoreReact from 'read-more-react';

function ReadMore({text}) {

  return (
      <p>

          <ReadMoreReact text={text}
          style={{color:'white'}}
              min={80}
              ideal={100}
              max={200}
              readMoreText="Read more"
              />
      </p>
  )
}

export default ReadMore