import React from "react";

const Header = ({ course }) => {
    return <h1>{course}</h1>;
};

const Part = ({ part }) => {
    return (
        <div>
            <p>
                {part.name} {part.exercises}
            </p>
        </div>
    );
};

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => (
                <Part part={part} key={part.id} />
            ))}
        </div>
    );
};

const Total = ({ parts }) => {
    const total = parts.reduce(
        (sum, currentPart) => sum + currentPart.exercises,
        0
    );
    return (
        <div>
            <strong>Number of exercises {total}</strong>
        </div>
    );
};

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

export default Course;
