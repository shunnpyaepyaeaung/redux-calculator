import React from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';
import Main from './components/Main';
import { createStore } from 'redux';
import reducer from './components/redux/root/rootReducer';
import {Provider} from 'react-redux';
import './styles.css'

let store = createStore(reducer)

function App() {
    const numbers = ["(",")","%","C","7","8","9","÷","4","5","6","*","1","2","3","-","0",".","=","+"]

    return (
        <Provider store={store}>
        <Container>
            <Input/>
            <Main>
                {
                    numbers.map((e)=>(
                        <Button value={e}/>
                    ))
                }
            </Main>
        </Container>
        </Provider>
    )
}

export default App
