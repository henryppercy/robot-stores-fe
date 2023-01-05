import './FilterButton.scss';

type Category = {
    category: string,
}

const FilterButton = ({ category }: Category) => {
    return (
        <button className="categoryButton">
            {category}
        </button>
    );
}

export default FilterButton;
