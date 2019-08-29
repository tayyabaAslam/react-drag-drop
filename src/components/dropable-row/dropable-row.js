import React from 'react';
import { useDrop } from 'react-dnd'
import {moveButton} from '../../buttons-state'
import './dropable-row.css'

function DropAbleRow({ index, children, button, column }) {
    const [{ isOver }, drop] = useDrop({
        accept: 'button',
        drop: (item) => moveButton(index, item.index, column, item.column),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        }),
    })

    return (
        <div ref={drop} className='container'>
            {children}
        </div>
    )
}

export default DropAbleRow