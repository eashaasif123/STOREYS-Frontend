'use client'
import React, { useState } from 'react'
import LoginImage from '@/app/assets/login.png'
import Link from 'next/link'
import Logo from "@/app/assets/logo.png"
import Image from 'next/image'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios"
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

export default function Login() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [stsID, setSTSID] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(true)
    const [showPassword, setShowPassword] = React.useState(false);
    const router = useRouter()

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/api/register?STSID=${stsID}&password=${password}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response)
            router.push('/dashboard/admin');
            toast.success('Login successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            toast.error(error?.response?.data?.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <div>
            <div className='flex justify-center items-center pr-3 md:px-7 md:pt-10'>
                <div className='bg-gray-100 w-[57%] py-10 hidden md:flex md:justify-center rounded-2xl'>
                    <Image className='w-[70%] h-[auto] rounded-3xl' src={LoginImage} alt="login" />
                </div>
                <div className='flex-1 text-gray-700 w-[40%] ml-3 md:ml-10'>
                    <Image className='w-[70%] h-[auto] rounded-3xl mb-10 pt-5 md:hidden' src={Logo} alt="logo" />
                    <h1 className='text-3xl md:text-4xl font-medium'>Welcome to STOREYS! <span className="hidden md:inline">👋🏻</span></h1>
                    <p className='mt-3 mb-4 text-gray-500'>Please sign-in to your account and start the adventure</p>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField onChange={(e) => { setSTSID(e.target.value) }} id="outlined-basic" label="STS ID" variant="outlined" className="mt-3" value={stsID} />
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" className="mt-6">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    value={password}
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
                        <Button onClick={handleSubmit} className="bg-[#902bf5] w-[100%] h-[30px] text-white py-6 mt-7" variant="text">Sign In</Button>
                    </Stack>
                    <div className="flex justify-center mt-4">
                        <p>New on Our Platform? </p>

                        <Link href="/register">
                            <span className="text-[#902bf5] ml-3">Create an account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}