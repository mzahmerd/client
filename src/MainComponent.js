import axios from 'axios'
import {useCallback, useEffect, useState} from 'react'
import './MainComponent.css'

const MainComponent = () =>{
        const [values, setValues] = useState([])
        const [value, setValue] =useState('')

    const getAllNumbers = useCallback(async() =>{
        // we will use Nginx to redirect this to proper url
        const data = await axios.get('/api/values')
        setValues(data.data.rows.map(row => row.number))
    },[])

    const saveNumber =  useCallback(async(evt) =>{
        evt.preventDefault()
        await axios.post('/api/values',{
            value:value 
        })

        setValue('')
         getAllNumbers()
    },[value,getAllNumbers])

    const handleUpdateValue = (evt)=>{
        setValue(evt.target.value)
    }
    useEffect(() =>{
        getAllNumbers()
    },[])

    return(
        <div>
            <button onClick={getAllNumbers}>Get all numbers</button><br/>
            <span className='title'>Values</span>
            <div className='values'>
            {values.map(value => <div>{value}</div>)}
            </div>
            <form onSubmit={saveNumber}>
                <input onChange={handleUpdateValue} value={value} placeholder='Enter number'/>
                <button >Submit</button>
            </form>
        </div>
    )
}


export default MainComponent