import React from 'react';
import { useRef } from 'react';
import { Table, Placeholder, Drawer, Pagination } from 'rsuite';
import fakeData from 'data/users.json';
import { Form, ButtonToolbar, Button } from 'rsuite';
import { AvatarGroup, Avatar } from 'rsuite';
import { DatePicker } from 'rsuite';
import { Slider } from 'rsuite';
import { Timeline } from 'rsuite';
import { FlexboxGrid } from 'rsuite';
import { Grid, Row, Col } from 'rsuite';

const MyTable = () => {
  const [loading, setLoading] = React.useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const handleChangeLimit = dataKey => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = fakeData.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  const [open, setOpen] = React.useState(false);
  const [rowData, setData] = React.useState({});
  const [openWithHeader, setOpenWithHeader] = React.useState(false);

  const ref = useRef();

  const objectSelected = (row) => {
    row.tags = row.words.split(' ')
    row.tags = row.tags.map(function(item, indexed){ return {label: item, value: item}})
    setData(row);
  }

  return (
    <>
      <Table
        ref={ref} 
        height={400}
        autoHeight={true}
        data={data}
        onRowClick={data => {
          objectSelected(data);
          setOpen(true);
          console.log('objectSelected: ', data);
        }}
      >

        <Table.Column width={70} align="center">
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.Cell dataKey="id" />
        </Table.Column>

        <Table.Column width={200}>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.Cell dataKey="firstName" />
        </Table.Column>

        <Table.Column width={200}>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.Cell dataKey="lastName" />
        </Table.Column>

        <Table.Column width={200}>
          <Table.HeaderCell>City</Table.HeaderCell>
          <Table.Cell dataKey="city" />
        </Table.Column>

        <Table.Column width={200}>
          <Table.HeaderCell>Street</Table.HeaderCell>
          <Table.Cell dataKey="street" />
        </Table.Column>

        <Table.Column width={300}>
          <Table.HeaderCell>Company Name</Table.HeaderCell>
          <Table.Cell dataKey="companyName" />
        </Table.Column>

        <Table.Column width={300}>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.Cell dataKey="email" />
        </Table.Column>
        <Table.Column width={120} fixed="right">
          <Table.HeaderCell>Action</Table.HeaderCell>

          <Table.Cell>
            {rowData => {
              function handleAction() {
                alert(`id:${rowData.id}`);
              }
              return (
                <span>
                  <a onClick={handleAction}> Edit </a> | <a onClick={handleAction}> Remove </a>
                </span>
              );
            }}
          </Table.Cell>
        </Table.Column>
      </Table>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Drawer.Body>

          <Grid fluid>
            <Row className="show-grid">            
              <Col>
                <AvatarGroup size="lg" spacing={6}>
                  <Avatar circle src={rowData.avartar} alt="@superman66" />
                </AvatarGroup>          
              </Col>
              <Col>
                <h1>{rowData.lastName},</h1>
              </Col>
              <Col>
                <h1>{rowData.firstName}</h1>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={4}>
              </Col>
              <Col xs={20}>
                <h4>{rowData.email}</h4>
              </Col>
            </Row>
          </Grid>          

          <hr />
          <Form>
            <Form.Group controlId="date-3">
              <Form.ControlLabel>Date</Form.ControlLabel>
              <DatePicker defaultValue={Date.parse(rowData.date)} name="date"/>
            </Form.Group>

            <Form.Group controlId="words-3">
              <Form.ControlLabel>Words</Form.ControlLabel>
              <Form.Control name="tagPicker" data={rowData.tags}/>
            </Form.Group>            

            <Form.Group controlId="companyName-3">
              <Form.ControlLabel>CompanyName</Form.ControlLabel>
              <Form.Control value={rowData.companyName} name="companyName" type="text" autoComplete="off" />
            </Form.Group>

            <hr />

            <Form.Group controlId="city-3">
              <Form.ControlLabel>City</Form.ControlLabel>
              <Form.Control value={rowData.city} name="city" type="text" autoComplete="off" />
            </Form.Group>

            <Form.Group controlId="street-3">
              <Form.ControlLabel>Street</Form.ControlLabel>
              <Form.Control value={rowData.street} name="street" type="text" autoComplete="off" />
            </Form.Group>

            <Form.Group controlId="zipCode-3">
              <Form.ControlLabel>ZipCode</Form.ControlLabel>
              <Form.Control value={rowData.zipCode} name="zipCode" type="text" autoComplete="off" />
            </Form.Group>

            <hr />

            <Form.Group controlId="sentence-3">
              <Form.ControlLabel>Sentence</Form.ControlLabel>
              <Form.Control value={rowData.sentence} name="sentence" type="text" autoComplete="off" />
            </Form.Group>

            <Form.Group controlId="stars-3">
              <Form.ControlLabel>Stars</Form.ControlLabel>
               <Slider progress defaultValue={rowData.stars} />
            </Form.Group>

            <Form.Group controlId="followers-3">
              <Form.ControlLabel>Followers</Form.ControlLabel>
              <Form.Control value={rowData.followers} name="followers" type="text" autoComplete="off" />
            </Form.Group>            

            <Timeline align="alternate">
              <Timeline.Item>
                <p>2018-03-01</p>
                <p>Your order starts processing</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>2018-03-02</p>
                <p>Order out of stock</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>2018-03-10</p>
                <p>Arrival</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>2018-03-12</p>
                <p>Order out of the library</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>2018-03-15</p>
                <p>Sending you a piece</p>
              </Timeline.Item>
            </Timeline>            

            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary">Submit</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Drawer.Body>
      </Drawer>

      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={['total', '-', 'limit', '|', 'pager', 'skip']}
          total={fakeData.length}
          limitOptions={[5, 10, 20]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>      
    </>
  );
};

export default MyTable;