import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import SidebarWithHeader from "./Componenet/Home"
import Table from "./Componenet/Table"

export const App = () => (
  <ChakraProvider theme={theme}>
   <SidebarWithHeader>
  <Table/>
   </SidebarWithHeader>
   
  </ChakraProvider>
)
