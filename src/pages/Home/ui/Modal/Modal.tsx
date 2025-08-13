/* eslint-disable i18next/no-literal-string */
// без вимкення лінтера не пропускає текст(помилка)
import React, { useRef } from 'react'

import { useQuery } from '@tanstack/react-query'

// eslint-disable-next-line no-restricted-syntax
import { FilterResponse, fetchFilters } from '@/api'
import { useOutsideClick } from '@/hooks/useOutsideClick'

import CloseIcon from '../../../../image/CLose.svg'
import './Modal.css'

interface ModalProps {
	onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
	const modalRef = useRef<HTMLDivElement>(null)
	useOutsideClick(modalRef, onClose)
	const { data: filterData } = useQuery<FilterResponse>({
		queryKey: ['filters'],
		queryFn: fetchFilters
	})

	return (
		<div className="modal-backdrop">
			<div
				className="modal-context"
				ref={modalRef}
			>
				<div className="flex items-center justify-between">
					<h2 className="font-inter font-medium text-[40px] text-center flex-1">
						Filter
					</h2>
					<button className="w-[24px] h-[24px]">
						<CloseIcon
							onClick={onClose}
							className="cursor-pointer"
						/>
					</button>
				</div>
				<div className="mx-auto mt-[25px] w-[100%] h-[2px] bg-gray-500"></div>
				{filterData?.filterItems.map(filter => (
					<div
						key={filter.id}
						className="mt-8 "
					>
						<h3 className="font-inter font-medium text-[24px] flex-1  mb-6">
							{filter.name}
						</h3>
						{filter.options.map(option => (
							<label
								key={option.id}
								className="flex gap-x-[16px] font-intertext-[16px] flex-1 mb-3.5 text-black"
							>
								<input
									type="checkbox"
									className="flex text-black"
								/>
								{option.name}
							</label>
						))}
						<div className="mx-auto mt-[25px] w-[100%] h-[2px] bg-gray-500"></div>
					</div>
				))}

				<div className="flex items-center justify-between mt-8">
					<button className="w-[184px] h-[64px] items-center rounded-lg bg-orange-500">
						apply
					</button>

					<p>Clear all parameters</p>
				</div>
			</div>
		</div>
	)
}
