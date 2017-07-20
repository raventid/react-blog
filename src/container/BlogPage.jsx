import React from 'react';
import update from 'immutability-helper';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';
import items from '../feed';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items };
    this.like = this.like.bind(this);
  }

  like(postId) {
    const index = this.state.items.findIndex(elem => elem.id === postId);
    const newState = update(this.state, {
      items: {
        [index]: {
          meta: {
            likes: { $apply: x => x + 1 },
          },
        },
      },
    });
    this.setState(newState);
  }

  render() {
    const { items } = this.state; // eslint-disable-line no-shadow
    return (<div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PageHeader>Julian notes. <small>Personal. Tasty. About everything.</small></PageHeader>
      </div>
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}><BlogList items={items} like={this.like} /></Col>
            <Col xs={6} md={4} />
          </Row>
        </Grid>
      </div>
      <PieChart columns={[...items.map(item => [item.text, item.meta.likes])]} />
    </div>);
  }
}


export default BlogPage;
