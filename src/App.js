import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserContainer from "./components/UserContainer";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Provider store={store}>
          <UserContainer />
      </Provider>
    </Layout>
  );
}

export default App;
