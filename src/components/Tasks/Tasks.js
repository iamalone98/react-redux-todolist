import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, useParams } from 'react-router-dom'
import Task from './Task'

const Tasks = ({ tasks }) => {
  const { id } = useParams();
  return (
    <div className="todo__tasks">
      <h1>{id}</h1>
      <Switch>
        <Route exact path="/">
          {tasks && tasks.map((item) => (
            <Task key={item.id} id={item.id} items={item.tasks} color={item.color} text={item.text} />
          ))}
        </Route>
        <Route exact path="/:id" children={({ match }) => {
          return (
            tasks && tasks.map((item) => {
              if (+match.params.id === +item.id) {
                return (
                  <Task key={item.id} id={item.id} items={item.tasks} color={item.color} text={item.text} />
                )
              }

              return null
            })
          )
        }}>
        </Route>
      </Switch>
    </div>
  )
}

const mapState = (state) => ({
  tasks: state.appReducer.goals
})

export default connect(mapState)(Tasks)
