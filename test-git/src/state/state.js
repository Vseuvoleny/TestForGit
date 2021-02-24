import React, {useState} from 'react'

export const State = () => {
const [sur, setsur] = useState('ser')

    return (
        <div>
                {sur}
        </div>
    )
}
