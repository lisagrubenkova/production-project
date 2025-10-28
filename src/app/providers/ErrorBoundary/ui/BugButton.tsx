import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'

// компонент для тестирования ErrorBoundary

export const BugButton = () => {
  const [error, setError] = useState(false)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])
  return <Button onClick={() => setError(true)}>throw error</Button>
}
