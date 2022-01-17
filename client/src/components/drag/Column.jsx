import React from 'react'

const Column = ({isover, children}) => {
    const className = isOver ? " higline-region" : ""
    return (
        <div>
            <div className={`col${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Column
