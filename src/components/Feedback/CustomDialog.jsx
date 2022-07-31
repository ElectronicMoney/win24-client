import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { AppContext } from '../../contexts';


export default function CustsomDialog(props) {

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

        <DialogContent dividers={true}>
            {props.children}
        </DialogContent>
      </Dialog>
    </div>
  );
}