import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlogItem from "./BlogItem"

const Blog = () => {

    const articles = useStaticQuery(graphql`
    {
        allMarkdownRemark {
        nodes {
            frontmatter {
                title
                tag
                slug
                image {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                    }
                }
            }
            html
            }
        }
    }
    `)

    const allArticles = articles.allMarkdownRemark.nodes.map((item, index) => (
        <BlogItem
        key={index}
        image={item.frontmatter.image.childImageSharp.gatsbyImageData}
        slug={item.frontmatter.slug}
        alt={item.frontmatter.title}
        title={item.frontmatter.title}
        />
    ))
    return (
        <div className="px-10 py-12">
            <h3 className="text-2xl font-rammetto">Health Tips For You</h3>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 mt-8">
            {allArticles}
            </div>
        </div>
        
    )
}

export default Blog
