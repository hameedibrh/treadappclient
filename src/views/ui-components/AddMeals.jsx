import React from 'react';
import Alerts from './alert';
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';

function App() {
  return(
    <div className="wrapper">
      <h1>What did you consume today?</h1>
      <form>
      <fieldset>
         <label>
           <p>Food Name</p>
           <input name="name" />
         </label>
       </fieldset>
       <fieldset>
         <label>
           <p>Calories</p>
           <input name="calories" />
         </label>
       </fieldset>
       <fieldset>
         <label>
           <p>Time of Consumption</p>
           <input name="time" />
         </label>
       </fieldset>
       <button type="submit">Add Meal</button>
      </form>
    </div>
  )
}

export default App;