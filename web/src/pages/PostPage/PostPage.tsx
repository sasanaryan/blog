import styled from "@emotion/styled";
import ArticleCell from 'src/components/ArticleCell'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
  justify-content: space-between;
  align-items: center;
`;
const PostPage = ({id}) => {
  return (
    <Container>
    <ArticleCell id={id} />
   </Container>
  )
}

export default PostPage
