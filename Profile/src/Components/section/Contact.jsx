import React, { useState } from 'react';
import { Box, TextField, Button, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReviewonScroll from '../ReviewonScroll';

const getTextFieldSx = (isMultiline = false) => ({
	[isMultiline ? 'textarea' : 'input']: {
		color: 'white',
		backgroundColor: 'transparent !important',
		// Prevent browser autofill from adding a white background
		'&:-webkit-autofill': {
			WebkitBoxShadow: '0 0 0 1000px transparent inset',
			WebkitTextFillColor: 'white',
			transition: 'background-color 5000s ease-in-out 0s',
		},
	},
	'& .MuiOutlinedInput-root': {
		backgroundColor: 'transparent !important',
		'& fieldset': {
			borderColor: 'rgba(255, 255, 255, 0.1)',
			borderWidth: '1px',
			margin: '3px',
		},
		'&:hover fieldset': {
			borderColor: 'rgba(59, 130, 246, 0.5)',
			borderWidth: '1px',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#3b82f6',
			borderWidth: '2px',
		},
	},
	'& .MuiFormLabel-root': {
		color: '#9ca3af',
		'&.Mui-focused': {
			color: '#3b82f6',
		},
	},
});

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 5000);
		setFormData({ name: '', email: '', message: '' });
	};

	return (
		<Box
			id="contact"
			className="relative flex min-h-screen items-center justify-center py-20"
		>
			<ReviewonScroll>
				<Box className="mx-auto w-full max-w-4xl px-4">
					<h2 className="mb-7 flex items-center justify-center bg-linear-to-r from-blue-500 to-green-400 bg-clip-text text-4xl font-bold text-transparent">
						Contact Me
					</h2>
					<p className="mx-auto mb-10 max-w-xl text-center text-gray-400">
						Have a project in mind, a question, or just want to say
						hi? Feel free to reach out using the form below or via
						my direct contacts.
					</p>

					<Box className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{/* Contact Info Side */}
						<Box className="space-y-6 rounded-xl border border-white/10 bg-white/5 p-6 md:col-span-1">
							<h3 className="mb-4 text-xl font-bold text-white">
								Let's Connect
							</h3>

							<div className="flex items-center gap-4 text-gray-400">
								<EmailIcon color="primary" />
								<span className="text-sm">
									shelsmilus@gmail.com
								</span>
							</div>

							<div className="flex items-center gap-4 text-gray-400">
								<PhoneIcon color="primary" />
								<span className="text-sm">
									+234 807 903 1123
								</span>
							</div>

							<div className="flex items-center gap-4 text-gray-400">
								<LocationOnIcon color="primary" />
								<span className="text-sm">
									Remote / Worldwide
								</span>
							</div>

							{/* Social Media Links Row */}
							<div className="flex items-center gap-2 border-t border-white/10 pt-2">
								<IconButton
									component="a"
									href="https://www.linkedin.com/in/osbert-o-510238269/"
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										color: '#0a66c2',
										'&:hover': {
											backgroundColor:
												'rgba(10, 102, 194, 0.1)',
										},
									}}
									aria-label="LinkedIn Profile"
								>
									<LinkedInIcon />
								</IconButton>
								<IconButton
									component="a"
									href="https://github.com/shelsmilus"
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										color: '#ffffff',
										'&:hover': {
											backgroundColor:
												'rgba(255, 255, 255, 0.1)',
										},
									}}
									aria-label="GitHub Profile"
								>
									<GitHubIcon />
								</IconButton>
							</div>
						</Box>

						{/* Contact Form Side */}
						<Box className="rounded-xl border border-white/10 bg-white/5 p-6 md:col-span-2">
							{submitted ? (
								<Box className="flex h-full flex-col items-center justify-center py-12 text-center">
									<h4 className="mb-2 text-xl font-bold text-green-400">
										Message Sent!
									</h4>
									<p className="text-sm text-gray-400">
										Thank you for reaching out. I'll get
										back to you shortly.
									</p>
								</Box>
							) : (
								<form
									onSubmit={handleSubmit}
									className="space-y-4"
								>
									<TextField
										fullWidth
										label="Your Name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										variant="outlined"
										//InputLabelProps={inputLabelProps}
										sx={getTextFieldSx()}
									/>
									<TextField
										fullWidth
										label="Your Email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
										required
										variant="outlined"
										//InputLabelProps={inputLabelProps}
										sx={getTextFieldSx()}
									/>
									<TextField
										fullWidth
										label="Your Message"
										name="message"
										multiline
										rows={4}
										value={formData.message}
										onChange={handleChange}
										required
										variant="outlined"
										//InputLabelProps={inputLabelProps}
										sx={getTextFieldSx(true)}
									/>
									<Button
										type="submit"
										variant="contained"
										endIcon={<SendIcon />}
										fullWidth
										sx={{
											py: 1.5,
											backgroundColor: '#3b82f6',
											fontWeight: 'bold',
											'&:hover': {
												backgroundColor: '#2563eb',
											},
										}}
									>
										Send Message
									</Button>
								</form>
							)}
						</Box>
					</Box>
				</Box>
			</ReviewonScroll>
		</Box>
	);
};

export default Contact;
