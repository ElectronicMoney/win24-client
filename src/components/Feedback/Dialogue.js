import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { AppContext } from '../../contexts';


export default function PaperDialog(props) {

  const { dialogue } = React.useContext(AppContext)



  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (dialogue.open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [dialogue.open]);

  return (
    <div>
      <Dialog
        open={dialogue.open}
        onClose={dialogue.closeDialogue}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
        disableEscapeKeyDown
      >
        <DialogTitle id="scroll-dialog-title"
        sx={{
          background:`${props.color}`, 
          textAlign:"center", 
          color:"#fff", 
          fontWeight:600,
          textTransform:"uppercase",
          fontSize: "18px"
        }}
        >
          {props.title}
        </DialogTitle>
        <DialogContent dividers={true}>
            {props.children}
        </DialogContent>
        <DialogActions>
          {/* <Fab onClick={dialogue.closeDialogue} size="medium" color="primary" aria-label="cancel">
            <CloseIcon />
          </Fab> */}
          {props.dialogActions()}

        </DialogActions>
      </Dialog>
    </div>
  );
}
