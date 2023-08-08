import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import EditPostCell from 'src/components/Post/EditPostCell';
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  color: #fff;
  justify-content: space-between;
  align-items: center;
`;

const EditDialog = ({id}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Button variant="text" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <EditPostCell id={id} handleClose={handleClose} />
      </Dialog>
    </Container>
  );
}

export default EditDialog