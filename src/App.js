import React from 'react'
class App extends React.Component {
  componentDidMount(){this.handleAddTimer}
  render() {
    return (
      <div>
        <Timer />
      </div>
    )}
}
