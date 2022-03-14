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
} from "@chakra-ui/react";
import {
  FiUserPlus,
  FiClipboard,
  FiCheckSquare,
  FiClock,
  FiMail,
} from "react-icons/fi";
import { GrFormClock } from "react-icons/gr";
import "../App.css";

export default function Dashboard() {
  return (
    <>
      <Box>
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
          <Grid templateColumns="repeat(4, 1fr)" gap={6} pt={5}>
            <Box bg="white" borderRadius="md" justifyItems="center">
              <Box>
                <HStack>
                  <GrFormClock size={26} />
                  <Text className="boxHeader"> Naredna 3 zakazana termina </Text>
                </HStack>
              </Box>
              <Box className="boxBody">
                <List spacing={3} className="timeline">
                  <ListItem className="timelineLi">
                    <FiMail className="mail" color="#66ff33"  />
                    <Box className="timelineItem">
                      <Text as="span" className="time">
                        14:20:00
                      </Text>
                      <Text as="h3" className="timelineHeader" color="white" borderTopLeftRadius="7px" borderTopRightRadius="7px" backgroundColor="black">
                        Marija                                    
                      </Text>
                      <Box className="timelineBody">
                        Nađa Roganović 067555335 (inst: _nadjarr_) - (0111234567)
                      </Box>
                    </Box>
                  </ListItem>
                </List>
              </Box>
              <Box></Box>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
