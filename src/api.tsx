import { FilterChoose } from './shared/api/types/Filter'

export interface FilterResponse {
	filterItems: FilterChoose[]
}

export const fetchFilters = async (): Promise<FilterResponse> => {
	const response = await fetch('/wwt-frontend-tech-task/temp/filterData.json')
	if (!response) {
		throw new Error('Failed to fetch filter data')
	}

	return response.json()
}
