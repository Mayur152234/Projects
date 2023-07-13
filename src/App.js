import React from 'react';
import Board from './components/Board';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

const App = () => {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <ErrorBoundary>
        <Board />
      </ErrorBoundary>
    </div>
  );
};

export default App;
