import {Users} from 'lucide-react';
import Button from './components/button';
import { headerItems } from '@/constants/constant';
import { TypeOfItems } from '@/types';

export default function Home() {
  return (
    <section className="pt-4 w-full">

      {/* selected-sidebar-item */}
      <section className='flexAndGapAndCenter justify-between pl-4 pr-4 pt-4 pb-2 border-b-1 border-b-grayColor'>
        
        <div className='flexAndGapAndCenter'>        
          <Users size={20}/>
          <p className='text-sm'>Groups</p>
        </div>

        <div className='flexAndGapAndCenter'>
          {
            headerItems?.map((el: TypeOfItems)=>{
              return <Button key={el?.id}>
                <el.icon size={20}/>
                {el?.label && <p className='text-sm'>{el?.label}</p>}
            </Button>
            })
          }
        </div>

      </section>
      


    </section>
  );
}
