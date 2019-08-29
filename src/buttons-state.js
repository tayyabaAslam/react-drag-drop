import {ButtonPosition} from './constants'
let leftButtons = ['Appointment 1']
let rightButtons = ['Appointment 2', 'Appointment 6', 'Appointment 3', 'Appointment 5', 'Appointment 4', 'Appointment 7', 'Blank Appointment']
let buttons = {leftButtons: leftButtons, rightButtons: rightButtons}
let draggedIndex = null
let observer = null

function emitChange() {
    observer(buttons)
}

function reArrangeButtons (column, fromIndex, toIndex) {
    let buttons = column === ButtonPosition.LEFT ? leftButtons : rightButtons
    let buttonToMove = Object.assign(buttons[fromIndex])
    let array = [...buttons]
    if(fromIndex > toIndex) {
        for (let i=toIndex; i<fromIndex; i++) {
            buttons[i+1] = array[i]
        }
    }
    if(fromIndex<toIndex) {
        for (let i=fromIndex; i<toIndex; i++) {
            if (i+1 < buttons.length) {
                buttons[i] = array[i + 1]
            } else {
                buttons.splice(i, 1)
            }
        }
    }
    if (toIndex < buttons.length) {
        buttons[toIndex] = buttonToMove.toString()
    } else {
        buttons.splice(toIndex, 0, buttonToMove.toString())
    }
}

export function observe(o) {
    if (observer) {
        throw new Error('Multiple observers not implemented.')
    }

    observer = o
    emitChange()
}

export function moveButton(toIndex, fromIndex, toColumn, fromColumn) {
    if (toColumn === fromColumn) {
        //NOTE:- When swapping is in same column
        reArrangeButtons(fromColumn, fromIndex, toIndex)
    } else {
        if (fromColumn === ButtonPosition.RIGHT && toColumn === ButtonPosition.LEFT) {
            //NOTES:- When swapping from right to left
            leftButtons.splice(toIndex, 0, rightButtons[fromIndex])
            rightButtons.splice(fromIndex, 1)
        } else if (fromColumn === ButtonPosition.LEFT && toColumn === ButtonPosition.RIGHT) {
            //NOTES:- When swapping from left to right
            rightButtons.splice(toIndex, 0, leftButtons[fromIndex])
            leftButtons.splice(fromIndex, 1)
        }
    }
    emitChange()
}