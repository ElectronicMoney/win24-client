import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { purple } from '@mui/material/colors';


export default function PaperDialog(props) {



  const descriptionElementRef = React.useRef(null);
  
  React.useEffect(() => {
    if (props.open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props.open]);

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={(event, reason) => props.handleClose(event, reason)}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
        disableEscapeKeyDown
      >
        <DialogTitle id="scroll-dialog-title"
        sx={{
          background:`${props.color}` || `${purple[900]}`, 
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
          {props.dialogActions()}
        </DialogActions>
      </Dialog>
    </div>
  );
}
