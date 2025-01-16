import React from 'react'
import Button from './button'
import { ChevronDown, ChevronUp, ListFilter, Search } from 'lucide-react';


type TypeOfPageProps = {
    handleSearch: (event:React.ChangeEvent<HTMLInputElement>) => void;
    search: string;
}
const Filteration: React.FC<TypeOfPageProps> = ({handleSearch, search}) => {
  return (
    <section className="pl-4 pr-4 pt-2 pb-2 flex justify-between border-b-1 border-b-grayColor bg-lightGrayColor">
      <div className='flexAndGapAndCenter'>
        <div className='relative'>
          <Search size={15} className='text-grayColor absolute left-1 top-1/2 transform -translate-y-1/2' />
          <input name="search" value={search} onChange={handleSearch} placeholder='Search' className=' placeholder:text-sm outline-none p-3 pl-5 pr-3 h-8 rounded-sm border-1 border-grayColor' type="text"/>

        </div>
        <Button borderColor={true}>
            <ListFilter size={15} className='text-grayColor'/>
            <p className='text-sm'>Filter</p>
        </Button>  
      </div>

      
      <div className='flexAndGapAndCenter'>
        <Button backgroundColor="bg-greenColor" textColor="text-white">
            <p className='text-sm'>Bulk message</p>
        </Button>
        <Button borderColor={true}>
            <p className='text-sm'>Group Action</p>
            <div className="leading-3">
            <ChevronUp size={10} />
            <ChevronDown size={10} />
          </div>
            
        </Button>  
      </div>
    </section>
  )
}

export default Filteration
