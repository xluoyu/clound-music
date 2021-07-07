import React, {Suspense} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

function App() {
  return (
    <div id="routerView">
      <Suspense fallback={<div></div>}>
        <Router basename={window.__POWERED_BY_QIANKUN__ ? '/music' : '/'}>
          {renderRoutes(routes)}
        </Router>
      </Suspense>
    </div>
  )
}

export default App