import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";

// Lazy load Counter component for better performance
const Counter = React.lazy(() => import("./Module4/ReduxToolkit/Counter"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please refresh the page.</h2>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>React Redux Counter App</h1>
        {/* Error Boundary to catch unexpected errors */}
        <ErrorBoundary>
          {/* Suspense for lazy loading */}
          <Suspense fallback={<p>Loading Counter...</p>}>
            <Counter />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Provider>
  );
}

export default App;
