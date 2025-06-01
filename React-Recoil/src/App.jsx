// App.jsx

import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { networkAtom, jobsAtom, notificationAtom, messagingAtom, concatinateSelector } from "./Atom";

function App() {
  return (
    <RecoilRoot>
      <Main/>
    </RecoilRoot>
  );
}

function Main(){

  const NetworkCount = useRecoilValue(networkAtom);
  const JobsCount = useRecoilValue(jobsAtom);
  const NotificationCount = useRecoilValue(notificationAtom);
  const MessagingCount = useRecoilValue(messagingAtom);
  const ToatalByConcatinating = useRecoilValue(concatinateSelector);
  return(
    <div>
      <button>Home</button>

      <button>Jobs({JobsCount})</button>
      <button>Network({NetworkCount})</button>
      <button>Notification({NotificationCount})</button>
      <button>Messaging({MessagingCount})</button>

      <button>Me({ToatalByConcatinating})</button>
    </div>
  )
}


export default App;
