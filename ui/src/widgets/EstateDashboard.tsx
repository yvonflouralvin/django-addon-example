import React from 'react';
import functions from '../lib/functions';
import { Property } from '../types';
import TablePropriete from './TablePropriete';

interface EstateDashboardProps {
    app: string[]
}
const EstateDashboard = async (props: EstateDashboardProps) => {

    return <div>
        <TablePropriete />
    </div>
}


export default EstateDashboard;