import React from "react"
import Layout from "../components/layout"
import ImageList from "../components/ImageList"

const imageList = [
  {
    src: 'https://images.pexels.com/photos/3584443/pexels-photo-3584443.jpeg',
    imgId: '3584443',
    text: 'bridge'
  },
  {
    src: 'https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg',
    imgId: '3590401',
    text: 'pasta'
  },
  {
    src: 'https://images.pexels.com/photos/3585073/pexels-photo-3585073.jpeg',
    imgId: '3585073',
    text: 'people'
  },
];

const sortedList = [...imageList].sort(() => Math.random() - 0.5);

const IndexPage = () => (
  <Layout>
    <h1>Random Images</h1>
    <ul>
      <li>443: bridge</li>
      <li>401: pasta</li>
      <li>073: people</li>
    </ul>
    <div>
      <ImageList items={sortedList}/>
    </div>
  </Layout>
)

export default IndexPage
