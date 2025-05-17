export const BASE_COLORS = [
	{
		name: 'red',
		color: '0 72.2% 50.6%'
	},
	{
		name: 'black',
		color: '0 0% 0%'
	},
	{
		name: 'pink',
		color: '330.4 81.2% 60.4%'
	},
	{
		name: 'dark-green',
		color: '150 60% 25%'
	},
	{
		name: 'gray',
		color: '0 0% 50%'
	},
	{
		name: 'purple',
		color: '270 70% 50%'
	},
	{
		name: 'dark-blue',
		color: '220 70% 25%'
	}
] as const

export type TypeBaseColor = (typeof BASE_COLORS)[number]['name']
