import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Style from "../../styles/components/Navbar/BottomNavbar.module.css"
import { WomenEthnic, WomenWestern, Men, Kids, HomeKitchen, BeautyHealth, JewelleryAccessories, BagsFootwear, Electronics } from "./BottomNavbarData";

export default function BottomNavbar() {
  const sm = "320px";
  return (
    <>
      <Box borderBottom={"0.2px solid gray"} px="40px" display={{base : "none", xl : "block"}}>
        <Box
          h="100%"
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
          position="relative"
        >
          <Box h="100%" py="10px" className={Style.bottomSection}>
            <NavLink to="">
              <Text fontSize={"19px"}>Women Ethnic</Text>
            </NavLink>
            {/* /////////////////////////////////// */}
              <Box className={Style.bottomSectionMenu}>
                <Box display={"flex"}  alignItems="flex-start" justifyContent={"flex-start"} className={Style.dropMenuSection}>
                  {
                    WomenEthnic.map((ele) =>(
                      <Box display={"flex"} flexDirection="column" alignItems={"flex-start"} justifyContent="flex-start">
                      <NavLink to={ele.link}><Text mb="10px" fontSize={"18px"}>{ele.heading}</Text></NavLink>
                       {
                        ele.section.map((subSection) =>{
                          return  <NavLink to={subSection.link}><Text mb="4px" fontSize={"16px"}>{subSection.sub}</Text></NavLink>
                        })
                       }
                     
                    </Box>
                    ))
                  }

                </Box>
              </Box>
            {/* ////////////////////////////////////// */}
          </Box>
          <Box h="100%" py="10px" className={Style.bottomSection}>
            <NavLink to="">
              <Text fontSize={"19px"}>Women Western</Text>
            </NavLink>
            {/* /////////////////////////////////// */}
            <Box className={Style.bottomSectionMenu}>
                <Box display={"flex"} alignItems="flex-start" justifyContent={"flex-start"} className={Style.dropMenuSection}>
                  {
                    WomenWestern.map((ele) =>(
                      <Box display={"flex"} flexDirection="column" alignItems={"flex-start"} justifyContent="flex-start">
                      <NavLink to={ele.link}><Text mb="10px" fontSize={"18px"}>{ele.heading}</Text></NavLink>
                       {
                        ele.section.map((subSection) =>{
                          return  <NavLink to={subSection.link}><Text mb="4px" fontSize={"16px"}>{subSection.sub}</Text></NavLink>
                        })
                       }
                     
                    </Box>
                    ))
                  }

                </Box>
              </Box>
            {/* ////////////////////////////////////// */}
          </Box>
          <Box h="100%" py="10px" className={Style.bottomSection}>
            <NavLink to="">
              <Text fontSize={"19px"}>Men</Text>
            </NavLink>
            {/* /////////////////////////////////// */}
            <Box className={Style.bottomSectionMenu}>
                <Box display={"flex"} alignItems="flex-start" justifyContent={"flex-start"} className={Style.dropMenuSection}>
                  {
                    Men.map((ele) =>(
                      <Box display={"flex"} flexDirection="column" alignItems={"flex-start"} justifyContent="flex-start">
                      <NavLink to={ele.link}><Text mb="10px" fontSize={"18px"}>{ele.heading}</Text></NavLink>
                       {
                        ele.section.map((subSection) =>{
                          return  <NavLink to={subSection.link}><Text mb="4px" fontSize={"16px"}>{subSection.sub}</Text></NavLink>
                        })
                       }
                     
                    </Box>
                    ))
                  }

                </Box>
              </Box>
            {/* ////////////////////////////////////// */}
          </Box>
          <Box h="100%" py="10px" className={Style.bottomSection}>
            <NavLink to="">
              <Text fontSize={"19px"}>Kids</Text>
            </NavLink>
            {/* /////////////////////////////////// */}
            <Box className={Style.bottomSectionMenu}>
                <Box display={"flex"} alignItems="flex-start" justifyContent={"flex-start"} className={Style.dropMenuSection}>
                  {
                    Kids.map((ele) =>(
                      <Box display={"flex"} flexDirection="column" alignItems={"flex-start"} justifyContent="flex-start">
                      <NavLink to={ele.link}><Text mb="10px" fontSize={"18px"}>{ele.heading}</Text></NavLink>
                       {
                        ele.section.map((subSection) =>{
                          return  <NavLink to={subSection.link}><Text mb="4px" fontSize={"16px"}>{subSection.sub}</Text></NavLink>
                        })
                       }
                     
                    </Box>
                    ))
                  }

                </Box>
              </Box>
            {/* ////////////////////////////////////// */}
          </Box>
          <Box h="100%" py="10px" className={Style.bottomSection}>
            <NavLink to="">
              <Text fontSize={"19px"}>Home & Kitchen</Text>
            </NavLink>
            {/* /////////////////////////////////// */}
            <Box className={Style.bottomSectionMenu}>
                <Box display={"flex"} alignItems="flex-start" justifyContent={"flex-start"} className={Style.dropMenuSection}>
                  {
                    HomeKitchen.map((ele) =>(
                      <Box display={"flex"} flexDirection="column" alignItems={"flex-start"} justifyContent="flex-start">
                      <NavLink to={ele.link}><Text mb="10px" fontSize={"18px"}>{ele.heading}</Text></NavLink>
                       {
                        ele.section.map((subSection) =>{
                          return  <NavLink to={subSection.link}><Text mb="4px" fontSize={"16px"}>{subSection.sub}</Text></NavLink>
                        })
                       }
                     
                    </Box>
                    ))
                  }

                </Box>
              </Box>
            {/* ////////////////////////////////////// */}
          </Box>
          <Box h="100%" py="10px" className={Style.bottomSection}>
            <NavLink to="">
              <Text fontSize={"19px"}>Beauty & Health</Text>
            </NavLink>
            {/* /////////////////////////////////// */}
            <Box className={Style.bottomSectionMenu}>
                <Box display={"flex"} alignItems="flex-start" justifyContent={"flex-start"} className={Style.dropMenuSection}>
                  {
                    BeautyHealth.map((ele) =>(
                      <Box display={"flex"} flexDirection="column" alignItems={"flex-start"} justifyContent="flex-start">
                      <NavLink to={ele.link}><Text mb="10px" fontSize={"18px"}>{ele.heading}</Text></NavLink>
                       {
                        ele.section.map((subSection) =>{
                          return  <NavLink to={subSection.link}><Text mb="4px" fontSize={"16px"}>{subSection.sub}</Text></NavLink>
                        })
                       }
                     
                    </Box>
                    ))
                  }

                </Box>
              </Box>
            {/* ////////////////////////////////////// */}
          </Box>
          <Box h="100%" py="10px" className={Style.bottomSection}>
            <NavLink to="">
              <Text fontSize={"19px"}>Jewellery & Accessories</Text>
            </NavLink>
            {/* /////////////////////////////////// */}
            <Box className={Style.bottomSectionMenu}>
                <Box display={"flex"} alignItems="flex-start" justifyContent={"flex-start"} className={Style.dropMenuSection}>
                  {
                    JewelleryAccessories.map((ele) =>(
                      <Box display={"flex"} flexDirection="column" alignItems={"flex-start"} justifyContent="flex-start">
                      <NavLink to={ele.link}><Text mb="10px" fontSize={"18px"}>{ele.heading}</Text></NavLink>
                       {
                        ele.section.map((subSection) =>{
                          return  <NavLink to={subSection.link}><Text mb="4px" fontSize={"16px"}>{subSection.sub}</Text></NavLink>
                        })
                       }
                     
                    </Box>
                    ))
                  }

                </Box>
              </Box>
            {/* ////////////////////////////////////// */}
          </Box>
          <Box h="100%" py="10px" className={Style.bottomSection}>
            <NavLink to="">
              <Text fontSize={"19px"}>Bags & Footwear</Text>
            </NavLink>
            {/* /////////////////////////////////// */}
            <Box className={Style.bottomSectionMenu}>
                <Box display={"flex"} alignItems="flex-start" justifyContent={"flex-start"} className={Style.dropMenuSection}>
                  {
                    BagsFootwear.map((ele) =>(
                      <Box display={"flex"} flexDirection="column" alignItems={"flex-start"} justifyContent="flex-start">
                      <NavLink to={ele.link}><Text mb="10px" fontSize={"18px"}>{ele.heading}</Text></NavLink>
                       {
                        ele.section.map((subSection) =>{
                          return  <NavLink to={subSection.link}><Text mb="4px" fontSize={"16px"}>{subSection.sub}</Text></NavLink>
                        })
                       }
                     
                    </Box>
                    ))
                  }

                </Box>
              </Box>
            {/* ////////////////////////////////////// */}
          </Box>
          <Box h="100%" py="10px" className={Style.bottomSection}>
            <NavLink to="">
              <Text fontSize={"19px"}>Electronics</Text>
            </NavLink>
            {/* /////////////////////////////////// */}
            <Box className={Style.bottomSectionMenu}>
                <Box display={"flex"} alignItems="flex-start" justifyContent={"flex-start"} className={Style.dropMenuSection}>
                  {
                    Electronics.map((ele) =>(
                      <Box display={"flex"} flexDirection="column" alignItems={"flex-start"} justifyContent="flex-start">
                      <NavLink to={ele.link}><Text mb="10px" fontSize={"18px"}>{ele.heading}</Text></NavLink>
                       {
                        ele.section.map((subSection) =>{
                          return  <NavLink to={subSection.link}><Text mb="4px" fontSize={"16px"}>{subSection.sub}</Text></NavLink>
                        })
                       }
                     
                    </Box>
                    ))
                  }

                </Box>
              </Box>
            {/* ////////////////////////////////////// */}
          </Box>
        </Box>
      </Box>
    </>
  );
}
