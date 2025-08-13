/* eslint-disable i18next/no-literal-string */
// без вимкення лінтера не пропускає текст(помилка)
import React, { useRef, useState } from 'react'

import { useQuery } from '@tanstack/react-query'

// eslint-disable-next-line no-restricted-syntax
import { FilterResponse, fetchFilters } from '@/api'
import { useOutsideClick } from '@/hooks/useOutsideClick'

import CloseIcon from '../../../../image/CLose.svg'
import './Modal.css'

interface ModalProps {
	onClose: () => void
	initialSelected: string[]
	onConfirm: (filters: string[]) => void
}

export const Modal: React.FC<ModalProps> = ({
	onClose,
	initialSelected,
	onConfirm
}) => {
	const modalRef = useRef<HTMLDivElement>(null)
	const [selected, setSelected] = useState<string[]>(initialSelected)
	useOutsideClick(modalRef, onClose)
	const { data: filterData } = useQuery<FilterResponse>({
		queryKey: ['filters'],
		queryFn: fetchFilters
	})

	const toggleOption = (id: string) => {
		setSelected(prev =>
			prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
		)
	}

	const handleReset = () => {
		setSelected([])
	}

	return (
		<div className="fixed inset-0 bg-black/30 flex items-center justify-center z-10 px-20">
			<div
				className="w-full max-h-[calc(90vh-200px)] bg-white rounded-lg overflow-y-auto p-10 pr-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white"
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
									checked={selected.includes(option.id)}
									onChange={() => toggleOption(option.id)}
								/>
								{option.name}
							</label>
						))}
						<div className="mx-auto mt-[25px] w-[100%] h-[2px] bg-gray-500"></div>
					</div>
				))}

				<div className="relative mt-8 w-full flex items-center mt-8px">
					<button
						className="absolute left-1/2 -translate-x-1/2 w-[184px] h-[64px] rounded-lg bg-orange-500 text-white font-inter"
						onClick={() => onConfirm(selected)}
					>
						apply
					</button>
					<p
						className="ml-auto text-blue cursor-pointer underline"
						style={{ color: '#078691' }}
						onClick={handleReset}
					>
						Clear all parameters
					</p>
				</div>
			</div>
		</div>
	)
}
