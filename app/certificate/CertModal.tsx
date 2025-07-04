'use client';

import { Box, Button, Typography } from '@mui/material';
import CustomModal from '../components/CustomModal';
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

interface CertModalProps {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CertModal({ open, setOpen }: CertModalProps) {
	const router = useRouter();
	const closeModal = () => {
		setOpen(false);
		router.push('/');
	};

	return (
		<CustomModal onClose={closeModal} backgroundImage='/img/modal_cert_back_img.svg'
			width='80%' height='40rem'>
			<Box sx={{ width: '100%', height: '35rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
				<Button
					variant='contained'
					sx={{ width: '90%', backgroundColor: '#DBD9CA', color: 'black', padding: '0.5rem' }}
					onClick={closeModal}
				>
					확인</Button>
			</Box>
		</CustomModal>
	);
}
