// material-ui
import { Grid, Typography, Chip, Breadcrumbs } from '@mui/material';
import Avatar from 'components/@extended/Avatar';

// project import
import MainCard from 'components/MainCard';
import NewCustomers from 'sections/game/NewCustomers';
import Gauge from 'sections/game/Gauge';
import SkillChart from 'sections/game/SkillChart';

// assets
import Avatar1 from 'assets/images/users/avatar-1.png';
import Avatar2 from 'assets/images/users/avatar-2.png';

// ==============================|| SAMPLE PAGE ||============================== //

const Match = () => (
  <Grid container rowSpacing={5} columnSpacing={2.75}>
    <Grid item xs={12} sx={{ mb: -2.25 }}>
      {/* <Typography variant="h5">Match</Typography> */}
      <Breadcrumbs aria-label="breadcrumb">
        <Typography variant="h5">Game</Typography>
        <Typography variant="h5">Match</Typography>
      </Breadcrumbs>
    </Grid>
    <Grid item xs={12} md={12} lg={12}>
      <MainCard>
        <Grid container justifyContent={'space-between'} spacing={2} alignItems="center" sx={{ flexWrap: 'nowrap' }}>
          <Grid item>
            <Avatar size="xl" alt="User 1" src={Avatar1} />
          </Grid>
          <Grid item xs display={{ xs: 'none', md: 'block' }}>
            <Typography align="left" variant="h4">
              Team Name 1
            </Typography>
          </Grid>
          <Grid item>
            <Chip label="123" size="large" color="primary" variant="outlined" />
          </Grid>
          <Grid item>
            <Typography align="center" variant="h4">
              vs
            </Typography>
          </Grid>
          <Grid item>
            <Chip label="178" size="large" color="primary" variant="outlined" />
          </Grid>
          <Grid item xs display={{ xs: 'none', md: 'block' }}>
            <Typography align="right" variant="h4">
              Team Name 2
            </Typography>
          </Grid>
          <Grid item>
            <Avatar size="xl" alt="User 1" src={Avatar2} />
          </Grid>
        </Grid>
      </MainCard>
      <Grid item container>
        <Grid item xs={12} md={6} lg={4}>
          <NewCustomers />
        </Grid>
        <Grid item alignItems={'center'} xs={12} md={6} lg={4}>
          <Gauge />
          <SkillChart />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <NewCustomers />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default Match;
