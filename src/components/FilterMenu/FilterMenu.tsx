import FilterMenuItem from './FilterMenuItem'

type Props = {}

const FilterMenu = (props: Props) => {
    return (
        <div className="filter-menu">
            <FilterMenuItem to="/sport">Спортивные</FilterMenuItem>
            <FilterMenuItem to="/street">Уличные</FilterMenuItem>
            <FilterMenuItem to="/boots">Ботинки</FilterMenuItem>
        </div>
    )
}

export default FilterMenu
