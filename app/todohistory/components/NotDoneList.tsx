'use client';
import { Box, Typography } from '@mui/material';
import CheckDiv from './CheckDiv';

interface RawTodoItem {
	familyTodoId: number;
	content: string;
	category: string;
	status: string;
	assignedAt: string;
	dueDate: string;
	completedAt: string | null;
	memo: string;
	imageUrl: string;
}

interface TodoType {
	month: number;
	todolist: [string, boolean][];
}

interface TodoProps {
	todoData: RawTodoItem[]; // ⬅ 원본 API 그대로 받음
}

export default function NotDoneList({ todoData }: TodoProps) {
	const hasData = Array.isArray(todoData) && todoData.length > 0;

	// ✅ CheckDiv에 맞게 변환
	const transformed: TodoType = {
		month: 6, // 예시로 6월. 실제라면 assignedAt 기준으로 계산 가능
		todolist: todoData.map((item) => [item.content, item.status === 'COMPLETED']),
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
				gap: '2rem',
				minHeight: '10rem',
			}}
		>
			{hasData ? (
				<CheckDiv todoData={transformed} />
			) : (
				<Typography sx={{ color: '#999999' }}>
					아직 데이터가 없어요.
				</Typography>
			)}
		</Box>
	);
}
