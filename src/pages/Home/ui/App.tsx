import { useState } from 'react'

import { Header } from './Header/Header'
import { Modal } from './Modal/Modal'

export const App = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)

	return (
		<>
			<Header onOpenModal={() => setIsOpenModal(true)} />
			<section className="w-full h-dvh flex items-center justify-center">
				{/* eslint-disable-next-line i18next/no-literal-string */}
				<h1 className="text-6xl text-gray-600 mb-11">
					WinWinTravel frontend test task
				</h1>
			</section>

			{isOpenModal && <Modal onClose={() => setIsOpenModal(false)} />}
		</>
	)
}
