const Search = () => {
    return (
        <header>
             <h2 className="header__title">
                <span className="header__title--part1">A Blockchain Framework for</span>
                <br />
                
                <span className="header__title--part2">Seamless Real Estate Transactions</span>
            </h2>
           
            <input
                type="text"
                className="header__search"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
            />
        </header>
    );
};

export default Search;
