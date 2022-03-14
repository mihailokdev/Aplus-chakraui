import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react";

export default function NavItem({ navSize, title, icon, active }) {
 return (
    <Flex
        mt={30}
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
    >
        <Menu placement="right">
            <Link
                backgroundColor={active && "#AEC8CA"}
                p={1}
                borderRadius={8}
                _hover={{textDecor: 'none', backgroundColor: '#AEC8CA'}}
                w={navSize === "large" && "100%"}
            >
                <MenuButton w="100%">
                    <Flex>
                        <Icon as={icon} fontSize="l" color={active ? "#82AAAD" : "black"} />
                        <Text ml={3} fontSize="" display={navSize === "small" ? "none" : "flex"}> {title} </Text>
                    </Flex>
                </MenuButton>
            </Link>
        </Menu>
    </Flex>
 );
}
