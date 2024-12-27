import { useContext, useState, useEffect } from "react"
import { ShopContext } from '../context/ShopContext'
import {assets} from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'


const Collections = () => {

  const { products,search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
const [filterProducts, setFilterProducts] = useState([[ ]])
const [category, setCategory] = useState([ ])
const [subCategory, setSubCategory] = useState([ ])
const [sortType, setSortType] = useState('relevant')
const toggleCategory = (e) => {
  const value = e.target.value;
  setCategory((prev) =>
    prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
  );
};

const toggleSubCategory = (e) => {
  const value = e.target.value;
  setSubCategory((prev) =>
    prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
  );
};

const applyFilter = () => {
  let productsCopy = products.slice();

  if( showSearch && search ) {

    productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }


  if (category.length > 0) {
    productsCopy = productsCopy.filter((item) => category.includes(item.category));
  }

  if (subCategory.length > 0) {
    productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
  }

  setFilterProducts(productsCopy);
};

const sortProduct = () => {
let fpCopy = filterProducts.slice()

switch(sortType){

    case 'low-high':
      setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)))
      break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)))
    break;
    default:
      applyFilter()
break

}
}


  // useEffect(()=>{
  //   setFilterProducts(products)
  //  },[]) fyunciona sin este

   useEffect(()=>{
    applyFilter()
   },[category, subCategory,search,showSearch])

   useEffect(()=> {
      sortProduct()
   },[sortType])

//    useEffect(()=>{
//     console.log(category)
//   },[category])
// // jei segun el es para consologgear bnomas el useEffect
//   useEffect(()=>{
//     console.log(subCategory)
//   },[subCategory])

// 2h16m56s
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

      {/* filter options */}
      <div className="min-w-60">
        <p onClick={()=> setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2 ">FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''} `} src={assets.dropdown_icon} alt="dropdown_icon" />
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
                 <input type="checkbox" onChange={toggleCategory} className="w-3" value={'Men'}/> Men 
            </p>
            <p className="flex gap-2">
                 <input type="checkbox" onChange={toggleCategory} className="w-3" value={'Women'}/> Women 
            </p>
            <p className="flex gap-2">
                 <input type="checkbox" onChange={toggleCategory} className="w-3" value={'Kids'}/> Kids 
            </p>
          </div>
        </div>
        {/* Subcategory  filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
                 <input type="checkbox" onChange={toggleSubCategory} className="w-3" value={'Topwear'}/> Topwear 
            </p>
            <p className="flex gap-2">
                 <input type="checkbox" onChange={toggleSubCategory} className="w-3" value={'Bottomwear'}/> Bottomwear 
            </p>
            <p className="flex gap-2">
                 <input type="checkbox" onChange={toggleSubCategory} className="w-3" value={'Winterwear'}/> Winterwear 
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1">

        <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1='ALL' text2='COLLECTIONS'/>
        {/* product  sort  */}
            <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by:Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
        </div>

    {/* Map products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {
          filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Collections