video 01: simplying wth arraw functions

    const myFunction = (a, b) => ({
        someMethod: ()=>{ doSomthing(); },
        some_property: 'abc'
    });

    the above can be abriviate to:

    const myFunction = (a, b) => ({
        someMethod() { doSomthing(); },  //<-- when a function is defined in an obj
        some_property: 'abc'
    });

video: 11-0:5:20
es6 computered property syntax
``````````````````````````````
    {
        ...state,
        [id]: item( state[action.id], action )
    }





