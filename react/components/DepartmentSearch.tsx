import React, { useState } from 'react'
import { useQuery } from 'react-apollo';
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import { SearchBar } from 'vtex.store-components'
import DepartmentGroup from './DepartmentGroup';
const DepartmentSearch=()=>{
    const { data, loading } = useQuery(QUERY_VALUE)
    const [slug, setSlug] = useState("")
    //console.log("Mis datos de query son: ",data?.categories[0]?.children);
    console.log("Mi slug seleccinado es:",slug);
    return loading 
    ? 
        <div>Loading ...</div>
    :
        <div className='flex'>
            <DepartmentGroup 
                departments={data?.categories[0]?.children}
                handleSetSlug={setSlug}
                ></DepartmentGroup>
            <SearchBar
                customSearchPageUrl={slug}
                placeholder="¿Que buscas en VTEX University"
                displayMode="search-and-clear-buttons">
            </SearchBar>
        </div>
}

export default DepartmentSearch;