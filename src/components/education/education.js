import * as React from 'react'
import { useState } from 'react'
import { Button, Modal } from 'antd'
import { graphql } from 'gatsby'

const Education = ({ data }) => {
  console.log(data)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <h2>Education</h2>
      <ul>
        {data.map((edge) => (
          <li key={edge.node.id}>
            <Button type='text' onClick={showModal}>
              {edge.node.frontmatter.title}
            </Button>
            <Modal
              title={edge.node.frontmatter.title}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>{edge.node.body}</p>
            </Modal>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Education

export const query = graphql`
  fragment EducationInfo on allMDX {
    edges {
      node {
        frontmatter {
          title
          slug
          dateFinished
        }
        id
        body
      }
    }
  }
`
