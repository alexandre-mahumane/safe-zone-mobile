import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

// Example API functions
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  return response.json()
}

const fetchUser = async (id: number): Promise<User> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }
  return response.json()
}

const createUser = async (user: CreateUserData): Promise<User> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  if (!response.ok) {
    throw new Error('Failed to create user')
  }
  return response.json()
}

// Types
export interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

export interface CreateUserData {
  name: string
  email: string
  phone: string
  website: string
}

// Query Keys
export const queryKeys = {
  users: ['users'] as const,
  user: (id: number) => ['users', id] as const,
}

// Hooks
export const useUsers = () => {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: fetchUsers,
  })
}

export const useUser = (id: number) => {
  return useQuery({
    queryKey: queryKeys.user(id),
    queryFn: () => fetchUser(id),
    enabled: !!id,
  })
}

export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate and refetch users list
      queryClient.invalidateQueries({ queryKey: queryKeys.users })
    },
  })
}
