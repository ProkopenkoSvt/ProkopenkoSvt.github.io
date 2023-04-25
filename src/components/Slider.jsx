import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Box, Heading, Center, Button} from '@chakra-ui/react'
import styled from '@emotion/styled'
import './sliderCss.css'
const Header = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    padding: 64px;
    z-index: 1000;
`

const HeroButton = styled(Box)`
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1000;
`

function Slider(props) {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 1000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
    
      return (
        <>
          <div ref={sliderRef} className="keen-slider">
            <Header w='100%'>
                <Center>
                    <Heading color='white'>Магазин мягких игрушек Fancy</Heading>
                </Center>
            </Header>
            <div className="keen-slider__slide number-slide1"></div>
            <div className="keen-slider__slide number-slide2"></div>
            <div className="keen-slider__slide number-slide3"></div>
            <HeroButton w='100%'>
                <Center>
            <Button h='80px' w='240px' onClick={props.scrollToShop}>
                Перейти в магазин
            </Button>
            </Center>
            </HeroButton>
          </div>
        </>
      )
}

export default Slider;