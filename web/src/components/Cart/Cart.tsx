import  React from 'react';
import type {FC} from "React";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from "src/components/EditDialog/EditDialog"
import { Link, routes } from '@redwoodjs/router';
import { FindPostById } from 'types/graphql';
import styled from "@emotion/styled";
import { Stack } from '@mui/system';
import DeletCell from '../DeletCell/DeletCell';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;
interface Props {
  post: NonNullable<FindPostById['post']>
}
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <>
  </>
);

const OutlinedCard = ({post}:Props) => {
  return (
    <Box sx={{ minWidth: 320 , maxWidth:967 , margin: "10px" }}>
      <Card variant="outlined"  >

      <CardContent>
        <StyledLink to={routes.post({ id: post.id})}>
        <Typography variant="h5" component="div">
         {post.title}
          </Typography>
        </StyledLink>

      <Typography variant="body2">
        {post.body}
      </Typography>
    </CardContent>
    <Stack direction="row" >
     <Dialog id={post.id}/>
     <DeletCell id={post.id} />
    </Stack>


      </Card>
    </Box>
  );
}
export default OutlinedCard


