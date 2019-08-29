import React from 'react';
import './main-page.css'
import Column from '../column/column'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Popup from "reactjs-popup";
import Modal from 'react-modal';

export default function MainPage({leftButtons, rightButtons, totalRows}){
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="drag-drop-react">
                <Column buttonPositions={leftButtons} totalRows={leftButtons.length} isLeft={true} showPopUp={showPopUp}/>
                <div className='space'></div>
                <Column buttonPositions={rightButtons} totalRows={rightButtons.length} isLeft={false}/>
            </div>

        </DndProvider>
    );
}

function showPopUp () {
    console.log('lalalalalalalal land')
    return (
        <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
        </Popup>
    )
}