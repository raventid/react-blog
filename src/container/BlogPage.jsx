import React from 'react';
import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';
import items from '../feed'
import update from 'immutability-helper';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items };
    this.like = this.like.bind(this)
  }

  render() {
    const { items } = this.state
    return <div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1>Julian's notes.</h1>
                <h5>Personal. Tasty. About everything.</h5>
              </div>
              <BlogList items={ items } like={this.like} />
              <PieChart columns={[ ...items.map( item => [item.text, item.meta.likes]) ]} />
           </div>
  };

  like(post_id) {
    const index = this.state.items.findIndex(elem => elem.id === post_id )
     const newState = update(this.state, {
        items: {
         [index]: {
          meta: {
           likes: { $apply: x => x + 1 }
          }
         }
        }
     });
     this.setState(newState);
   };

}


export default BlogPage;
