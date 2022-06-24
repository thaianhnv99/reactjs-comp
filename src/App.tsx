import React, {useCallback, useEffect, useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Demo} from "./demo";

function App() {
    const [num, setNum] = useState(0);
    const [numParent, setNumParent] = useState(0);

    console.log('re-render parent')
    const handleChangeNum = useCallback((): number => {
        console.log("I was called!");
        return num + Math.random();
    }, [num]);
    return (
        <div className="App">
            <header className="App-header">
                <Logo logo={logo} isShowMessage={true}></Logo>
                <button onClick={() => setNum(Math.random())}>Triggle pass num to children</button>
                <button onClick={() => setNumParent(Math.random())}>Triggle parent - {numParent}</button>
                <WraperMain changeNum={handleChangeNum}>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </WraperMain>
            </header>
            <input type="text"/>
        </div>
    );
}

export function Logo(props: { logo: string, isShowMessage: boolean }) {
    if (!props.isShowMessage) {
        return null;
    }
    return (
        <>
            {props.logo + '123'}
            <img src={props.logo} alt="logo" className="App-logo"/>
        </>
    )
}

export function WraperMain(props: { children: any , changeNum: () => number}) {
    const [name, setName] = useState(0);
    const [num, setNum] = useState(0);
    const [account, setAccount] = useState({name: '', count: 0});

    console.log('re-render children')
    const [count, setCount] = useState(0);
    const runCount = () => {
        // Làm như này thì sẽ gây ra tình trạng data trả vè ko chính xác
        // setCount(count + 1);

        //Thay vì mình setCount rồi dùng value count để xử lý thì ta viết luôn function trong setCount
        setCount((prevCount) => {
            return prevCount + 1;
        });

        // console.log(count);
    }
    // console.log("child render");

    useEffect(() => {
        setNum(props.changeNum);
    }, [props.changeNum])

    useEffect(() => {
        // console.log('used efect');
        setAccount((prevAcount) => {
            return Object.assign(prevAcount, {name: '12344'});
        })
    }, [count]);

    const toggleHandle = (name: any) => {
        // console.log('abc', name);
        return 12;
    }

    //useReducer
    // const init = (value: any) => {
    //     if (value) {
    //         return {state: value}
    //     }
    //     return undefined
    // }
    //
    // const countReducer = (state: number, action: { type: any; }): {count: number} => {
    //     switch (action.type) {
    //         case 'update':
    //             return {count: state + 1}
    //         case 'clear':
    //             return {count: 0}
    //         default:
    //             throw new Error();
    //     }
    // }
    //
    // const initialState: {count: number} = {count: 0}
    // const handleReducer = () => {
    //     const [state, dispatch] = useReducer(countReducer, initialState);
    // }

    return (
        <>
            <h1>Pass number from parent: {num}</h1>
            <h1>Count: {count}</h1>
            <h3>Count: {account ? <>{account.name}: {account.count}</> : ''}</h3>
            <button onClick={runCount}>Triggle</button>
            <Demo toggle={toggleHandle}></Demo>
            {
                //Khi ta render nos like ntn::
                /**
                 * function demo(callback){
                 *     callback('name', 1, 2, 3, 4, 5) //nó có thể return về rất nhiều, tuy nhiên thì bên kia có hứng giá trị đó hay ko
                 * }
                 *
                 * const toggleHandle = (name: any) => {
                 *         console.log('abc', name)
                 *     }
                 *
                 *
                 * demo(toggleHandle)
                 * //Fill:: abc name
                 */
            }
            {props.children}
        </>
    )
}

export default App;
