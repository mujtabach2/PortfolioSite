import { FC } from 'react';
import {
    Container,
    Heading,
    Stack,
    Image,
    VStack,
    Text,
    useColorModeValue,
    Flex,
    Center,
    Link
} from '@chakra-ui/react';
import { Element } from 'react-scroll';
import headshot from '../../media/headshot.jpg'
import { useTheme } from '../../assets/theme-context';



const About: FC = () => {
    const { theme } = useTheme();

    const opentab = (event: React.MouseEvent, tabname: string) => {
        const tablinks = document.getElementsByClassName("tab-links") as HTMLCollectionOf<HTMLDivElement>;
        const tabcontents = document.getElementsByClassName("tab-contents") as HTMLCollectionOf<HTMLDivElement>;
    
        for (let i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove("active-link");
        }
    
        for (let i = 0; i < tabcontents.length; i++) {
          tabcontents[i].classList.remove("active-tab");
        }
    
        event.currentTarget.classList.add("active-link");
    
        const targetTab = document.getElementById(tabname);
        if (targetTab) {
          targetTab.classList.add("active-tab");
        }
      };
    return (
        <Element id='aboutme' style={{marginTop: '-4vh'}}>
            <Container maxW={'5xl'} p={6.75} mt={[20, 10]}>

            <div id="about" style={{ padding: '80px 0', color: '#ababab' }}>
                <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <div className="about-col-1" style={{ flexBasis: '35%' }}>
                    <img src="your-image-url.jpg" alt="About Me" style={{ width: '100%', borderRadius: '15px' }} />
                    </div>
                    <div className="about-col-2" style={{ flexBasis: '60%' }}>
                    <h1 className={`color${theme === 'dark' ? 'black' : 'white'}`} style={{ fontSize: '60px', fontWeight: 600, marginBottom: '23px' }}>About me</h1>
                    <p>
                        Hello, I'm Mujtaba Chaudhry!
                        <br />
                        <br />
                        I'm a second-year computer science student at Ontario Tech University, based in Toronto, Canada. Coding isn't just my skill; it's my passion. I find joy in creating solutions that make lives easier and more enjoyable.
                        <br />
                        <br />
                        I'm passionate about being a Full Stack Engineer and fascinated by the realms of Machine Learning and Artificial Intelligence. Outside of tech, I'm an avid fan of football and MMA. My dream? To be a Software Engineer at Twitter, shaping the digital world one line of code at a time.
                    </p>
             </div>
                </div>
                </div>
            </Container>
        </Element>
    );
};

export default About;