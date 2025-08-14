import { create } from 'zustand'

interface FilterStore {
	isOpenModal: boolean
	isConfirmModal: boolean
	selectedFilters: string[]
	pendingFilters: string[]
	openModal: () => void
	closeModal: () => void
	openConfirmModal: () => void
	closeConfirmModal: () => void
	setSelectedFilters: (filters: string[]) => void
	setPendingFilters: (filters: string[]) => void
}

export const useFilterStore = create<FilterStore>(set => ({
	isOpenModal: false,
	isConfirmModal: false,
	selectedFilters: [],
	pendingFilters: [],

	openModal: () => set({ isOpenModal: true }),
	closeModal: () => set({ isOpenModal: false }),

	openConfirmModal: () => set({ isConfirmModal: true }),
	closeConfirmModal: () => set({ isConfirmModal: false }),

	setSelectedFilters: filters => set({ selectedFilters: filters }),
	setPendingFilters: filters => set({ pendingFilters: filters })
}))
