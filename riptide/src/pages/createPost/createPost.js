import React from 'react'
import "./createPost.css"

function CreatePost() {
  return (
    <>
      <div className="create-post">
        <div className="head">Post New Project</div>
        <form className='create-post-form'>
          <label htmlFor="projectName" className='projectName'>Name of the project:</label><br />
          <input type="text" id='projectName' name="projectName" /><br />
          <label htmlFor="description" className='description'>Description:</label><br />
          <textarea type="text" id='description' name="description" /><br />

          <div className="status">
            <span>Status: </span>
            <input type="radio" id='completed' name='duration' value={"completed"} />
            <label htmlFor="completed">Completed</label>
            <input type="radio" id='ongoing' name='duration' value={"ongoing"} />
            <label htmlFor="ongoing">Ongoing</label>
          </div>

          <select name="domains" className="domains">
            <option value="" disabled selected>domain tags</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </select><br />

          <div className="domain-tags">
            <div className="tag">AI</div>
            <div className="tag">Web Dev</div>
            </div>

          <label htmlFor="url">Link:</label><br />
          <input type="url" id='url' name="url" /><br />

          <div className="buttons">
            <div className='add-image'>Add Image</div>
            <div className="post">Post</div>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreatePost