import { useFilterStore } from '../../../store/filterStore'
import { Header } from './Header/Header'
import { Modal } from './Modal/Modal'
import { ModalChange } from './ModalChange/ModalChange'

export const App = () => {
	const {
		isOpenModal,
		isConfirmModal,
		selectedFilters,
		pendingFilters,
		setSelectedFilters,
		setPendingFilters,
		closeModal,
		openConfirmModal,
		closeConfirmModal
	} = useFilterStore()

	return (
		<>
			<Header />

			<main className="w-full size-100 flex flex-col items-center justify-center">
				<section>
					{/* eslint-disable-next-line i18next/no-literal-string */}
					<h1 className="text-6xl text-gray-600 mb-11">
						WinWinTravel frontend test task
					</h1>

					<pre className="bg-gray-100 p-4 rounded">
						{JSON.stringify(selectedFilters, null, 2)}
					</pre>
				</section>
			</main>

			{isOpenModal && (
				<Modal
					initialSelected={selectedFilters}
					onClose={closeModal}
					onConfirm={newFilters => {
						setPendingFilters(newFilters)
						closeModal()
						openConfirmModal()
					}}
				/>
			)}

			{isConfirmModal && (
				<ModalChange
					onConfirm={() => {
						setSelectedFilters(pendingFilters)
						closeConfirmModal()
					}}
					onCancel={closeConfirmModal}
				/>
			)}
		</>
	)
}
