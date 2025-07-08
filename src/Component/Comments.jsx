import { useState } from "react";

function Comment({ details }) {
  const [comments, setComments] = useState(details.comments || []);
  const [newComment, setNewComment] = useState("");

  // Adding new comment
  const handleAddComment = () => {
    if (!newComment.trim()) return;
    fetch(`http://localhost:5100/api/comment/${details.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Anonymous",
        comment: newComment,
      }),
    })
      .then((res) => res.json())
      .then((updatedComments) => {
        setComments(updatedComments);
        setNewComment("");
      });
  };

  //   Edit Comment
  const handleEditComment = (index) => {
    const updated = prompt("Edit your comment", comments[index].comment);
    if (updated && updated !== comments[index].comment) {
      fetch(`http://localhost:5100/api/comment/${details.id}/${index}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: comments[index].name,
          comment: updated,
        }),
      })
        .then((res) => res.json())
        .then((updatedComments) => setComments(updatedComments));
    }
  };

  //   Delete Comment
  const handleDeleteComment = (index) => {
    fetch(`http://localhost:5100/api/comment/${details.id}/${index}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((updatedComments) => setComments(updatedComments));
  };

  return (
    <div className="mt-[2%] p-4 bg-[#0f0f0f] rounded-2xl text-white">
      <div className="text-2xl font-medium mb-4">Comments</div>

      {/* Add Comment */}
      <div className="flex space-x-2 mb-[4%]">
        <img src="/img/icons/You.png" className="h-8" alt="user" />
        <input
          type="text"
          className="flex-1 rounded-lg px-4 text-white"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          className="bg-white text-black px-4 py-1 rounded-lg font-semibold"
        >
          Post
        </button>
      </div>

      {/* Comment List */}
      <div className="space-y-4">
        {comments.map((cmt, index) => (
          <div key={index}>
            <div className="flex space-x-2 items-center">
              <img src="/img/icons/You.png" className="h-8" alt="user" />
              <div className="font-semibold">{cmt.name}</div>
              <button
                onClick={() => handleEditComment(index)}
                className="ml-auto text-sm bg-white text-black px-2 py-1 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteComment(index)}
                className="ml-2 text-sm bg-red-600 text-white px-2 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
            <div className="ml-[2.5%] mt-1">{cmt.comment}</div>
            <div className="flex ml-[2.5%] space-x-2 mt-1">
              <img src="/img/Videopage/Thumbsup.png" className="h-5" />
              <img src="/img/Videopage/Thumbsdown.png" className="h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
