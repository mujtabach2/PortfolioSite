import { FC } from 'react';
import {
    Container,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    Box,
    Button,
    Link,
    Icon
} from '@chakra-ui/react';
import ReactTypingEffect from 'react-typing-effect';

import Socials from '../global/Socials';
import { Element } from 'react-scroll';
import DownArrow from './DownArrow';
import { FiArrowUpRight } from 'react-icons/fi';

const Intro: FC = () => {

    return (
        <Element id='home'>
            <Container maxW={'6xl'} p={6.75} pt={['25vh', '35vh']} h={'100vh'} style={{ margin: 'auto' }}>
                <VStack>
                    <Heading
                        fontSize={'4.5rem'}
                        fontWeight={500}
                        fontFamily={'source-code-pro, monospace'}
                        textAlign='center'
                        ml={2}
                    >
                        <ReactTypingEffect text="Mujtaba Chaudhry" speed={85} eraseDelay={1000000} typingDelay={650} cursor="_" />
                    </Heading>
                    <div >
                        <Text
                            fontSize={'2.7rem'}
                            fontWeight={300}
                            color={useColorModeValue('#5a657c', '#9199a9')}
                            textAlign='center'
                            letterSpacing={1.1}
                            ml={2}
                        >
                            Full Stack Developer
                        </Text>
                        <Box p={4} ml={79.9}>
                            <Socials color={useColorModeValue('lightblue', '#9199a9')} />
                        </Box>
                    </div>
                    <Link
                        href={'/mujtabaResume.pdf'}
                        isExternal
                        _hover={{ 'textDecor': 'none' }}
                        mr={0}
                    >
                        <Button
                            variant={'outline'}
                            colorScheme={'cyan'}
                            aria-label={'View Resume'}
                            rightIcon={<Icon as={FiArrowUpRight} fontSize={'18'} mt={'3px'} />}
                            rounded={'full'}
                            border={'2px'}
                            pb={0}
                            mt={2}
                            h={55}
                            w={200}
                            fontSize={'2.2rem'}
                            _hover={
                                {
                                    backgroundColor: '#101424 ',
                                }
                            }
                        >
                            Resume
                        </Button>
                    </Link>
                </VStack>
                <Box mt={[10, '10vh']}>
                    <DownArrow/>
                </Box>
            </Container>
        </Element>
    );
};

export default Intro;