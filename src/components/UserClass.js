import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        };
    }

    render(){
        const{name,location} = this.props;
        const{count} = this.state;
        return(
            <div className = "user-card">
                <h1>Count : {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>count increase</button>
                <h2>name = {name}</h2>
                <h4>location =  {location}</h4>
                <h4>mail = yashwanth24710@gmail.com</h4>
            </div>
        )
    }     
};

export default UserClass