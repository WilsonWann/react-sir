import { addTodo, updateTodo, deleteTodo } from '../api/todosApi'

export const addMutation = async (newTodo, todos) => {
  const added = await addTodo(newTodo)
  return [...todos, added].sort((a, b) => b.userId - a.userId)
}

export const addTodoOptions = (newTodo, todos) => {
  return {
    optimisticData: [...todos, newTodo].sort((a, b) => b.userId - a.userId),
    rollbackOnError: true,
    populateCache: true,
    revalidate: false
  }
}

export const updateMutation = async (updatedTodo, todos) => {
  const updated = await updateTodo(updatedTodo)

  return todos
    .map((todo) => {
      if (todo.userId === updated.userId) {
        return updated
      }
      return todo
    })
    .sort((a, b) => b.userId - a.userId)
}

export const updateTodoOptions = (updatedTodo, todos) => {
  return {
    optimisticData: todos
      .map((todo) => {
        if (todo.userId === updatedTodo.userId) {
          return updatedTodo
        }
        return todo
      })
      .sort((a, b) => b.userId - a.userId),
    rollbackOnError: true,
    populateCache: true,
    revalidate: false
  }
}
