import Router from './Router/Router';
import { Provider } from 'react-redux'
import persistedStore from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  const { store, persistor } = persistedStore()
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Router />
      </Provider>
    </PersistGate>
  );
}

export default App;
