import { useEffect, useState, SyntheticEvent } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material-ui
import {
  Autocomplete,
  Box,
  Button,
  createFilterOptions,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  ListItemText,
  MenuItem,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import axios from 'utils/axios';

// types
import { StringColorProps } from 'types/password';
import { TeamInfoProps } from 'types/teaminfo';

// assets
import { EyeOutlined, EyeInvisibleOutlined, DownOutlined } from '@ant-design/icons';

const filter = createFilterOptions<string>();

const AllGender = ['Male', 'Female'];
const AllTeams = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

// ============================|| JWT - REGISTER ||============================ //

const AuthRegister = () => {
  const { register } = useAuth();
  const scriptedRef = useScriptRef();
  const navigate = useNavigate();

  const [level, setLevel] = useState<StringColorProps>();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

  const [teamName, setTeamName] = useState<string[]>(['']);
  const [teamInfo, setTeamInfo] = useState<TeamInfoProps[]>([{ _id: '', name: '', division: '' }]);

  useEffect(() => {
    const fetchTeamInfo = async () => {
      const response = await axios.get('api/v1/team');
      setTeamInfo(response.data[0].teams);
      setTeamName(response.data[0].teams.map((team: TeamInfoProps) => team.name));
    };

    fetchTeamInfo();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          username: '',
          gender: '',
          email: '',
          teamname: '',
          password: '',
          sound: true,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required('Username is required'),
          gender: Yup.string().max(255).required('Gender is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          teamname: Yup.string().required('Team is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            const team_id = teamInfo.filter((team) => team.name.includes(values.teamname))[0]._id;
            await register(values.username, values.gender, values.email, team_id, values.password, values.sound);
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
              dispatch(
                openSnackbar({
                  open: true,
                  message: 'Your registration has been successfully completed.',
                  variant: 'alert',
                  alert: {
                    color: 'success'
                  },
                  close: false
                })
              );

              setTimeout(() => {
                navigate('/login', { replace: true });
              }, 1500);
            }
          } catch (err: any) {
            console.error('error----------------->', err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err[0].message });
              setSubmitting(false);
              // dispatch(
              //   openSnackbar({
              //     open: true,
              //     message: err[0].message,
              //     variant: 'alert',
              //     alert: {
              //       color: 'error'
              //     },
              //     close: false
              //   })
              // );
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, getFieldProps, setFieldValue, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="username-signup">User Name</InputLabel>
                  <OutlinedInput
                    id="username-login"
                    type="username"
                    value={values.username}
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.username && errors.username)}
                  />
                  {touched.username && errors.username && (
                    <FormHelperText error id="helper-text-username-signup">
                      {errors.username}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={5}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="gender">Gender</InputLabel>
                  <FormControl fullWidth>
                    <Select
                      id="column-hiding"
                      displayEmpty
                      {...getFieldProps('gender')}
                      onChange={(event: SelectChangeEvent<string>) => setFieldValue('gender', event.target.value as string)}
                      input={<OutlinedInput id="select-column-hiding" placeholder="Sort by" />}
                      renderValue={(selected) => {
                        if (!selected) {
                          return <Typography variant="subtitle1">--------------</Typography>;
                        }

                        return <Typography variant="subtitle2">{selected}</Typography>;
                      }}
                    >
                      {AllGender.map((column: any) => (
                        <MenuItem key={column} value={column}>
                          <ListItemText primary={column} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {touched.gender && errors.gender && (
                    <FormHelperText error id="standard-weight-helper-text-email-login" sx={{ pl: 1.75 }}>
                      {errors.gender}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">Email Address</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="demo@company.com"
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-signup">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      changePassword(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="secondary"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="******"
                    inputProps={{}}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="helper-text-password-signup">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={8}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="teamname">Team</InputLabel>
                  <Grid item xs={12}>
                    <Autocomplete
                      fullWidth
                      value={values.teamname}
                      disableClearable
                      onChange={(event, newValue) => {
                        const teamExist = teamName.includes(newValue);
                        if (!teamExist) {
                          const matchData = newValue.match(/"((?:\\.|[^"\\])*)"/);
                          setFieldValue('teamname', matchData && matchData[1]);
                        } else {
                          setFieldValue('teamname', newValue);
                        }
                      }}
                      filterOptions={(options, params) => {
                        const filtered = filter(options, params);
                        const { inputValue } = params;
                        const isExisting = options.some((option) => inputValue === option);
                        if (inputValue !== '' && !isExisting) {
                          filtered.push(`Add "${inputValue}"`);
                        }
                        return filtered;
                      }}
                      selectOnFocus
                      clearOnBlur
                      autoHighlight
                      handleHomeEndKeys
                      id="free-solo-with-text-demo"
                      options={teamName}
                      getOptionLabel={(option: string) => {
                        let value = option;
                        const jobExist = AllTeams.includes(option);
                        if (!jobExist) {
                          const matchData = option.match(/"((?:\\.|[^"\\])*)"/);
                          if (matchData && matchData[1]) value = matchData && matchData[1];
                        }
                        return value;
                      }}
                      renderOption={(props, option) => {
                        return (
                          <Box component="li" {...props}>
                            {option}
                          </Box>
                        );
                      }}
                      freeSolo
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="team_id"
                          error={touched.teamname && Boolean(errors.teamname)}
                          helperText={touched.teamname && errors.teamname && errors.teamname}
                          placeholder="Select Team"
                          InputProps={{
                            ...params.InputProps,
                            // sx: { bgcolor: 'grey.0' },
                            endAdornment: (
                              <InputAdornment position="end">
                                <DownOutlined />
                                {/* <ArrowDropDown sx={{ color: 'text.primary' }} /> */}
                              </InputAdornment>
                            )
                          }}
                        />
                      )}
                    />
                  </Grid>
                  {/* {errors.teamname && (
                    <FormHelperText error id="standard-weight-helper-text-email-login" sx={{ pl: 1.75 }}>
                      {errors.teamname}
                    </FormHelperText>
                  )} */}
                </Stack>
              </Grid>
              <Grid item xs={12} md={4} alignSelf={'center'}>
                <FormControlLabel
                  control={<Switch sx={{ mt: 0 }} checked={values.sound} {...getFieldProps('sound')} />}
                  label="Sound"
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  By Signing up, you agree to our &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Terms of Service
                  </Link>
                  &nbsp; and &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Privacy Policy
                  </Link>
                </Typography>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="shadow" color="primary">
                    Create Account
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthRegister;
