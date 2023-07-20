import React, { Component } from 'react'
import List from './Lectors';

const newStudent = { name: "Vlad" };
const sections =["students", "lectors"]
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
            },
        }));
    };
    addStudent = () => {
        this.setState((prevState) => ({
            students: {
                ...prevState.student, items: [...prevState.student.items, newStudent]
        
            },
        }));
    };
    render() {
        return (
            <>
                {sections.map((section) => (
                    <section>
                        <button type="button" onClick={this.setVisibility} name={section}>
                            {section[0].toUpperCase + section.slice(1)}
                        </button>
                        {this.state[section].visibility && (
                            <>
                                <List arr={this.state[section].items} />
                                <button type="button" onClick={this.addItem}>
                                    {"Add" + " " + section.slice(0, section.length - 1)}
                                </button>
                            </>
                        )}
                    </section >))}
            </>
        )
    }
}

export default ClassComponent;