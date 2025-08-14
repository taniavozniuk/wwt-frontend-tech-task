import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { useOutsideClick } from '@/hooks/useOutsideClick'

import CloseIcon from '../../../../image/CloseBt.svg'

interface ModalChangeProps {
	onConfirm: () => void
	onCancel: () => void
}

export const ModalChange: React.FC<ModalChangeProps> = ({
	onConfirm,
	onCancel
}) => {
	const modalRef = useRef<HTMLDivElement>(null)
	useOutsideClick(modalRef, onCancel)
	const { t } = useTranslation()
	return (
		<div className="fixed inset-0 bg-black/30 flex items-center justify-center z-10 px-20">
			<div
				ref={modalRef}
				className="w-full max-h-[calc(90vh-200px)] bg-white rounded-lg overflow-y-auto p-10 pr-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white"
			>
				<div className="flex items-center justify-between mb-10">
					<h2 className="font-inter font-medium text-[40px] text-center flex-1">
						{t('modalChange.title')} {/* "Do you want to apply new filter" */}
					</h2>
					<button className="w-[24px] h-[24px]">
						<CloseIcon
							onClick={onCancel}
							className="cursor-pointer"
						/>
					</button>
				</div>

				<div className="flex justify-center gap-[32px] mt-10">
					<button
						onClick={onCancel}
						className="w-[184px] h-[64px] rounded-lg bg-gray-300 text-black font-inter"
					>
						{t('modalChange.useOldFilter')}
					</button>
					<button
						onClick={onConfirm}
						className="w-[184px] h-[64px] rounded-lg bg-orange-500 text-white font-inter"
					>
						{t('modalChange.applyNewFilter')}
					</button>
				</div>
			</div>
		</div>
	)
}
