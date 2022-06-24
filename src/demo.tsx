/**
 * Khai báo 1 hàm toggle return void
 * @param toggle
 * @constructor
 */
import {useRef, useState} from "react";

export function Demo({toggle}: {toggle: (name: string, title: string) => {}}){ //Là một function và return void
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
        obj.current = obj.current + 1
    }
    // console.log(toggle)
    const refInput = useRef(null) as any;
    const obj = {current: 0};
    console.log(refInput);
    console.log(obj);
return (
    <>
    <h1>DEMO---</h1>
    <div onClick={(e) => { //Khi user click thì nó sẽ excuse function toggle()
        toggle('name', '123'); //Thời điểm click nó sẽ excuse function toggle() -> khi đó ta sẽ hiểu là fn toggle() đã được thực thi
    }}>toggle</div>

        <h5>useRef</h5>
        <input type="text" ref={refInput}/>
        <button onClick={() => refInput.current && (refInput.current.value = refInput.current.value + 'a')}>triggle set value</button>
        <button onClick={() => handleCount()}>triggle to render</button>
    </>
)}
/**
 * -> Hiểu đơn giản là khi App.tsx render thì nó sẽ chuyển hết về dạng object
 * lúc này 2 file như 2 function -> khi đó việc click excuse sẽ giống như đang run function toggle
 * Vaf mình truyền vào trong hàm đó là gì ~ là 1 param ok
 */