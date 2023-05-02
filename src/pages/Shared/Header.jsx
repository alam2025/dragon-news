
import logo from './../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
      
      return (
            <div className=' flex justify-center  items-center gap-5  flex-col'>
                  <img src={logo} alt="Dragon News" />
                  <p>Journalism Without Fear or Favour</p>
                  <p>
                        {
                              moment().format('dddd, MMMM D, yyyy')
                        }
                  </p>
                  <div className=' flex gap-4 items-center bg-slate-100 p-4'>
                        <p className=' bg-rose-500 px-10 py-3 rounded-md text-white font-semibold'>Latest</p>
                        <Marquee>To control how a flex item both grows and shrinks at a specific breakpoint, add a : prefix to any existing utility class. For example, use md:flex-1 to apply the flex-1 utility at only medium screen sizes and above. For more information about Tailwind's responsive design features, check out the Responsive Design documentation.</Marquee>
                  </div>
            </div>
      );
};

export default Header;