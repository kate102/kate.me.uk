console.log('App.js is running');

// JSX Javascripit synatx extension
// Provided my React
var template =  (
    <div>
        <h1>Kates App</h1>
        <h2>Education</h2>
        <h2>Work Experience</h2>
        <h2>Roles and Responsibilites</h2>
        <h2>Hobbies</h2>
    </div>
)
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);