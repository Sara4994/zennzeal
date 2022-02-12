import React, {useState, useEffect} from 'react';
import {getData} from './utils';
import './MyFuncComponent.css';
import TableComponent from './TableComponent';

const MyFuncComponent = () => {
    // constructor() {} not available in funcitonal components
    // this.state not available in func components
    // this.setState() not available in func components
    // States can be created using HOOKS  --> Prefix 'use'
    // checkValue --> useCheckValue custom hook
    
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [country, setCountry] = useState('');


    const handleName= (event) => {
        setName(event.target.value);
    };

    const handleEmail= (event) => {
        setEmail(event.target.value);
    }

    const handleContact= (event) => {
        setContact(event.target.value);
    }

    const handleCountry= (event) => {
        setCountry(event.target.value);
    }

    const handleData = () => {
        const temp = data.users[0]
        const tempColumns = Object.keys(temp);
        setColumns(tempColumns);   
    }

    useEffect(async () => {
        // business logic
        try {
            const response = await getData();
            console.log('response', response)   
            setData(response.data);
        } catch (error) {
            console.log('error', error)
        }
        
    },[])

    useEffect(() => {
        data?.users?.length > 0 && handleData();
    }, [data])

    const handleSubmitClick = (event) => {
        event.preventDefault();
        const tempObj = {}
        tempObj.name = name;
        tempObj.email = email;
        tempObj.contact = contact;
        tempObj.country = country;
        console.log('check', tempObj)
    }

    return (
        <React.Fragment>
            <form>
                <label> name:</label>
                <input value={name} onChange={handleName} /><br />
                <label> email:</label>
                <input value={email} onChange={handleEmail} /><br />
                <label> contact:</label>
                <input value={contact} onChange={handleContact} /><br />
                <label> country:</label>
                <input value={country} onChange={handleCountry} /><br/>
                <button onClick={handleSubmitClick}>submit</button>
            </form>
           {columns?.length> 0 &&<TableComponent columns={columns} data={data} /> }
        </React.Fragment>
    )
}

export default MyFuncComponent;







{/* <header>
                
            </header> */}


            // <input value={text} onChange={handleChange} />
            // <button onClick={handleClick}>Submit</button>
            // <nav>
            //         <ul style={{listStyle: 'none'}}>
            //            {names.map((name) => <li>{name}</li>)}
            //         </ul>
            //     </nav>