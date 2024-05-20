export function formatTimeAgo(publishedDate: Date): string | undefined {
	const currentDate = new Date();
	const publishedDateObj = new Date(publishedDate);
	const timeDifference = currentDate.getTime() - publishedDateObj.getTime();

	const periods = [
		{ time: 31536000, name: 'год' },
		{ time: 2592000, name: 'месяц' },
		{ time: 86400, name: 'день' },
		{ time: 3600, name: 'час' },
		{ time: 60, name: 'минут' },
		{ time: 1, name: 'секунда' }
	];

	let elapsed = Math.floor(timeDifference / 1000);
	for (let { time, name } of periods) {
		if (elapsed >= time) {
			let count = Math.floor(elapsed / time);
			return `${count} ${name} назад`;
		}
	}
}