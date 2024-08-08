import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

type Props = {}

const Page = (props: Props) => {
  const history = useHistory()

  useEffect(() => {
    // Simulate fetching workflows
    const workflows = getWorkflows()

    if (workflows.length > 0) {
      // Redirect to the first workflow
      history.push(`/workflows/${workflows[0].id}`)
    } else {
      // Redirect to create a new workflow
      history.push('/workflows/new')
    }
  }, [history])

  const getWorkflows = () => {
    // Replace this with actual API call or data fetching logic
    return []
  }

  return <div>Loading...</div>
}

export default Page