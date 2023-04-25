import { Card, CardBody, Image, Stack, Heading, Text, Divider, Button, ButtonGroup, CardFooter } from "@chakra-ui/react"
import { motion } from 'framer-motion'

function StyledCard(props) {
    return (
        <Card as={motion.div} maxW='sm' borderRadius='8px' whileHover={{ scale: 1.06 }} transition='0.1s linear'>
            <CardBody>
                <Image
                src={props.image}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3' align='stretch'>
                <Heading size='md'>{props.title}</Heading>
                <Text>
                    {props.description}
                </Text>
                
                </Stack>
            </CardBody>
            <Text color='blue.600' fontSize='2xl' padding='20px' fontWeight='500'>
                    {props.price}р
                </Text>
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='purple'>
                Добавить в корзину
                </Button>
                
                </ButtonGroup>
            </CardFooter>
            </Card>
    )
}

export default StyledCard;