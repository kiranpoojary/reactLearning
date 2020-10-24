import React from 'react'
import Columns from './Columns'

function Table() {
    const mystyle = {
        color: 'cyan',
        fontSize: '22px',
        border: '1px solid red'
    }
    return (
        <div>
            <table style={mystyle}>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
