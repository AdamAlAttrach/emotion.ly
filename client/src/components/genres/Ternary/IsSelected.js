import React from 'react'

export const isSelected = ({genre}) => {
  return (
    <div>
        <div className="effect">
            <div className="effect-activate" aria-hidden="true">
                <span style={{color: "red"}}>{genre.title}</span>
            </div>
        </div>
    </div>
  )
}

export default isSelected