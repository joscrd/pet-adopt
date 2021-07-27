import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';

const Upload = () => {

    // State
    const [userData, setUserData] = useState([{
        name: '',
        age: '',
        email: '',
        id: nanoid(10)

    }]);

    const [petData, setPetData] = useState([{
        name: '',
        age: '',
        gender: '',
        image: null
    }]);

    const [showForm, setShowForm] = useState(false);

    const {register, errors, handleSubmit} = useForm();
     
    console.log(userData.id);

    return (  
        <Fragment>
            
        </Fragment>
    );
}
 
export default Upload;