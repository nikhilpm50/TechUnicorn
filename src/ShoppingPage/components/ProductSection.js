import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import filterLogo from '../../assets/filterLogo.png'
import rangeImg from '../../assets/rangeIcon.png'
import searchIcon from '../../assets/searchIcon.png'
import listIcon from '../../assets/listIcon.png'
import menu from '../../assets/menuIcon.png'
import ProductCard from '../../Homepage/components/ProductCard'
import { Link } from 'react-router-dom'


function ProductSection() {

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(9);
    const [sortOrder, setSortOrder] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          setFilteredProducts(json);
        });
    }, []);
  
    useEffect(() => {
      let sortedProducts = [...products];
      if (sortOrder) {
        sortedProducts = sortedProducts.sort((a, b) => {
          if (sortOrder === 'asc') {
            return a.id - b.id;
          } else {
            return b.id - a.id;
          }
        });
      }
  
      let filtered = sortedProducts;
      if (selectedCategory) {
        filtered = sortedProducts.filter((product) => product.category === selectedCategory);
      }
  
      if (searchQuery) {
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
  
      setFilteredProducts(filtered);
      setCurrentPage(1); // Reset current page to 1 when filter is applied
    }, [sortOrder, selectedCategory, searchQuery, products]);
  
    const handleSortChange = (event) => {
      const newSortOrder = event.target.value;
      setSortOrder(newSortOrder);
    };
  
    const handleCategoryFilter = (category) => {
      setSelectedCategory(category);
    };
  
    const handleSearch = () => {
      const query = document.getElementById('search-input').value;
      setSearchQuery(query);
    };
  
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  
  

  return (
    <RootDiv>
        <LeftSection>
        <PriceSection>
           <PriceDiv>
            <p>Price</p>
            <img src={filterLogo} />
           </PriceDiv>
           <RangeDiv>
              <img src={rangeImg} />
              <div>
                <p>Range</p>
                <p>$5-$20</p>
              </div>
           </RangeDiv>
        </PriceSection>
        <ColorSection>
             <p>Color</p>
             <ColorPick>
               <div id='black' />
               <div id='red' />
               <div id='blue' />
               <div id='green' />
               
             </ColorPick>
             <ColorPick2>
               <div id='yellow' />
               <div id='orange' />
               <div id='grey' />
               <div id='brown' />
             </ColorPick2>
        </ColorSection>
        <CategorySection>
            <p>Categories</p>
            <Category>
                <div>
                    <p onClick={() => handleCategoryFilter(null)}>All Categories</p>
                    <p>{'>'}</p>
                </div> 
                <div>
                    <p onClick={() => handleCategoryFilter("electronics")}>Electronics</p>
                    <p>{'>'}</p>
                </div>
                <div onClick={() => handleCategoryFilter(`men's clothing`)}>
                    <p>Men's Clothing</p>
                    <p>{'>'}</p>
                </div>
                <div onClick={() => handleCategoryFilter(`women's clothing`)}>
                    <p>Women's Clothing</p>
                    <p>{'>'}</p>
                </div>
                <div onClick={() => handleCategoryFilter("jewelery")}>
                    <p>Jewelery</p>
                    <p>{'>'}</p>
                </div>

            </Category>
            <p id='load'>Load More</p>
        </CategorySection>

        <OfferSection>
            <Content>
                <h1>March Discount</h1>
                <p>Up to 70% Off for <br/> All Items in March</p>
                <button>Got It {'>'}</button>
            </Content>
        </OfferSection>
        </LeftSection>
        <RightSection>
          <InputContainer>
             <SearchInput id="search-input" type="text" placeholder="Search Products"  />
             <SearchIcon src={searchIcon} onClick={handleSearch} />
          </InputContainer>
          <SortSection>
             <p>Showing 1-9 Results</p>
             <div>
                <p id='sort'>Sort by</p>
                <select onChange={handleSortChange}>
                  <option>Select</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
                <img src={listIcon} />
                <img src={menu} />
             </div>
          </SortSection>
          <ProductContainer>
          {currentProducts.map((product) => (
             <Link to={`/product/${product.id}`}><ProductCard title={product.title} category={product.category} price={product.price} image={product.image} /></Link> 
          ))}
        
          </ProductContainer>
          <PaginationContainer>
        {pageNumbers.map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            isActive={currentPage === pageNumber}
          >
            {pageNumber}
          </PaginationButton>
        ))}
      </PaginationContainer>
        </RightSection>
    </RootDiv>
  )
}

