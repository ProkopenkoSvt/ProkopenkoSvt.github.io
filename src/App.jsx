import { Box, Heading, SimpleGrid} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useState, useEffect, useRef } from 'react'
import StyledCard from './components/StyledCard'
import Slider from './components/Slider'


const Div = styled.div`
  background: #12c2e9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Hero = styled(Div)`
  height: 100vh;
  border-bottom: 6px solid white;
`

const StyledFooter = styled(Box)`
  background-color: #0b0b0b3f;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function App() {
  const [data, setData] = useState([]);
  const scrollToRef = useRef();

  const scrollToShop = () => {
    console.log('hui')
    scrollToRef.current.scrollIntoView({behavior: 'smooth'});
  }

  useEffect(() => {
    fetchData()
  }, [])



  const fetchData = async () => {
    const url = 'https://64448fe9b80f57f581a76251.mockapi.io/api/v1/products'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      console.log(data)
    } catch (error) {
      console.log(error)
      }
    }
  

  return (
    <>
    <Hero>
    <Slider scrollToShop={scrollToShop} />
      </Hero>
      <Div>
      <SimpleGrid margin="64px 64px 64px 64px" columns={4} spacing={10} ref={scrollToRef}>
          {data.map((item) => (
            <StyledCard title={item.title} description={item.description} price={item.price} image={item.image}></StyledCard>
          ))}
        </SimpleGrid>
      <StyledFooter w='100%' p={16}>
          <Heading size='sm' color='white'>Telegram @Prosot_ia<br></br>
            Email sb9t@yandex.ru</Heading>
          <Heading size='sm' color='white'>г. Волгоград</Heading>
      </StyledFooter>
      </Div>
    </>
  )
}

export default App


//<StyledAccordion><StyledGallery><StyledPhotoFirst /><StyledPhotoSecond /><StyledPhotoThird /></StyledGallery></StyledAccordion>
//<Box w='100%' h='70px' backgroundColor='#0b0b0b22' p={16}></Box>