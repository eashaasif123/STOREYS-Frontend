'use client'
import React, { useState } from 'react'
import Login from '@/app/assets/login.png'
import Logo from "@/app/assets/logo.png"
import Image from 'next/image'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import link from 'next/link'

const Page = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [rememberMe, setRememberMe] = useState(true)
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className='flex justify-center items-center px-7 pt-10'>
                <div className='bg-gray-100 w-[57%] py-10 hidden md:flex md:justify-center rounded-2xl'>
                    <Image className='w-[70%] h-[auto] rounded-3xl' src={Login} alt="login" />
                </div>
                <div className='flex-1 text-gray-700 w-[40%] ml-10'>
                    <h1 className='text-4xl font-medium'>Welcome to STOREYS! 👋🏻</h1>
                    <p className='mt-3 mb-4 text-gray-500'>Please sign-in to your account and start the adventure</p>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Email" variant="outlined" className="mt-3" />
                        </Box>
                        {/* <input className='block mt-1 w-[100%] py-2 px-3 rounded-lg outline-[#902bf5]' style={{ border: "1px solid #ccc", borderRadius: "6px" }} type='text' id="email" placeholder='Email Address' /> */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" className="mt-6">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    className="mt-6"
                                />
                            </FormControl>
                        </Box>
                    </div>
                    <div className="flex justify-between items-center mt-6 mb-5">
                        <div className="flex items-center">
                            <Checkbox {...label} /> <span className="text-[#902bf5]">Remember Me</span>
                        </div>
                        <p className="text-[#902bf5]">Forget Password?</p>
                    </div>
                    <Stack spacing={2} direction="row">
                        <Button className="bg-[#902bf5] w-[100%] h-[30px] text-white py-6 mt-7" variant="text">Text</Button>
                    </Stack>
                    <div className="flex justify-center mt-4">
                        <p>New on Our Platform? </p>
                        <a href="/" className="text-[#902bf5] ml-3">Create and account</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page