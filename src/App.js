import styled from "styled-components";
import { Background } from "./components/background";

function App() {
  return (
    <AppContainer>
      <Background/>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  margin: 0 auto;
  background: #0E1014;
  width: 100%;
  max-width: 1440px;
  height: 100vh;
`

export default App;