export default ProductSection

const RootDiv = styled.div`
margin-left: 2.5%;
display: flex;
`;

const LeftSection = styled.div`
width: 296px;
margin-right: 106px;

`;

const RightSection = styled.div`

`;

const PriceDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;

p{
    font-size: 24px;
    font-weight: 700;
    color: #11142D;
}
img{
    width: 24px;
    height: 24px;
}
`;

const PriceSection = styled.div`
margin-bottom: 40px;
`;

const RangeDiv = styled.div`
div{
    display:flex;
    justify-content: space-between;

    p{
        font-size: 16px;
        font-weight: 400;
    }
}
`;

const ColorSection = styled.div`
margin-bottom: 50px;
display: flex;
flex-direction: column;
align-items: baseline;
p{
    font-size: 24px;
    font-weight: 700;
    color: #11142D;
}
`;

const ColorPick = styled.div`
display: flex;
justify-content: space-between;
width: 296px;
margin-bottom: 10px;

div#black{
    width: 40px;
    height: 40px;
    background-color: Black;
    border-radius: 50%;
    cursor: pointer;
}
div#red{
    width: 40px;
    height: 40px;
    background-color: Red;
    border-radius: 50%;
    cursor: pointer;

}
div#blue{
    width: 40px;
    height: 40px;
    background-color: Blue;
    border-radius: 50%;
    cursor: pointer;

}
div#green{
    width: 40px;
    height: 40px;
    background-color: Green;
    border-radius: 50%;
    cursor: pointer;

}


`;

const ColorPick2 = styled.div`
display: flex;
justify-content: space-between;
width: 296px;

div#yellow{
    width: 40px;
    height: 40px;
    background-color: Yellow;
    border-radius: 50%;
    cursor: pointer;

}
div#orange{
    width: 40px;
    height: 40px;
    background-color: Orange;
    border-radius: 50%;
    cursor: pointer;

}
div#grey{
    width: 40px;
    height: 40px;
    background-color: Grey;
    border-radius: 50%;
    cursor: pointer;

}
div#brown{
    width: 40px;
    height: 40px;
    background-color: Brown;
    border-radius: 50%;
    cursor: pointer;

}
`;

const CategorySection = styled.div`
margin-bottom: 80px;
p{
    font-size: 24px;
    font-weight: 700;
    color: #11142D;
    text-align: left;
    cursor: pointer;
}

p#load{
    font-size: 16px;
    font-weight: 500;
    color: #F3692E;
    cursor: pointer;
}
`;

const Category = styled.div`
div{
    display: flex;
    justify-content: space-between;
}
p{
    font-size: 16px;
    font-weight: 500;
    color: #11142D;
}
`;

const OfferSection = styled.div`
width: 296px;
height: 490px;
background-color: #F86338;
display: flex;
align-items: center;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h1{
    font-size: 46px;
    color: white;
    text-align: center;

}
p{
    font-size: 24px;
    font-weight: 400px;
    color: white;
}
button{
    width: 124px;
    height: 54px;
    border-radius: 8px;
    backgroud-color: white;
    color: #7A6005;
    font-size: 16px;
    font-weight: 700;
    border: none;
}
`;

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const SearchInput = styled.input`
  padding-right: 30px; /* Adjust padding as needed */
  width: 960px;
  height: 56px;
  border: 2px solid #F86338;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px; /* Adjust position as needed */
  transform: translateY(-50%);
  cursor: pointer;
`;

const SortSection = styled.div`
display: flex;
width: 992px;
justify-content: space-between;
margin-bottom: 20px;
p{
    font-size: 16px;
    font-weight: 400;
    color: #9A9AB0;
}
div{
    align-items: center;
    display: flex;
    img{
        width: 24px;
        height: 24px;
        margin-left: 15px;
    }
    select{
        width: 119px;
        height: 32px;
        border-radius: 8px;
        margin-left: 15px;
    }
    p#sort{
        color: Black;
        font-size: 16px;
        font-weight: 400;
    }
}
`;

const ProductContainer = styled.div`
display: flex;
width: 995px;
flex-wrap: wrap;
justify-content: space-between;
`;

const PaginationContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 100px;
`;

const PaginationButton = styled.button`
  border: none;
  background-color: ${({ isActive }) => (isActive ? '#F86338' : 'Transparent')};
  padding: 4px 8px;
  margin-right: 4px;
  cursor: pointer;
  border-radius: 50%;
  color: ${({ isActive }) => (isActive ? 'White' : 'Grey')};
`;