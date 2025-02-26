import AddTodo from "./pages/AddTodo";
import Todos from "./pages/Todos";
import styled from "styled-components";
import { useSelector } from 'react-redux';

const StyledDiv = styled.div`
  padding:0 0 0 30px;
`;

function App() {

  const TotalTodos = useSelector(state => state.todos.todos);
  
  return (
    <StyledDiv>
      <h2>Todo Application</h2>
      <AddTodo TotalTodos={TotalTodos} />
      <Todos TotalTodos={TotalTodos} />
    </StyledDiv>
  );
}

export default App;
