import WeatherDisplay from "./components/conditional-rendering";
import MyFirstComponent from "./components/first-component";
import DateDisplay from "./components/first-jsx-component";
import LogicalWeatherDisplay from "./components/logical-conditional-rendering";
import UsernameList from "./components/rendering-arrays-of-data";
import EditUserForms from "./components/rendering-arrays-of-data-2";
import TernaryWeatherDisplay from "./components/ternary-conditional-rendering";
import TodoListTable from "./components/todo-list-table";
import BlogPost from "./props/BlogPost";
import ClickCounter from "./state/ClickCounter";
import EditUser from "./state/EditUser";
import EditUserBetter from "./state/EditUserBetter";
import Users from "./state/Users";
import TodoList from "./todolist/TodoList";
import BetterTodoList from "./todolist_lifted_state/BetterTodoList";

// App is also a function component
function App() {
  const user = {
    _id: "j98f9e89er8",
    username: "freddyo123",
    age: 32,
    email: "freddyo123@mail.com"
  }

  return (
    <div className="App">
      <h1>My first React app</h1>
      <p>Created with <code>npm create-react-app</code></p>

      {/* 
        JS code is specified inside curly braces

        To render a custom component, we must import it and then
        specify the component like we do in HTML.

        Key rules:
        - custom components are self-closing
        - we must specify the forward slash before the closing bracket
      */}
      {/* <MyFirstComponent />
      <TodoListTable />
      <DateDisplay />
      <WeatherDisplay />
      <UsernameList />
      <TernaryWeatherDisplay />
      <LogicalWeatherDisplay />
      <EditUserForms /> */}
      <br /><br /><br /><br />

      {/* passing props 
          - we pass props as attributes
      */}
      {/* <BlogPost title="The blog post" content="The blogs content" /> */}

      {/* STATE */}
      {/* <ClickCounter /> */}
      
      {/* <EditUser user={user} /> */}

      {/* <Users /> */}
      
      {/* <EditUserBetter user={user} /> */}
      {/* <TodoList /> */}

      <BetterTodoList />
    </div>
  );
}

export default App;
