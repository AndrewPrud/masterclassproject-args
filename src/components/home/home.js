import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';

import { Grid } from '@mui/material';
import ROUTES from '../../constants/routes';

export default function Home() {
  const navigate = useNavigate();

  const onLoginListClick = () => {
    navigate(ROUTES.LOGIN);
  };

  const onRepositoryClick = () => {
    window.open(
      'https://github.com/joeyschroeder/code-the-way-project-starter'
    );
  };

  const onDemoSignUpFormClick = () => {
    navigate(ROUTES.SIGN_UP);
  };

  const onStudentListClick = () => {
    navigate(ROUTES.STUDENTS);
  };

  const onWasteListClick = () => {
    navigate(ROUTES.WASTE);
  };

  return (
    <Container>
      <Button variant="contained" onClick={onWasteListClick}>
        Waste
      </Button>
      <Button variant="contained" onClick={onLoginListClick}>
        Login
      </Button>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid item align="center">
            Your meeting has been launched.
          </Grid>
          <Grid item align="center">
            Don&apos;t see your Zoom meeting?
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item align="center">
            By clicking &ldquo;Launch Meeting&rdquo;, you agree to our Terms of
            Service and Privacy Statement
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item align="center">
            <Button variant="contianed">Launch Meeting</Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item align="center">
            <hr />
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid item>xs=8</Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
