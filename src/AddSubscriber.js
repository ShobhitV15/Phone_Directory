import React,{Component} from "react";
import Header from "./Components/Header";
import "./Components/AddSubscriber.css"
import {Link} from 'react-router-dom';

class AddSubscriber extends Component{
    constructor(){
        super();
        this.state={
            id:0,
            name:'',
            phone:''
        }
    }
    inputChnagedHandler=(e)=>{
        const state=this.state;
        state[e.target.name]= e.target.value;
            this.setState(state);
            console.log(this.state);
    }
    onFormSubmitted=(e)=>{
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id: 0 , name: '', phone: ''});
        this.setState.history.push("/");
    }
    render(){
        const {name,phone}=this.state;
        return(
            <div>
                <Header header="Add Subscriber"/>
                <div className="component-body-container">
                   <Link to="/addSubscriber"> <button className="custom-btn">
                        Back
                    </button></Link>
                    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-control">Name :</label><br/>
                        <input id="name" type="text" className="input-control" name="name" onChange={this.inputChnagedHandler}/><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone :</label><br/>
                        <input id="phone" type="number" className="input-control" name="phone" onChange={this.inputChnagedHandler}/><br/><br/>
                        <div className="subscriber-info-conatiner">
                            <span className="subscriber-to-add-heading">
                                Subscriber to be added:
                            </span>
                            <br/>
                            <span className="subscriber-info">
                                Name : {name}
                            </span>
                            <br/>
                            <span className="subscriber-info">
                                Phone :{phone}
                            </span>
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddSubscriber;
