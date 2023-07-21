import React, { Component } from 'react'
import SectionComponent from './SectionComponent';

const newData = {
    "student": { name: "Vlad" },
    "lector": { name: "Vlada" },
    "mentor": {name: "Olga"}
};
const sections = ["students", "lectors", "mentors"];
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
    addItem = (event) => {
        const {name}=event.target
        this.setState((prevState) => ({
           [name]: {
                ...prevState[name], items: [...prevState[name].items, newData[name.slice(0, name.length - 1)]]
        
            },
        }));
    };
    render() {
        return (
            <>
                {sections.map((section) => (
                    <SectionComponent
                        section={section}
                        key={section}
                        visibility={this.state[section].visibility}
                        items={this.state[section].items}
                        setVisibility={this.setVisibility}
                        addItem={this.addItem}
                    />
                    ))}
            </>
        )
    }
}

export default ClassComponent;