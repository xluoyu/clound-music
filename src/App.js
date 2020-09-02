import React, {Suspense} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

function App() {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Router>
          {renderRoutes(routes)}
        </Router>
      </Suspense>
    </div>
  )
}

export default App