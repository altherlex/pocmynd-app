import { Navbar, Nav, Dropdown } from 'rsuite';

const MyNavbar = () => {

  return (
    <Navbar appearance="inverse">
      <Navbar.Brand>
        <a className="navbar-brand logo">MYND Insight Engine</a>
      </Navbar.Brand>
      <Navbar>
        <Nav>
          <Nav.Item>Clients</Nav.Item>
          <Nav.Item>Reports</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Dropdown title="About">
            <Dropdown.Item>Company</Dropdown.Item>
            <Dropdown.Item>Team</Dropdown.Item>
            <Dropdown.Item>Contact</Dropdown.Item>
          </Dropdown>
        </Nav>
        <Nav pullRight>
          <Nav.Item>Settings</Nav.Item>
        </Nav>
      </Navbar>
    </Navbar>
  );
};

export default MyNavbar;