import React, { FC, ReactElement } from 'react';
import './App.css';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import { store, persistor, PersistGate, localsagas } from "./configStore";
import { initSagaMiddleware } from "@rihenhouli/ttcsm_global-state";
export type Props = {};
initSagaMiddleware(localsagas);
const StoreWrapper: FC<{ children: ReactElement }> = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);
const App : React.FC<Props> = () => {
  return(
    <StoreWrapper>
    <Main />
  </StoreWrapper>)
}

export default App;
