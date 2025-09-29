import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../assets/MainLogo.png";

const InternGenieDiscussion = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Ananya Sharma",
      role: "2024 Microsoft Intern",
      message:
        "Focus on DSA + system design basics. Mock interviews helped me a lot!",
      replies: [],
    },
    {
      id: 2,
      author: "Rahul Verma",
      role: "Final-year CSE Student",
      message:
        "Anyone from Delhi cracked Goldman Sachs internship? Need some guidance.",
      replies: [],
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");

  // Add new post
  const handlePost = () => {
    if (newPost.trim()) {
      setPosts([
        ...posts,
        {
          id: Date.now(),
          author: "You",
          role: "Student",
          message: newPost,
          replies: [],
        },
      ]);
      setNewPost("");
    }
  };

  // Add reply to specific post
  const handleReply = (postId) => {
    if (replyMessage.trim()) {
      setPosts(
        posts.map((post) =>
          post.id === postId
            ? {
                ...post,
                replies: [
                  ...post.replies,
                  {
                    id: Date.now(),
                    author: "You",
                    role: "Student",
                    message: replyMessage,
                  },
                ],
              }
            : post
        )
      );
      setReplyMessage("");
      setReplyingTo(null);
    }
  };

  return (
    <div className="recommendations-container">
      {/* Header */}
      <header className="interngenie-header">
        <Link to="/interngenie" className="interngenie-logo">
          <img src={MainLogo} alt="InternGenie Logo" />
          <span>InternGenie</span>
        </Link>
        <nav className="interngenie-nav">
          <Link to="/">Home</Link>
          <Link to="/interngenie/input">Find</Link>
          <Link to="/interngenie/help">Help</Link>
          <Link to="/interngenie/about">About</Link>
          <Link to="/interngenie/progress">Progress</Link>
        </nav>
      </header>

      {/* Main Discussion Section */}
      <main className="discussion-page">
        <h1>Internship Discussion Hub 💬</h1>
        <p className="subtitle">
          Share tips, ask questions, and connect with achievers from your region.
        </p>

        {/* Post Box */}
        <div className="post-box">
          <textarea
            placeholder="✍️ Write your thoughts, tips, or questions..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <button onClick={handlePost}>Post</button>
        </div>

        {/* Posts List */}
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post-header">
                <div className="author-avatar">
                  {post.author.charAt(0).toUpperCase()}
                </div>
                <div className="author-info">
                  <h2>{post.author}</h2>
                  <span>{post.role}</span>
                </div>
              </div>
              <p className="post-message">{post.message}</p>

              {/* Reply button */}
              <button
                className="reply-btn"
                onClick={() =>
                  setReplyingTo(replyingTo === post.id ? null : post.id)
                }
              >
                💬 Reply
              </button>

              {/* Reply box */}
              {replyingTo === post.id && (
                <div className="reply-box">
                  <textarea
                    placeholder="Write a reply..."
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                  />
                  <button onClick={() => handleReply(post.id)}>Reply</button>
                </div>
              )}

              {/* Show replies */}
              <div className="replies">
                {post.replies.map((reply) => (
                  <div className="reply" key={reply.id}>
                    <div className="author-avatar small">
                      {reply.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4>{reply.author}</h4>
                      <span>{reply.role}</span>
                      <p>{reply.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InternGenieDiscussion;