import { HStack, Link } from '@chakra-ui/react';
import React, { FC } from 'react';
import {
    FiLinkedin,
    FiGithub,
    FiMail
} from 'react-icons/fi'

interface SocialsProps {
    color: string,
    size?: string
}

const Socials: FC<SocialsProps> = (props) => {
    const socialsData = [
        {
            aria: 'Linkedin',
            icon: <FiLinkedin />,
            href: 'https://linkedin.com/in/mujtaba-chaudhry/'
        },
        {
            aria: 'GitHub',
            icon: <FiGithub />,
            href: 'https://github.com/mujtabach2'
        },
        {
            aria: 'Email',
            icon: <FiMail />,
            href: 'mailto:mujtabawaqas@gmail.com'
        }
    ]
    return (
        <HStack spacing={6}>
            {
                socialsData.map((social, i) => (
                    <Link
                        key={i}
                        aria-label={social.aria}
                        href={social.href}
                        fontSize={props.size ? props.size : '2.5rem'}
                        color={props.color}
                        isExternal
                        transition={'0.3s ease-in-out'}
                        _hover={{
                            transform: 'scale(1.05)'
                        }} 
                    >
                        {social.icon}
                    </Link>
                ))
            }
        </HStack>
    );
};

export default Socials;