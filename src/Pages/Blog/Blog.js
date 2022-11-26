import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto md:block hidden'>
            <div className='text-center m-2'>
                <h1 className='text-3xl font-semibold m-3'>What are the different ways to manage a state in a React application?</h1>
                <p className='text-xl font-normal'>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.

                    svg viewer

                    The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:</p>

            </div>
            <div className='text-center m-2'>
                <h1 className='text-3xl font-semibold m-3'>How does prototypical inheritance work?</h1>
                <p className='text-xl font-normal'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

            </div>
            <div className='text-center m-2'>
                <h1 className='text-3xl font-semibold m-3'>What is a unit test? Why should we write unit tests?</h1>
                <p className='text-xl font-normal'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>

            </div>
            <div className='text-center m-2'>
                <h1 className='text-3xl font-semibold m-3'>React vs. Angular vs. Vue?</h1>
                <p className='text-xl font-normal'>The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                    Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                    Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.</p>

            </div>
        </div>
    );
};

export default Blog;