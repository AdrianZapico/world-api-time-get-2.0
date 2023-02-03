import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useState } from 'react'
import {Container, Clock} from'./style'


const Home = () => {
  const [key,setKey] = useState('Oxford,United Kingdom`')
 
   
  const { data, isFetching } = useQuery(`${key}`, async () => {
    const response = await axios.get(`https://timezone.abstractapi.com/v1/current_time?api_key=690065e4cbc945b19bb2b2479b46eb64&location=${key}`, {
      headers: {
        'Authorization': '690065e4cbc945b19bb2b2479b46eb64'
      }
    })
    return response.data.datetime
  })
 
  return (
    <>
    
      <Container>
      <input type="text"
        style={{textAlign:"center"}}
        onChange={(e)=> setKey(e.target.value)}
        
        />
      </Container>
    <Container>
    <Clock>
      {data}
      </Clock>
    </Container>
    </>
  )
}

export default Home
