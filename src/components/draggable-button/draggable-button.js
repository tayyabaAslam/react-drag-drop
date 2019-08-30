import React from 'react';
import { DragSource } from 'react-dnd'
import './draggable-button.css'
import Modal from "react-modal"
import { RangeDatePicker } from '@y0c/react-datepicker'
import '@y0c/react-datepicker/assets/styles/calendar.scss'
import 'moment/locale/ko'
// import "../../../node_modules/@y0c/react-datepicker/assets/styles/_mixin.scss";

const appointmentSource = {
    beginDrag(props, monitor, component) {
        const item = { type: 'button', index: props.index, column: props.column }
        return item
    },
}

function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDragSource: connect.dragSource(),
        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging(),
    }
}

class DraggableButton extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            isModalOpen: false
        };
    }

    render ()
    {
        const {showButton, button, index, isDragging, connectDragSource} = this.props

        return connectDragSource(
            <div>
                {
                    showButton &&
                    <div style={{
                        opacity: isDragging ? 0.5 : 1,
                        cursor: 'move',
                        paddingLeft: 5,
                        height: 65,
                        backgroundColor: 'white',
                        paddingBottom: 10,
                        borderRadius: 5}}
                         onClick={() => this.setState({
                             isModalOpen: true
                         })}
                    >
                        <h2 className='appointment-heading'>{ button }</h2>
                        <h4 className='appointment-detail'>Click to set date</h4>
                    </div>
                }
                <Modal
                    isOpen={this.state.isModalOpen}
                    className="Modal"
                    // overlayClassName="Overlay"
                >
                    <h2>{button}</h2>
                    <form>
                        <RangeDatePicker className='formInput'
                                         startText="Start"
                                         endText="End"
                                         startPlaceholder="Start Date"
                                         endPlaceholder="End Date"/>
                    </form>
                    <button className='formButton' onClick={() => this.setState({
                        isModalOpen: false
                    })}>
                        Submit
                    </button>
                    <button className='formButton' onClick={() => this.setState({
                        isModalOpen: false
                    })}>
                        Cancel
                    </button>
                </Modal>
            </div>
        )
    }
}

export default DragSource('button', appointmentSource, collect)(DraggableButton)