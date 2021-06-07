export type Notify = {
  type: 'info' | 'success' | 'warning' | 'error' | 'default' | 'dark'
  message: string
  duration: number
}
