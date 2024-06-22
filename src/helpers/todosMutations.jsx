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
