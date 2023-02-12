import React from 'react'

type Props = {
    departments:[Category],
    handleSetSlug:any
}

type Category = {
    id:number,
    name:string,
    slug:string   
}

const DepartmentGroup = ({departments, handleSetSlug}:Props)=> {
    console.log("Mi grupo de departamentos es: ",departments);

    const onHandleSetSlug = (event:any)=> {
        //handleSetSlug(event.target.value)
        handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
    }

    const departmentOptions:any= departments.map((department:Category)=> {
        return (
            <option value={department.slug} key={department.id}>
                {department.name}
            </option>
        )
    })
    return (
        <div>
            <select defaultValue="value0" onChange={onHandleSetSlug}>
                <option disabled value="value0">Seleccione una opcion.</option>
                {departmentOptions}
            </select>
        </div>
    )
}

export default DepartmentGroup;