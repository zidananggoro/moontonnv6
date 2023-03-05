import SubscriptionDetail from '@/Layouts/Authenticated/SubscriptionDetail';
import MenuItem from './MenuItem';
import { UserMenu } from './MenuList';
import {Link} from '@inertiajs/inertia-react';

export default function Sidebar({auth}){
    return (
    <aside className="fixed z-50 w-[300px] h-full">

    <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
        <a href="/">
            <img src="/images/moonton.svg" alt=""/>
        </a>
        <div className="links flex flex-col mt-[60px] h-full gap-[50px]">

            <div>
                <div className="text-gray-1 text-sm mb-4">Menu</div>
                
               {UserMenu.map((menu,index) => (
                    <MenuItem
                    key={`${index}-${menu.text}`}
                    link={menu.link}
                    icon={menu.icon}
                    text={menu.text}
                    isActive={
                        menu.link && route().current(menu.link)
                    }
                    ></MenuItem>

               ))}
            </div>
          
            <div>
                <div className="text-gray-1 side-link mb-4">Others</div>
                <Link href={route('user.dashboard.subscriptionPlan.index')} className="side-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M17.7689 8.3818H22C22 4.98459 19.9644 3 16.5156 3H7.48444C4.03556 3 2 4.98459 2 8.33847V15.6615C2 19.0154 4.03556 21 7.48444 21H16.5156C19.9644 21 22 19.0154 22 15.6615V15.3495H17.7689C15.8052 15.3495 14.2133 13.7975 14.2133 11.883C14.2133 9.96849 15.8052 8.41647 17.7689 8.41647V8.3818ZM17.7689 9.87241H21.2533C21.6657 9.87241 22 10.1983 22 10.6004V13.131C21.9952 13.5311 21.6637 13.8543 21.2533 13.8589H17.8489C16.8548 13.872 15.9855 13.2084 15.76 12.2643C15.6471 11.6783 15.8056 11.0736 16.1931 10.6122C16.5805 10.1509 17.1573 9.88007 17.7689 9.87241ZM17.92 12.533H18.2489C18.6711 12.533 19.0133 12.1993 19.0133 11.7877C19.0133 11.3761 18.6711 11.0424 18.2489 11.0424H17.92C17.7181 11.0401 17.5236 11.1166 17.38 11.255C17.2364 11.3934 17.1555 11.5821 17.1556 11.779C17.1555 12.1921 17.4964 12.5282 17.92 12.533ZM6.73778 8.3818H12.3822C12.8044 8.3818 13.1467 8.04812 13.1467 7.63649C13.1467 7.22487 12.8044 6.89119 12.3822 6.89119H6.73778C6.31903 6.89116 5.9782 7.2196 5.97333 7.62783C5.97331 8.04087 6.31415 8.37705 6.73778 8.3818Z" />
                    </svg>
                    Payments
                </Link>
                <a href="#!" className="side-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M7.33037 2.0004H16.6694C20.0704 2.0004 21.9904 3.9294 22.0004 7.3304V16.6704C22.0004 20.0704 20.0704 22.0004 16.6694 22.0004H7.33037C3.92937 22.0004 2.00037 20.0704 2.00037 16.6704V7.3304C2.00037 3.9294 3.92937 2.0004 7.33037 2.0004ZM12.0494 17.8604C12.4804 17.8604 12.8394 17.5404 12.8794 17.1104V6.9204C12.9194 6.6104 12.7704 6.2994 12.5004 6.1304C12.2194 5.9604 11.8794 5.9604 11.6104 6.1304C11.3394 6.2994 11.1904 6.6104 11.2194 6.9204V17.1104C11.2704 17.5404 11.6294 17.8604 12.0494 17.8604ZM16.6504 17.8604C17.0704 17.8604 17.4294 17.5404 17.4804 17.1104V13.8304C17.5094 13.5094 17.3604 13.2104 17.0894 13.0404C16.8204 12.8704 16.4804 12.8704 16.2004 13.0404C15.9294 13.2104 15.7804 13.5094 15.8204 13.8304V17.1104C15.8604 17.5404 16.2194 17.8604 16.6504 17.8604ZM8.21937 17.1104C8.17937 17.5404 7.82037 17.8604 7.38937 17.8604C6.95937 17.8604 6.59937 17.5404 6.56037 17.1104V10.2004C6.53037 9.8894 6.67937 9.5804 6.95037 9.4104C7.21937 9.2404 7.56037 9.2404 7.83037 9.4104C8.09937 9.5804 8.25037 9.8894 8.21937 10.2004V17.1104Z"
                            fill="#B7B7B7" />
                    </svg>
                    Analytics
                </a>
                <a href="#!" className="side-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M17.7689 8.3818H22C22 4.98459 19.9644 3 16.5156 3H7.48444C4.03556 3 2 4.98459 2 8.33847V15.6615C2 19.0154 4.03556 21 7.48444 21H16.5156C19.9644 21 22 19.0154 22 15.6615V15.3495H17.7689C15.8052 15.3495 14.2133 13.7975 14.2133 11.883C14.2133 9.96849 15.8052 8.41647 17.7689 8.41647V8.3818ZM17.7689 9.87241H21.2533C21.6657 9.87241 22 10.1983 22 10.6004V13.131C21.9952 13.5311 21.6637 13.8543 21.2533 13.8589H17.8489C16.8548 13.872 15.9855 13.2084 15.76 12.2643C15.6471 11.6783 15.8056 11.0736 16.1931 10.6122C16.5805 10.1509 17.1573 9.88007 17.7689 9.87241ZM17.92 12.533H18.2489C18.6711 12.533 19.0133 12.1993 19.0133 11.7877C19.0133 11.3761 18.6711 11.0424 18.2489 11.0424H17.92C17.7181 11.0401 17.5236 11.1166 17.38 11.255C17.2364 11.3934 17.1555 11.5821 17.1556 11.779C17.1555 12.1921 17.4964 12.5282 17.92 12.533ZM6.73778 8.3818H12.3822C12.8044 8.3818 13.1467 8.04812 13.1467 7.63649C13.1467 7.22487 12.8044 6.89119 12.3822 6.89119H6.73778C6.31903 6.89116 5.9782 7.2196 5.97333 7.62783C5.97331 8.04087 6.31415 8.37705 6.73778 8.3818Z" />
                    </svg>
                    Your Profile
                </a>
                <a href="sign_in.html" className="side-link mb-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M9.89535 11.23C9.45785 11.23 9.11192 11.57 9.11192 12C9.11192 12.42 9.45785 12.77 9.89535 12.77H16V17.55C16 20 13.9753 22 11.4724 22H6.51744C4.02471 22 2 20.01 2 17.56V6.45C2 3.99 4.03488 2 6.52762 2H11.4927C13.9753 2 16 3.99 16 6.44V11.23H9.89535ZM19.6302 8.5402L22.5502 11.4502C22.7002 11.6002 22.7802 11.7902 22.7802 12.0002C22.7802 12.2002 22.7002 12.4002 22.5502 12.5402L19.6302 15.4502C19.4802 15.6002 19.2802 15.6802 19.0902 15.6802C18.8902 15.6802 18.6902 15.6002 18.5402 15.4502C18.2402 15.1502 18.2402 14.6602 18.5402 14.3602L20.1402 12.7702H16.0002V11.2302H20.1402L18.5402 9.6402C18.2402 9.3402 18.2402 8.8502 18.5402 8.5502C18.8402 8.2402 19.3302 8.2402 19.6302 8.5402Z" />
                    </svg>
                    Logout
                </a>
            </div>
            
            
            {auth.activePlan && (
                <SubscriptionDetail
                    name ={auth.activePlan.name}
                    isPremium={auth.activePlan.name === 'Premium'}
                    remainingActiveDays={auth.activePlan.remainingActiveDays}
                    activeDays={auth.activePlan.activeDays}
                />
            )}
            </div>
        </div>
    </aside>
    );
}