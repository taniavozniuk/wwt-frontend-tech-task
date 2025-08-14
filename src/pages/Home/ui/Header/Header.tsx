import FilterIcon from '../../../../image/filter.svg'
import logo from '../../../../image/media.png'
import { useFilterStore } from '../../../../store/filterStore'

export const Header: React.FC = () => {
	const { openModal } = useFilterStore()
	return (
		<header
			className="w-full h-15 flex items-center justify-between px-5"
			role="banner"
		>
			<div className="flex-shrink-0 object-contain w-32 h-12">
				<img
					alt="Логотип компанії"
					className="w-full h-full object-contain"
					src={logo}
					role="img"
				/>
			</div>
			<nav
				className="filter"
				aria-label="Фільтри"
			>
				<button
					className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center p-0 cursor-pointer"
					onClick={openModal}
					aria-label="Відкрити фільтри"
				>
					<FilterIcon />
				</button>
			</nav>
		</header>
	)
}
