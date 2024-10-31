import { useState, createContext } from "react";

const Notification  =({message,severity}) =>{
    const notificationStyles = {
        position:'absolute',
        top:100,
        rigth:10,
        width:'auto',
        height:'auto',
        backgroundColor:severity === 'success' ? 'green' :  'red',
        color:'white',
        padding:'10px 20px 10px 20px',
    }

    if(message === '') return

    return (
        <div style={notificationStyles}>
            {message}
        </div>
    )
}

export const NotificationContext = createContext()

export const NotificationProvider = ({children}) =>{
        const [message,setMessage] = useState('')
        const [severity,setSeverity] = useState('success')

        const setNotification = (severity,messange) =>{
            setMessage(messange)
            setSeverity(severity)
        }

        setTimeout(() => {
            setMessage('')
        }, 3000);
        

        return(
            <NotificationContext.Provider value={{setNotification}}>
                <Notification severity={severity} message={message}/>
                    {children}
            </NotificationContext.Provider>
        )
}