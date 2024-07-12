'use client'
import CrudTable from '@/components/ui/CrudTable';

export default function TablePropriete() {
    return <div>
        <CrudTable
            idIndex='id'
            rowClassname='cursor-pointer'
            model='estate_property'
            columns={[
                { label: "Nom", index: "name" }
            ]}
        />
    </div>
}