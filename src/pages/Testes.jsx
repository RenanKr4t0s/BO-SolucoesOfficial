import React from "react";
import { Button, Stack, DropdownButton, Dropdown } from 'react-bootstrap';

export default function Testes(){
  return(
    <>
      <Stack direction="Vertical" gap={2}>
        <Button>Hello World</Button>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
      <Stack direction="horizontal" gap={3}>
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          title="Light dropdown"
          className="mt-2"
          data-bs-theme="light"
        >
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          title="Dark dropdown"
          className="mt-2"
          data-bs-theme="dark"
        >
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </DropdownButton>
      </Stack>
    </>
  )
}