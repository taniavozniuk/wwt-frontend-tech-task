import React from 'react'

import FilterIcon from '../../../../image/filter.svg'
import logo from '../../../../image/media.png'
import './Header.css'

interface HeaderProps {
	onOpenModal: () => void
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
	return (
		<header className="w-full h-15 flex items-center justify-between px-5">
			<div className="flex-shrink-0 w-1/5 h-1/2">
				<img
					alt="logo"
					className="w-full h-full object-contain"
					src={logo}
				/>
			</div>
			<div className="filter">
				<button
					className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center p-0 cursor-pointer"
					onClick={onOpenModal}
				>
					<FilterIcon />
				</button>
			</div>
		</header>
	)
}
