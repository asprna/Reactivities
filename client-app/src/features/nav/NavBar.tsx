import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { Buffer } from "buffer";

const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" />
        </Menu.Item>
        <Menu.Item name="Activites" />
        <Menu.Item> 
            <Button positive content ='Create Activity'></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
