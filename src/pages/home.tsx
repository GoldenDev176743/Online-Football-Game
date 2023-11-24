import { useMemo } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import EcommerceMetrix from 'components/cards/EcommerceMetrix';
import BasicTable from 'sections/home/BasicTable';
import makeData from 'data/react-table';

// assets
import Avatar1 from 'assets/images/users/avatar-1.png';
import Avatar2 from 'assets/images/users/avatar-2.png';
import Avatar3 from 'assets/images/users/avatar-3.png';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Home = () => {
  const theme = useTheme();
  const data = useMemo(() => makeData(20), []);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Home</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <EcommerceMetrix
          primary="Player Name"
          secondary="1,500"
          content="Team Name"
          type="Top Hour Goal"
          color={theme.palette.primary.main}
          avatar={Avatar1}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <EcommerceMetrix
          primary="Player Name"
          secondary="1,500"
          content="Team Name"
          type="Top Round Goal"
          color={theme.palette.warning.main}
          avatar={Avatar2}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <EcommerceMetrix
          primary="Player Name"
          secondary="1,500"
          content="Team Name"
          type="Top Season Goal"
          color={theme.palette.error.main}
          avatar={Avatar3}
        />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid item xs={12} md={6} lg={4}>
        <BasicTable title="Hour Ranking" data={data.slice(0, 10)} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BasicTable title="Round Ranking" data={data.slice(0, 10)} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BasicTable title="Season Ranking" data={data.slice(0, 10)} />
      </Grid>
    </Grid>
  );
};

export default Home;
