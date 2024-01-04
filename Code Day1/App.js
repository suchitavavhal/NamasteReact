    // creating element is a job of react
    const heading = React.createElement("h1", {id: 'title'}, "Namaste React");
    console.log(heading)   //returns object

    const parent= React.createElement('div', {id: 'parent'}, 
    [React.createElement('div', {id: 'child'}, [
        React.createElement('h1', {}, 'H1 tag of child 1'),
        React.createElement('h2', {className: 'h2style'}, 'H2 tag of child 1')
    ]),
    React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', {}, 'H1 tag of child 2'),
        React.createElement('h2', {className: 'h2style'}, 'H2 tag of child 2')] )]);


    // creating root is a job of react-dom
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(parent);
    // root.render replaces the code which is already there inside root and it will not append it