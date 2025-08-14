import filter from './filter.json'
import notFound from './not-found.json'

export const en = {
	translation: {
		...filter,
		...notFound
	}
} as const
