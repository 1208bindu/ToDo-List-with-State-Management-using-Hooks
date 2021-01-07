import React,{Component} from 'react';
import{createStore} from 'redux'
import { Provider } from 'react-redux'
import DisplayTodoHook from "./DiplayTodoHook";
import imm from './a2.jpg'
import todoReducer from './reducers/todoReducer'

const store = createStore(todoReducer)

class App extends Component
{
    render()
    {
        return (
        <Provider store={store}>
    
        <div className="container">
            <div className="row">
            <div  className="col s12">
                <h3 className="center header orange-text hide-on-small-only"> "If you love life, don't waste time, 
                        for time is what life is made up of"</h3>
            </div>
        </div>
            <div className="row">
               <div className="col m5 s12"><img className="responsive-img im1"  src={imm} alt="To do"/></div>
                <div className="col m7 s12">
                <div className="card pink lighten-3 center"><h2>To Do List</h2></div>
            <DisplayTodoHook />
            </div>
            </div>
        </div>
        </Provider>
        );
    }
}
export default App;




