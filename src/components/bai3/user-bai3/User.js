import React from "react";
import "./User.css";
export default function User(props) {
  return (
    <>
      <div className="container-user-bai3">
        <div className="info-user-bai3">
          <div>
            <img
              className="img-avatar-user"
              alt="user"
              src={props.user.avatar_url}
            />
          </div>
          <div className="info-all-bai3">
            <p className="name-user-bai3">{props.user.name}</p>
            <p>{props.user.bio}</p>
            <div className="info-follow-bai3">
              <p>{props.user.followers} Followers</p>
              <p>{props.user.following} Following</p>
              <p>{props.user.public_repos} repos</p>
            </div>
            <div className="action-bai3">
              <div className="flw-bai3">action-demo-1</div>
              <div className="flw-bai3">action-demo-1</div>
              <div className="flw-bai3">action-demo-1</div>
              <div className="flw-bai3">action-demo-1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
