import './App.css'
import { CakeView } from "./features/cake/CakeView";
import { CookieView } from './features/cookie/CookieView';
import { UserView } from './features/user/UserView';

function App() {
  return (
    <>
      <CakeView />
      <CookieView />
      <UserView />  
    </>
  )
}

export default App
