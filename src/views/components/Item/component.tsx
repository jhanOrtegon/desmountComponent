import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { ALL_CHARACTERS } from './queries';

const Component = () => {
    const { data } = useQuery(ALL_CHARACTERS)

    useEffect(() => {
        console.log(data);
    }, [data])


    return (
        <div>
            <h1>xxxx</h1>
        </div>
    )
}

export default Component
