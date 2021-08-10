import {useContext,useState,useEffect} from "react";
import {PeopleLoadedEvent} from "./PersonReducer";
import {loadPeople} from "./RestPersonServiceCall";
import {personContext} from "./PersonContext";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import './DisplayPeople.scss';

export function DisplayPeople() {
    const ctx = useContext(personContext)
    const state = ctx.state;
    const dispatch = ctx.dispatch

    const [gridApi, setGridApi] = useState(undefined)
    const [columnApi, setColumnApi] = useState(undefined)
    // keep rowData seperate from state.people in case we want different data in the table
    const [rowTStamp, setRowTStamp] = useState( undefined )
    const [rowData, setRowData] = useState([{forename:"J", surname:"G"}]);

    const onGridReady = (params) => {
        // using hooks - setGridApi/setColumnApi are returned by useState
        setGridApi(params.api);
        setColumnApi(params.columnApi);
    }

    useEffect( () => {
        loadPeople().then( people => {
            if (people !== null) {
                console.log("Dispatching="+people.length)
                dispatch({...PeopleLoadedEvent, people:people})
            }
        })
    }, [])

    if (state!==undefined && state.loaded && state.loadTStamp!=rowTStamp) {
        console.log("setting rows="+rowData.length)
        setRowData(state.people)
        setRowTStamp(state.loadTStamp)
    }
    console.log("rows="+rowData.length+", state="+state)
    return <div className="centred-div">
        This is data loaded from the GCP function, so please run it...Example of using a react component.
        <div className="ag-theme-alpine-local" style={{height: 360, width: 400}}>
        <AgGridReact
            onGridReady={onGridReady}
            rowSelection="single"
            rowData={rowData}>
            <AgGridColumn headerName="Forename" field="forename" />
            <AgGridColumn headerName="Surname" field="surname" />
        </AgGridReact>
        </div></div>
}