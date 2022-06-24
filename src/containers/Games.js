import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppLayout from "../layouts/AppLayout"
import Typography from '@mui/material/Typography';
import { AppContext } from '../contexts';
import Dialogue from '../components/Feedback/Dialogue'
import {ErrorBoundary} from '../errors/ErrorBandary'



function App() {

  const {counter, dialogue} = useContext(AppContext)

    
  return ( 
    <React.Fragment>
      <CssBaseline />
        <ErrorBoundary>
            <AppLayout>
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                </Typography>

                <div>
                    Count: {counter.count}

                    <Dialogue title="Test Dialogue">
                        <span>Testing the Dialogue</span>
                    </Dialogue>

                    <button onClick={() => dialogue.openDialogue()}>Dialogue</button>

                </div>

                <button onClick={() => counter.resetCounter(0)}> Reset</button>
                <button onClick={() => counter.incrementCounter()}>+</button>
                <button onClick={() => counter.decrementCounter()}>-</button>
            </AppLayout>
        </ErrorBoundary>
      </React.Fragment>
   );
}

export default App;