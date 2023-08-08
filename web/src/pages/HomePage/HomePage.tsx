import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
  justify-content: space-between;
  align-items: center;
`;
const HomePage = () => {
  return (
    <Container>
     <ArticlesCell />
    </Container>
  )
}

export default HomePage
