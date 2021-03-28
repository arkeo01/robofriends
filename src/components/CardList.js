import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component{
    render() {
        return(
            <div>
                {
                    this.props.robots.map((map, index) => {
                        return (
                            <Card 
                                key={index} 
                                id={this.props.robots[index].id} 
                                name={this.props.robots[index].name} 
                                email={this.props.robots[index].email}    
                            />
                        );
                    })      //Why does puting semicolon here breaks the code
                }
            </div>
        );
    }
}

export default CardList;