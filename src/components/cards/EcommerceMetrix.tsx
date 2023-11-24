// material-ui
import { Box, Grid, Stack, Typography } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import { GenericCardProps } from 'types/root';
import Avatar from 'components/@extended/Avatar';

// ==============================|| REPORT CARD ||============================== //

interface EcommerceMetrixProps extends GenericCardProps {}

const EcommerceMetrix = ({ primary, secondary, content, avatar, color, type }: EcommerceMetrixProps) => {
  return (
    <MainCard
      content={false}
      sx={{
        bgcolor: color,
        position: 'relative',
        '&:before, &:after': {
          content: '""',
          width: 1,
          height: 1,
          position: 'absolute',
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.0001) 22.07%, rgba(255, 255, 255, 0.15) 83.21%)',
          transform: 'matrix(0.9, 0.44, -0.44, 0.9, 0, 0)'
        },
        '&:after': {
          top: '50%',
          right: '-20px'
        },
        '&:before': {
          right: '-70px',
          bottom: '80%'
        }
      }}
    >
      <Box sx={{ px: 4.5, py: 3 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Stack spacing={2} alignItems="center">
            <Grid item>
              <Avatar size="xl" alt="User 1" src={avatar} />
            </Grid>
            <Typography variant="h4" color="common.white" sx={{ fontWeight: 500 }}>
              {primary}
            </Typography>
          </Stack>
          <Grid item>
            <Stack spacing={1} alignItems="flex-end">
              <Typography variant="h4" color="common.white" sx={{ fontWeight: 500 }}>
                {type}
              </Typography>
              <Typography variant="h2" color="common.white">
                {secondary}
              </Typography>
              <Typography variant="h5" color="common.white" sx={{ fontWeight: 400 }}>
                {content}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
};

export default EcommerceMetrix;
