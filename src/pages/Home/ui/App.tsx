import { useState } from 'react'

import { Header } from './Header/Header'
import { Modal } from './Modal/Modal'
import { ModalChange } from './ModalChange/ModalChange'

export const App = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [isConfirmModal, setIsConfirmModal] = useState(false)
	const [selectedFilters, setSelectedFilters] = useState<string[]>([])
	const [pendingFilters, setPendingFilters] = useState<string[]>([])

	return (
		<>
			<Header onOpenModal={() => setIsOpenModal(true)} />

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
					onClose={() => setIsOpenModal(false)}
					initialSelected={selectedFilters}
					onConfirm={newFilters => {
						setPendingFilters(newFilters)
						setIsOpenModal(false)
						setIsConfirmModal(true)
					}}
				/>
			)}

			{isConfirmModal && (
				<ModalChange
					onConfirm={() => {
						setSelectedFilters(pendingFilters)
						setIsConfirmModal(false)
					}}
					onCancel={() => setIsConfirmModal(false)}
				/>
			)}
		</>
	)
}
