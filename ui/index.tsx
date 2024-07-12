import EstateDashboard from './src/widgets/EstateDashboard';
import { AppConfig } from '@/lib/shared/types/config'; 
const config: AppConfig = {
    label:"Immobilier",
    showInMainMenu: true,
    icon: "https://www.flaticon.com/svg/static/icons/svg/2933/2933715.svg",
    render: (app:string[])=>{ 
        return <EstateDashboard app={app} />
    },
}


export default config;