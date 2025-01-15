import {Users, CircleHelp} from 'lucide-react';
import Button from './components/button';

export default function Home() {
  return (
    <section className="pt-4 w-[60vw]">

      {/* selected-sidebar-item */}
      <section className='flexAndGap justify-between'>
        <div className='flexAndGap'>        
          <Users/>
          <p>Groups</p>
        </div>
        <div className='flexAndGap'>
          <Button>
            <CircleHelp/>
            <p>Docs</p>
          </Button>
        </div>

      </section>
      


    </section>
  );
}
