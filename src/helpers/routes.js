const serverUrl = 'http://localhost:3004'

export const toDoItemsApiUrl = id =>
  id ? `${serverUrl}/tasks/${id}` : `${serverUrl}/tasks`