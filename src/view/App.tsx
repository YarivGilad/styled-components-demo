//------------------------------
//          Phase 1
//------------------------------
// import { Component } from "react";
// import { TopBar } from "./TopBar";
// import { UserInput } from "./UserInput";
// import { Books } from "./Books";
// import { Customers } from "./Customers";
// import { Employees } from "./Employees";

// export class App extends Component {
//   // state = {
//   //   booksCount: 6,
//   //   customersCount: 0,
//   //   employeesCount: 0,
//   // };

//   render() {
//     return (
//       <div className="app">
//         <TopBar>
//           <h1>Hello State</h1>
//         </TopBar>
//         <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
//         <Books />
//         <Customers />
//         <Employees />
//         <br />
//         <hr />
//         <UserInput
//           question="What is your name?"
//           placeholder="Your name here..."
//         />
//       </div>
//     );
//   }
// }

//------------------------------
//          Phase 2
//------------------------------

import { TopBar } from "./TopBar";
import { UserInput } from "./UserInput";
import { Counter } from "./Counter";

export const App = () => (
  <div className="app">
    <TopBar>
      <h1>React state </h1>
    </TopBar>
    <h1 className="headline white-text"> {"<<<< Stateful Bookstore >>>>"}</h1>
    <Counter item="Book" initial={6} />
    <Counter item="Customer" initial={2} />
    <Counter item="Employee" initial={1} />
    <br />
    <hr />
    <UserInput
          question="What is your name?"
          placeholder="Your name here..."
        />
  </div>
);
