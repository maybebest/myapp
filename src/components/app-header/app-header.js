import React from 'react'
import ReactDOM from 'react-dom'

const AppHeader = ({toDo, done}) => {
    return (
        <div>
            <h1>
                My Todo List
            </h1>
            <h2>
                {toDo} more to do, {done} done
            </h2>
        </div>

    )
};

export default AppHeader;