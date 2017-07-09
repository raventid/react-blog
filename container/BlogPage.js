import React from 'react';
import BlogItem from '../ui/BlogItem.js';
import Items from '../feed.js'
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
