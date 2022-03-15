import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Spacer,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider,
  Button,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import {
  FiUserPlus,
  FiClipboard,
  FiCheckSquare,
  FiClock,
  FiMail,
} from "react-icons/fi";
import { GrFormClock } from "react-icons/gr";
import { FaBirthdayCake } from "react-icons/fa";
import "../App.css";

export default function Dashboard() {
  return (
    <>
      <Box paddingTop={5}>
        <Container maxWidth="container.xl">
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <Box position="relative">
              <Box bg="#34c0ef" borderRadius="lg">
                <HStack>
                  <Box color="white">
                    <Text pl="3" fontSize="4xl">
                      <strong> 1000 </strong>
                    </Text>
                    <Text pl={3}> Broj klijenata </Text>
                  </Box>
                  <Spacer />
                  <Box p={1}>
                    <FiUserPlus opacity={0.3} size={80} className="popout " />
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box position="relative">
              <Box bg="#4ea75b" borderRadius="lg">
                <HStack>
                  <Box color="white">
                    <Text pl={3} fontSize="4xl">
                      <strong> 1000 </strong>
                    </Text>
                    <Text pl={3}> Broj termina </Text>
                  </Box>
                  <Spacer />
                  <Box p={1}>
                    <FiClipboard opacity={0.3} size={80} className="popout" />
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box position="relative">
              <Box bg="#f29d2c" borderRadius="lg">
                <HStack>
                  <Box pl={3} color="white">
                    <Text fontSize="4xl">
                      <strong> 1000 </strong>
                    </Text>
                    <Text> Broj realizovanih termina </Text>
                  </Box>
                  <Spacer />
                  <Box p={1}>
                    <FiCheckSquare opacity={0.3} size={80} className="popout" />
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box>
              <Box bg="#dd4b39" borderRadius="lg">
                <HStack>
                  <Box color="white">
                    <Text pl="3" fontSize="xl">
                      <strong> 10:00:00:00 </strong>
                    </Text>
                    <Text pl={2.5}> Vreme do isteka licence </Text>
                  </Box>
                  <Spacer />
                  <Box p={1}>
                    <FiClock opacity={0.3} size={80} className="popout" />
                  </Box>
                </HStack>
              </Box>
            </Box>
          </Grid>
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={6}
            pt={5}
            alignItems="flex-start"
          >
            <Box
              bg="white"
              borderRadius="md"
              justifyItems="center"
              borderTopColor="turquoise"
              borderTop="3px solid #34c0ef"
              borderTopRadius="3px"
            >
              <Box>
                <HStack>
                  <GrFormClock size={26} />
                  <Text className="boxHeader">Naredna 3 zakazana termina</Text>
                </HStack>
              </Box>
              <Box className="boxBody">
                <List spacing={3} className="timeline">
                  <ListItem className="timelineLi">
                    <FiMail className="mail" color="white" />
                    <Box className="timelineItem">
                      <Text as="span" className="time">
                        14:20:00
                      </Text>
                      <Text
                        as="h3"
                        className="timelineHeader"
                        color="white"
                        borderTopLeftRadius="7px"
                        borderTopRightRadius="7px"
                        backgroundColor="#34c0ef"
                      >
                        Marija
                      </Text>
                      <Box className="timelineBody">
                        Nađa Roganović 067555335 (inst: _nadjarr_) -
                        (0111234567)
                      </Box>
                    </Box>
                  </ListItem>
                </List>
              </Box>
              <Box className="boxFooter">
                <Button
                  backgroundColor="#367fa9"
                  className="button"
                  size="sm"
                  mb={2}
                >
                  Svi termini
                </Button>
              </Box>
            </Box>
            <Box>
              <Box
                padding="20px"
                borderTopRightRadius="3px"
                borderTopLeftRadius="3px"
                backgroundColor="#00a65a"
              >
                <Text
                  as="h4"
                  fontFamily="Source Sans Pro',sans-serif"
                  fontSize="18px"
                  marginTop="10px"
                  marginBottom="10px"
                  fontWeight={500}
                  lineHeight={1.1}
                  marginBlockStart="1.33em"
                  marginBlockEnd="1.33em"
                  marginInlineStart="0px"
                  marginInlineEnd="0px"
                >
                  Status kucanja na poslu - 14.03.2022
                </Text>
                <Text
                  as="h5"
                  fontFamily="sans-serif"
                  fontSize="14px"
                  marginTop="10px"
                  marginBottom="10px"
                  fontWeight={500}
                  lineHeight={1.1}
                  marginBlockStart="1.67em"
                  marginBlockEnd="1.67em"
                  marginInlineStart="0px"
                  marginInlineEnd="0px"
                >
                  Nije evidentiran:
                </Text>
              </Box>
              <Box padding={0} className="boxFooter2">
                <List marginBottom={0} marginTop={0}>
                  <ListItem
                    className="itemHover"
                    borderBottom="1px solid #f4f4f4"
                    margin={0}
                    float="none"
                    position="relative"
                    display="block"
                    alignItems="center"
                  >
                    <a href="#" className="link">
                      {" "}
                      Ivana{" "}
                      <Text
                        as="span"
                        bg="#dd4b39"
                        color="#fff"
                        float="right"
                        display="inline-block"
                        minWidth="10px"
                        padding="3px 7px"
                        fontSize="12px"
                        fontWeight={700}
                        lineHeight="1"
                        textAlign="center"
                        whiteSpace="nowrap"
                        verticalAlign="middle"
                        borderRadius="10px"
                        marginTop="5px"
                      >
                        Dolazak - Odlazak
                      </Text>
                    </a>
                  </ListItem>
                  <ListItem
                    className="itemHover"
                    borderBottom="1px solid #f4f4f4"
                    margin={0}
                    float="none"
                    position="relative"
                    display="block"
                    alignItems="center"
                  >
                    <a href="#" className="link">
                      {" "}
                      Marija{" "}
                      <Text
                        as="span"
                        bg="#dd4b39"
                        color="#fff"
                        float="right"
                        display="inline-block"
                        minWidth="10px"
                        padding="3px 7px"
                        fontSize="12px"
                        fontWeight={700}
                        lineHeight="1"
                        textAlign="center"
                        whiteSpace="nowrap"
                        verticalAlign="middle"
                        borderRadius="10px"
                        marginTop="5px"
                      >
                        Dolazak - Odlazak
                      </Text>
                    </a>
                  </ListItem>
                  <ListItem
                    className="itemHover"
                    borderBottom="1px solid #f4f4f4"
                    margin={0}
                    float="none"
                    position="relative"
                    display="block"
                    alignItems="center"
                  >
                    <a href="#" className="link">
                      {" "}
                      Jovana{" "}
                      <Text
                        as="span"
                        bg="#dd4b39"
                        color="#fff"
                        float="right"
                        display="inline-block"
                        minWidth="10px"
                        padding="3px 7px"
                        fontSize="12px"
                        fontWeight={700}
                        lineHeight="1"
                        textAlign="center"
                        whiteSpace="nowrap"
                        verticalAlign="middle"
                        borderRadius="10px"
                        marginTop="5px"
                      >
                        Dolazak - Odlazak
                      </Text>
                    </a>
                  </ListItem>
                  <ListItem
                    className="itemHover"
                    borderBottom="1px solid #f4f4f4"
                    margin={0}
                    float="none"
                    position="relative"
                    display="block"
                    alignItems="center"
                  >
                    <a href="#" className="link">
                      {" "}
                      Seka{" "}
                      <Text
                        as="span"
                        bg="#dd4b39"
                        color="#fff"
                        float="right"
                        display="inline-block"
                        minWidth="10px"
                        padding="3px 7px"
                        fontSize="12px"
                        fontWeight={700}
                        lineHeight="1"
                        textAlign="center"
                        whiteSpace="nowrap"
                        verticalAlign="middle"
                        borderRadius="10px"
                        marginTop="5px"
                      >
                        Dolazak - Odlazak
                      </Text>
                    </a>
                  </ListItem>
                  <ListItem
                    className="itemHover"
                    borderBottom="1px solid #f4f4f4"
                    margin={0}
                    float="none"
                    position="relative"
                    display="block"
                    alignItems="center"
                  >
                    <a href="#" className="link">
                      {" "}
                      Ljilja{" "}
                      <Text
                        as="span"
                        bg="#dd4b39"
                        color="#fff"
                        float="right"
                        display="inline-block"
                        minWidth="10px"
                        padding="3px 7px"
                        fontSize="12px"
                        fontWeight={700}
                        lineHeight="1"
                        textAlign="center"
                        whiteSpace="nowrap"
                        verticalAlign="middle"
                        borderRadius="10px"
                        marginTop="5px"
                      >
                        Dolazak - Odlazak
                      </Text>
                    </a>
                  </ListItem>
                  <ListItem
                    className="itemHover"
                    borderBottom="1px solid #f4f4f4"
                    margin={0}
                    float="none"
                    position="relative"
                    display="block"
                    alignItems="center"
                  >
                    <a href="#" className="link">
                      {" "}
                      Nikoleta{" "}
                      <Text
                        as="span"
                        bg="#dd4b39"
                        color="#fff"
                        float="right"
                        display="inline-block"
                        minWidth="10px"
                        padding="3px 7px"
                        fontSize="12px"
                        fontWeight={700}
                        lineHeight="1"
                        textAlign="center"
                        whiteSpace="nowrap"
                        verticalAlign="middle"
                        borderRadius="10px"
                        marginTop="3px"
                      >
                        Dolazak - Odlazak
                      </Text>
                    </a>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box backgroundColor="white">
              <Tabs align="center" variant="enclosed" isFitted>
                <TabList color="#f29d2c">
                  <Tab> Klijenata </Tab>
                  <Tab> Zaposlenih </Tab>
                </TabList>
                <Text as="h2" fontSize="20px" paddingLeft={3}>
                  Rodjendani
                </Text>
                <Divider />
                <TabPanels>
                  <TabPanel>
                    <List>
                      <ListItem>
                        <a href="#">
                          <HStack>
                            <Box
                              className="circle"
                              backgroundColor="#17e6c0"
                              pt={1}
                            >
                            <FaBirthdayCake
                              color="white"
                              fontSize="30px"
                            />
                            </Box>
                            <Box>
                              <Text as="h4" fontSize="12px">
                                880 Saška Mitrović (Inst: __saskaa.07__)
                              </Text>
                            </Box>
                          </HStack>
                        </a>
                      </ListItem>
                    </List>
                  </TabPanel>
                  <TabPanel>
                    <List>
                      <ListItem mt={3} mb={3}>
                        <a href="#">
                          <HStack>
                            <Box
                              className="circle"
                              backgroundColor="#ffd633"
                              alignItems="center"
                              pt={1}
                            >
                              <FaBirthdayCake color="white" fontSize="30px" />
                            </Box>
                            <Box>
                              <Text
                                as="h4"
                                fontSize="14px"
                                alignSelf="flex-start"
                              >
                                Marija
                              </Text>
                              <Text as="p" fontSize="10px">
                                Rodjendan je 12.06.1999
                              </Text>
                            </Box>
                          </HStack>
                        </a>
                      </ListItem>
                      <ListItem mt={3} mb={3}>
                        <a href="#">
                          <HStack>
                            <Box
                              className="circle"
                              backgroundColor="#66ffff"
                              alignItems="center"
                              pt={1}
                            >
                              <FaBirthdayCake color="white" fontSize="30px" />
                            </Box>
                            <Box>
                              <Text
                                as="h4"
                                fontSize="14px"
                                alignSelf="flex-start"
                              >
                                Seka
                              </Text>
                              <Text as="p" fontSize="10px">
                                Rodjendan je 05.07.2005
                              </Text>
                            </Box>
                          </HStack>
                        </a>
                      </ListItem>
                      <ListItem mt={3} mb={3}>
                        <a href="#">
                          <HStack>
                            <Box className="circle" alignItems="center" pt={1} backgroundColor="#ff0000">
                              <FaBirthdayCake color="white" fontSize="30px" />
                            </Box>
                            <Box>
                              <Text
                                as="h4"
                                fontSize="14px"
                                alignSelf="flex-start"
                              >
                                Jovana
                              </Text>
                              <Text as="p" fontSize="10px">
                                Rodjendan je 07.07.2001
                              </Text>
                            </Box>
                          </HStack>
                        </a>
                      </ListItem>
                      <ListItem mt={3} mb={3}>
                        <a href="#">
                          <HStack>
                            <Box className="circle" alignItems="center" pt={1} backgroundColor="#99cc00">
                              <FaBirthdayCake color="white" fontSize="30px" />
                            </Box>
                            <Box>
                              <Text
                                as="h4"
                                fontSize="14px"
                                alignSelf="flex-start"
                              >
                                Ivana
                              </Text>
                              <Text as="p" fontSize="10px">
                                Rodjendan je 12.08.1997
                              </Text>
                            </Box>
                          </HStack>
                        </a>
                      </ListItem>
                      <ListItem mt={3} mb={3}>
                        <a href="#">
                          <HStack>
                            <Box className="circle" alignItems="center" pt={1} backgroundColor="#3366ff">
                              <FaBirthdayCake color="white" fontSize="30px" />
                            </Box>
                            <Box>
                              <Text
                                as="h4"
                                fontSize="14px"
                                alignSelf="flex-start"
                              >
                                Nikoleta
                              </Text>
                              <Text as="p" fontSize="10px">
                                Rodjendan je 24.08.1991
                              </Text>
                            </Box>
                          </HStack>
                        </a>
                      </ListItem>
                      <ListItem mt={3} mb={3}>
                        <a href="#">
                          <HStack>
                            <Box className="circle" alignItems="center" pt={1} backgroundColor="#ff33cc">
                              <FaBirthdayCake color="white" fontSize="30px" />
                            </Box>
                            <Box>
                              <Text
                                as="h4"
                                fontSize="14px"
                                alignSelf="flex-start"
                              >
                                Ljilja
                              </Text>
                              <Text as="p" fontSize="10px">
                                Rodjendan je 04.09.2003
                              </Text>
                            </Box>
                          </HStack>
                        </a>
                      </ListItem>
                    </List>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <Box
              position="relative"
              borderRadius="3px"
              background="#ffffff"
              borderTop="3px solid #d2d6de"
              marginBottom="20px"
              width="100%"
              boxShadow="0 1px 1px rgb(0 0 0 / 10%)"
              borderTopColor="#dd4b39"
            >
              <Box className="boxHeader">
                <FiClipboard className="clipboard" />
                <Text as="h3" className="boxTitle" paddingLeft={2}>
                  Beleske
                </Text>
              </Box>
              <Box className="boxBody" maxHeight="450px" overflowY="scroll">
                <List margin={0} padding={0} overflow="auto">
                  <ListItem>Nema evidentiranih beleski</ListItem>
                </List>
              </Box>
              <Box className="boxFooter noBorder">
                <Button
                  type="button"
                  backgroundColor="#f4f4f4"
                  color="#444"
                  borderColor="gray.300"
                  borderRadius="3px"
                  boxShadow="none"
                  border="1px solid"
                  size="sm"
                  float="right"
                  mb={2}
                  
                >
                  Dodaj belesku
                </Button>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
