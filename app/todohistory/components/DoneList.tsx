'use client';
import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

interface TodoItem {
	familyTodoId: number;
	content: string;
	category: string;
	status: string;
	assignedAt: string;
	dueDate: string;
	completedAt: string;
	memo: string;
	imageUrl: string;
}

interface TodoProps {
	todoData: TodoItem[];
}

interface DoneItemData {
	img: string;
	memo: string;
}

export default function DoneList({ todoData }: TodoProps) {
	const hasData = Array.isArray(todoData) && todoData.length > 0;

	const [openStates, setOpenStates] = useState<boolean[]>(
		Array(todoData.length).fill(false)
	);

	// 이미지 및 메모는 실제 todoData의 값으로부터 추출
	const doneMockData: DoneItemData[] = todoData.map((item) => ({
		img: item.imageUrl || '/img/my_banner_family.svg',
		memo: item.memo || '메모 없음',
	}));

	const handleToggle = (index: number) => {
		const newOpenStates = [...openStates];
		newOpenStates[index] = !newOpenStates[index];
		setOpenStates(newOpenStates);
	};

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'transparent',
				gap: '1rem',
				minHeight: '10rem',
			}}
		>
			{hasData ? (
				todoData.map((item, index) => (
					<Box key={item.familyTodoId} sx={{ width: '100%' }}>
						<Button
							onClick={() => handleToggle(index)}
							sx={{
								width: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'flex-start',
								flexDirection: 'row',
								gap: '0.5rem',
								backgroundColor: '#DBD9CA',
								color: 'white',
								borderRadius: '1rem',
								padding: '1rem',
							}}
						>
							<Box
								sx={{
									width: '5rem',
									height: '2rem',
									backgroundImage: `url(/img/icon_done.svg)`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							/>
							<Typography sx={{ color: '#6E4C36', fontSize: '1.1rem', fontWeight: 'bold' }}>
								{item.content}
							</Typography>
						</Button>

						{openStates[index] && (
							<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', mt: 1 }}>
								<Box
									sx={{
										width: '100%',
										height: '5rem',
										backgroundImage: `url(${doneMockData[index].img})`,
										backgroundSize: 'cover',
										backgroundRepeat: 'no-repeat',
										backgroundPosition: 'center',
									}}
								/>
								<Box
									sx={{
										width: '100%',
										height: '5rem',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										backgroundColor: '#F8F8F8',
										borderRadius: '0 0 1rem 1rem',
										color: '#6E4C36',
										fontWeight: 'bold',
									}}
								>
									{doneMockData[index].memo}
								</Box>
							</Box>
						)}
					</Box>
				))
			) : (
				<Typography sx={{ color: '#999999' }}>아직 데이터가 없어요.</Typography>
			)}
		</Box>
	);
}
