import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-width: 960px;
  color: #fff;
  justify-content: space-between;
  align-items: center;
`;
import type { EditPostById, UpdatePostInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'
import { Button } from '@mui/base'
import { Stack } from '@mui/system'

type FormPost = NonNullable<EditPostById['post']>

interface PostFormProps {
  post?: EditPostById['post']
  onSave: (data: UpdatePostInput, id?: FormPost['id']) => void
  error: RWGqlError
  loading: boolean
  handleClose: ()=> void
}

const PostForm = (props: PostFormProps  ) => {
  const onSubmit = (data: FormPost) => {
    props.onSave(data, props?.post?.id)
  }

  return (
    <Container>
      <Form<FormPost> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          style={{minWidth: "320px"}}
          name="title"
          defaultValue={props.post?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>

        <TextAreaField
        style={{minWidth: "320px" , minHeight: "70px" , overflowY: "scroll"}}
          name="body"
          defaultValue={props.post?.body}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="body" className="rw-field-error" />

        <Stack direction="row" justifyContent="space-between" marginTop="5px">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
          <Button onClick={props.handleClose}>Cancel</Button>
        </Stack>
      </Form>
    </Container>
  )
}

export default PostForm
