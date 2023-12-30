import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BaseProps } from '../../../types';
import { tokens } from '../../../token.stylex.ts';

ChartJS.register(ArcElement, Tooltip, Legend);

const doughnutLabel = {
	id: 'doughnutLabel',
	afterDatasetDraw(chart: any) {
		const { ctx, data } = chart;

		ctx.save();

		// get center coordinates
		const centerX = chart.getDatasetMeta(0).data[0].x;
		const centerY = chart.getDatasetMeta(0).data[0].y;
		ctx.font = 'bold 30px sans-serif';
		ctx.fillStyles = tokens.grayText;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(`+${data.datasets[0].data[0]}%`, centerX, centerY);
	},
};

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: true,
			position: 'right' as const,
		},
	},
};

export const data = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
			],
			borderWidth: 1,
		},
	],
};

export type SummaryProps = BaseProps;

export const SummaryChart = () => {
	return <Doughnut data={data} options={options} plugins={[doughnutLabel]} />;
};
