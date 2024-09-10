
import { MdMenu } from "react-icons/md";


import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton

} from '@chakra-ui/react'






export default function MenuMobile() {
  return (
    <>
      
      <div className="lg:hidden md:block">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<MdMenu className="text-[22px]"/>}
          variant="outline"
        
        />
        <MenuList >
         
          <MenuItem >
          Inicio
          </MenuItem>
          <MenuItem >
            História
          </MenuItem>
          <MenuItem >
            Wallpapers
          </MenuItem>
        </MenuList>
      </Menu>
      </div>
     
    </>
  );
}
