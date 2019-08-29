import React from 'react';
import DraggableButton from '../draggable-button/draggable-button'
import DropAbleRow from '../dropable-row/dropable-row'
import './column.css'
import { ButtonPosition } from '../../constants'
import FreeScrollBar from 'react-free-scrollbar'
import { Scrollbars } from 'react-custom-scrollbars';

export default function Column({ buttonPositions, totalRows, isLeft, showPopUp}) {

    let items = []
    for (let i=0; i<10; i++) {
        items.push(renderRow(i, buttonPositions, isLeft, totalRows, showPopUp))
    }
    const heading = isLeft ? 'Treatment plan' : 'Appointment types'
    return (

        <div className="column-container">
            <h1 className='column-heading'>{heading}</h1>
            <Scrollbars className="appointments-container" autoHeight
                        autoHeightMin={500}
                        autoHeightMax={500}
                        autoHide
                        autoHideTimeout={10}
                        autoHideDuration={1000}>
                {/*<FreeScrollBar autohide={true}>*/}
                    {items}
                {/*</FreeScrollBar>*/}
            </Scrollbars>
        </div>
    );
}

function renderRow(rowIndex, buttonPositions, isLeft, totalRows, showPopUp) {
    const column = isLeft ? ButtonPosition.LEFT : ButtonPosition.RIGHT
    const showButton = rowIndex < totalRows
    return (
        <div key={rowIndex} className='row'>
            <DropAbleRow index={rowIndex} button={buttonPositions[rowIndex]} column={column}>
                <DraggableButton showButton={showButton}
                                 index={rowIndex}
                                 button={buttonPositions[rowIndex]}
                                 column={column}
                                 showPopUp={showPopUp}/>
            </DropAbleRow>
        </div>
    )
}