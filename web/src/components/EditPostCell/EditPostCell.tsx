
import type { EditPostById, UpdatePostInput } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PostForm from 'src/components/Post/PostForm'
export const QUERY = gql`
query EditPostById($id: Int!) {
  post: post(id: $id) {
    id
    title
    body
    createdAt
  }
}
`
const UPDATE_POST_MUTATION = gql`
mutation UpdatePostMutation($id: Int!, $input: UpdatePostInput!) {
  updatePost(id: $id, input: $input) {
    id
    title
    body
    createdAt
  }
}
`


export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)
interface SuccessProps extends CellSuccessProps<EditPostById> {id: number
   handleClose: () => void }

export const EditPostCell = ({ post ,id,handleClose }: SuccessProps) => {
  const [updatePost, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post updated')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdatePostInput, id: EditPostById['post']['id']) => {
    updatePost({ variables: { id, input } })
    handleClose()
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Post
        </h2>
      </header>
      <div className="rw-segment-main">
        <PostForm post={post} handleClose={handleClose} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}

export default EditPostCell