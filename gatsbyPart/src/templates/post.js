import React, {useState} from "react";
import { graphql } from "gatsby";
import "../style/main.css";
import HelmetComponent from "../components/HelmetComponent";
import Header from "./Header";
import Footer from "./Footer";

import MainShowPost from "../mainComponents/MainShowPost";


export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const allPost= data.allMarkdownRemark.edges;
  
  let colorTitlesStyle={
    color: '#FFF'
  }
  const [token, setToken]=useState('');

  return (
    <div>
      <HelmetComponent title={'تدوينة: '+post.frontmatter.title}/>
      <Header arrowActive="1" colorTitlesStyle={colorTitlesStyle} title1="مدونتي" title2={'تدوينة: '+post.frontmatter.title}/>
      <MainShowPost post={post} allPost={allPost} token={token} setToken={setToken}/>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        id
        title
        date
        author
        keyword
      }
    },
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___id] }
      filter: { fileAbsolutePath: { regex: "//posts//" } }
    ){
      edges {
        node {
          frontmatter {
            id
            slug
            title
            date
            author
            keyword
          }
        }
      }
    }
  }
`