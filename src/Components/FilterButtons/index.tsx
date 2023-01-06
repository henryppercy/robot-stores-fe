import './FilterButton.scss';

type Props = {
    categories: Array<string>,
    filterItem(currentCategory: string): void,
};

const FilterButtons = ({ categories, filterItem }: Props) => {
      
    return (
        <>        
            {categories.map((category: string, id) => <button className="categoryButton" onClick={() => filterItem(category)} key={id}>{category}</button>)}
        </>
    );
}

export default FilterButtons;
