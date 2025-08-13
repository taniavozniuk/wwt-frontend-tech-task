import React from 'react'

import FilterIcon from '../../../../image/filter.svg'
import logo from '../../../../image/media.png'
import './Header.css'

interface HeaderProps {
	onOpenModal: () => void
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
	return (
		<header className="header">
			<div className="headerLogo">
				<img
					alt="logo"
					className="logo"
					src={logo}
				/>
			</div>
			<div className="filter">
				<button
					className="buttonFilter"
					onClick={onOpenModal}
				>
					<FilterIcon />
				</button>
			</div>
		</header>
	)
}
