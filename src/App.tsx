import { CssBaseline } from '@mui/material';
import useStyles from './components/styles.ts';
import { Outlet } from 'react-router-dom';
import {
  NavBar,
  Footer,
} from './components/index.ts';

function App() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
