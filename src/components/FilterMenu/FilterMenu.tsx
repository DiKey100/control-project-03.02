import FilterMenuItem from './FilterMenuItem'

const FilterMenu = () => {
    return (
        <div className="filter-menu">
            <FilterMenuItem to="/sport">Спортивные</FilterMenuItem>
            <FilterMenuItem to="/street">Уличные</FilterMenuItem>
            <FilterMenuItem to="/boots">Ботинки</FilterMenuItem>
        </div>
    )
}

export default FilterMenu
