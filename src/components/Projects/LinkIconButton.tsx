import { FC, ReactElement } from "react"
import { IconButton, Link } from "@chakra-ui/react"
import { useTheme } from '../../assets/theme-context';
interface LinkIconButtonProps {
    href: string,
    icon: ReactElement
}

const LinkIconButton: FC<LinkIconButtonProps> = (props) => {
    const { theme } = useTheme();
    return (
        <Link href={props.href} isExternal>
            <IconButton
                variant={'outline'}
                colorScheme={'cyan'}
                aria-label={'View project'}
                fontSize={'1rem'}
                size={'sm'}
                icon={props.icon}
                _hover={{
                    background: theme === "dark" ? "white" : "lightgray",
                    color: theme === "dark" ? "black" : "black"
                }}
            />
        </Link>
    )
}

export default LinkIconButton
