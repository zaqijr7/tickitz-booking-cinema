import EbvIdLogo from '../Assets/Images/ebu.id.png';
import CineOneLogo from '../Assets/Images/cineone.png';
import HiflixLogo from '../Assets/Images/hiflix.png';

const cinemaList =[
    {
        id: 1,
        cinema: EbvIdLogo, 
        name: 'ebv.id', 
        address:'Whatever street No.12, South Purwokerto', 
        time: ['08:30am', '10:30pm', '12:00pm', '02:00pm', '04:30pm', '07:00pm', '08:30pm']
    },
    {
        id: 2,
        cinema: CineOneLogo, 
        name: 'CineOne21', 
        address:'Downcare street  No. 21, East Purwokerto',
        time: ['08:30am', '10:30pm', '12:00pm', '02:00pm', '04:30pm', '07:00pm', '08:30pm']
    },
    {
        id: 3,
        cinema: HiflixLogo,
        name: 'Hiflix Cinema', 
        address:'Colonel street No. 2, East Purwokerto',
        time: ['08:30am', '10:30pm', '12:00pm', '02:00pm', '04:30pm', '07:00pm', '08:30pm']
    }
]
export default cinemaList;