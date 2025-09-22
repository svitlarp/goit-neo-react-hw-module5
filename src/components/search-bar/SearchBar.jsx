import css from './SearchBar.module.css';

const SearchBar = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const input = form.elements.search;
        }

    return (
        <div className={css.searchBar}>
            <form onSubmit={handleSubmit} >
                <input
                    type='text'
                    name='search'
                    autoComplete='off' 
                />
                {/* ref = { inputRef } */}
            </form>
        </div>
    )
}

export default SearchBar;

