import React, { useState, useEffect } from 'react'
import { eventBusService } from '../services/eventBusService'



export const UserMsg = () => {

    let removeEventShowUserMsg
    const [msg, setMsg] = useState(null)
    useEffect(() => {
        if (removeEventShowUserMsg) removeEventShowUserMsg()
        removeEventShowUserMsg = eventBusService.on('show-user-msg', msg => {
            setMsg(msg)
            // setTimeout(() => {
            //     setMsg(null)
            // }, (10000))
        })

        return () => {
            removeEventShowUserMsg()
        }
    }, [])


    if (!msg) return <span></span>
    const msgClass = msg.type || ''
    return <div className={'user-msg ' + msgClass}>
        <button className="close-btn" onClick={() => {
            setMsg(null)
        }}>x</button>
        <span>{msg.txt}</span>
    </div>
}