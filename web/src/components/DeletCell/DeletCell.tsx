import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import type { DeletePostMutationVariables } from 'types/graphql'
import { QUERY } from 'src/components/Post/PostsCell'
import Button from '@mui/material/Button';
import { navigate, routes } from '@redwoodjs/router'
const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`


const DeletCell = ({id}) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeletePostMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
      navigate(routes.home());
    }
  }
  return (
    <Button
    color="error"
    onClick={() => onDeleteClick(id)}
  >
    Delete
  </Button>
  )
}

export default DeletCell
