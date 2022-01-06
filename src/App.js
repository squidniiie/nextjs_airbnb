import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
// import './static/Main.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <div className="container my-6 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
        </div>
        <div>
          <div className="text-xl font-medium text-primary">ChitChat</div>
          <p className="text-blue">You have a new message!</p>
          {/* <Tailwindbutton>
            tailwindcss
          </Tailwindbutton>
          <NewButton>
            button
          </NewButton>
        </div>
      </div> */}
    </div>
  );
}
// function Tailwindbutton(props) {
//   return (
//     <button className="bg-primary font-extrabold text-red-50 px-3 py-1 rounded-xl shadow-md hover:bg-red-900">{props.children}</button>
//   )
// }
// function NewButton(props) {
// return (
// <a href="#" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-pink-900">
//   <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-pink-200 to-pink-700"></span>
//   <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
//   <span className="relative text-white"></span>{props.children}</a>


// <a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
//   <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
//   <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
//   <span class="relative text-white">Button Text</span>
// </a>
// )
// }

export default App;
