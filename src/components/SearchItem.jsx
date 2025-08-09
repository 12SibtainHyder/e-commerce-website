import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';

const SearchItem = ({cart ,setCart}) => {
  const { term } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const handleFilter = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(data);
    };

    handleFilter();
  }, [term]);

  return (
    <>
      {filteredData.length === 0 ? (
        <h2 className="text-center my-5">No Products Found</h2>
      ) : (
        <Product cart={cart} setCart={setCart} items={filteredData} />
      )}
    </>
  );
};

export default SearchItem;
