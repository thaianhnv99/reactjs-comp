import {useState} from "react";
import http from 'http'

export function AppChat() {
    const [message, setMessage] = useState<string | null>(null);
    const server = http.createServer()

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(message)

        //Clear messages
        setMessage(null)
    }
    return (<>
        <form style={{
            margin: '0 auto',
            width: '20%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '30vh',
        }} onSubmit={onSubmit}>
            <div style={{
                flex: '1'
            }}>
                <label htmlFor="">abc</label>
            </div>


            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <label>App chat</label>
                <input value={message || ''} onChange={(e)=> setMessage(e.target.value)}/>
            </div>

        </form>
    </>)
}