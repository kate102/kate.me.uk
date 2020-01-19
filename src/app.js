console.log('App.js is running');

// JSX Javascripit synatx extension
// Provided my React

const appOutline = {
    appTitle: 'Kates App',
    appSubtitle1: 'Education',
    appSubtitle2: 'Work Experience',
    appSubtitle3: 'Roles and Responsibilites',
    appSubtitle4: 'Hobbies'
}



var template =  (
    <div>
        <h1>{appOutline.appTitle}</h1>
        <h2>{appOutline.appSubtitle1}</h2>
        <h2>{appOutline.appSubtitle2}</h2>
        <h2>{appOutline.appSubtitle3}</h2>
        <h2>{appOutline.appSubtitle4}</h2>
    </div>
)
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);