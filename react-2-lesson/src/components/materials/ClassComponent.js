import React, { Component } from 'react'
import List from './Lectors';

class ClassComponent extends Component {
    state = { 
        students: {
            items: [{ name: "Alex" }, { name: "Nikita" }],
            visibility: false,
        },
        lectors: {
            items: [{ name: "Bob" }, { name: "John" }],
            visibility: false,
        },
        mentors: {
            items: [{ name: "Andrii" }, { name: "Serhii" }],
            visibility: false,
        },   
    }
    setVisibility = (event) => {
        const { name } = event.target;
        this.setState((prevState) => ({
            [name]: {
                ...prevState[name],
                visibility: !prevState[name].visibility,
        },}));
};
    render() {
        return (
            <>
            <section>
                    <button type="button" onClick={this.setVisibility} name="students">Students:</button>
                    {this.state.students.visibility && <List arr={this.state.students.items} />}
            </section>
            <section>
                <button type="button" onClick={this.setVisibility} name="lectors">Lectors:</button>
                    {this.state.lectors.visibility && <List arr={this.state.lectors.items} />}
            </section>
            <section>
                <button type="button"onClick={this.setVisibility} name="mentors">Mentors:</button>
                    {this.state.mentors.visibility && <List arr={this.state.mentors.items} />}
            </section>
        </>
        );
    }
}

export default ClassComponent;