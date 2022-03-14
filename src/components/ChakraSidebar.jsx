import { background, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import {
  FiHome,
  FiMenu,
  FiCalendar,
  FiUsers,
  FiUser,
  FiSettings,
  FiMessageCircle,
  FiClipboard,
  FiBarChart2,
  FiDollarSign,
} from "react-icons/fi";
import NavItem from "./ChakraNavItem";
export default function ChakraSidebar() {
  const [navSize, setNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      left=""
      h="92vh"
      marginTop=""
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={navSize === "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      bg="#f9fafc"
      borderRight="1px"
      borderColor="gray.300"
    >
      <Flex p="" flexDir="column" alignItems="center" as="nav">
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === "small") setNavSize("large");
            else setNavSize("small");
          }}
        />
        <NavItem navSize={navSize} icon={FiHome} title="MojSalon" />
        <NavItem navSize={navSize} icon={FiCalendar} title="Zakazivanje" />
        <NavItem navSize={navSize} icon={FiUsers} title="Klijenti" />
        <NavItem navSize={navSize} icon={FiUser} title="Zaposleni" />
        <NavItem
          navSize={navSize}
          icon={FiDollarSign}
          title="Cenovnik usluga"
        />
        <NavItem navSize={navSize} icon={FiBarChart2} title="Izvestavanje" />
        <NavItem navSize={navSize} icon={FiSettings} title="Podesavanja" />
        <NavItem navSize={navSize} icon={FiMessageCircle} title="Tiketi" />
        <NavItem
          navSize={navSize}
          icon={FiClipboard}
          title="Evidencija dolazaka"
        />
      </Flex>
    </Flex>
  );
}
