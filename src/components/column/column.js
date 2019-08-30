import React from 'react';
import DraggableButton from '../draggable-button/draggable-button'
import DropAbleRow from '../dropable-row/dropable-row'
import './column.css'
import { ButtonPosition } from '../../constants'
import FreeScrollBar from 'react-free-scrollbar'
import { Scrollbars } from 'react-custom-scrollbars';
import {useDrop} from "react-dnd";
import {moveButton, moveButtonAtEnd} from "../../buttons-state";

export default function Column({ buttonPositions, totalRows, isLeft, showPopUp}) {

    const loopCount = totalRows < 7 ? 7: totalRows
    let items = []
    for (let i=0; i<loopCount; i++) {
        items.push(renderRow(i, buttonPositions, isLeft, totalRows, showPopUp))
    }
    const heading = isLeft ? 'Treatment plan' : 'Appointment types'
    return (

        <div className="column-container" >
            <h1 className='column-heading'>{heading}</h1>
            <Scrollbars className="appointments-container" autoHeight
                        autoHeightMin={500}
                        autoHeightMax={500}
                        autoHide
                        autoHideTimeout={10}
                        autoHideDuration={1000}>
                {items}
            </Scrollbars>
        </div>
    );
}

function renderRow(rowIndex, buttonPositions, isLeft, totalRows, showPopUp) {
    const column = isLeft ? ButtonPosition.LEFT : ButtonPosition.RIGHT
    const showButton = rowIndex < totalRows
    return (
        <div key={rowIndex} className='row'>
            <DropAbleRow index={rowIndex} button={buttonPositions[rowIndex]} column={column} showButton={showButton}>
                <DraggableButton showButton={showButton}
                                 index={rowIndex}
                                 button={buttonPositions[rowIndex]}
                                 column={column}
                                 showPopUp={showPopUp}/>
            </DropAbleRow>
        </div>
    )
}