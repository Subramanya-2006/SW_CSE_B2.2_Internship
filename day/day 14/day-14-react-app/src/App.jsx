import './App.css'
import ClickDemo from "./components/EventHandlerOne";
import FormDemo from "./components/EventHandlerTwo";
import ActionButtonDemo from "./components/EventHandlerThree";

import SimpleList from "./components/ListAndKeysOne";

import UserListHook from "./components/HookOne";
import ThemeProviderDemo from "./components/HookTwo";

function App() {
  return (
    <>
@@ -15,10 +17,11 @@

      <ActionButtonDemo />

     
      <SimpleList/>

      
      <UserListHook/> */
      <ThemeProviderDemo/>
    </>
  )
}
