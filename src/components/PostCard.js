import React, { Component } from "react";
import { Link } from "react-router-dom";
class PostCard extends Component {
    delete() {
        this.props.remove(this.props.post.id)
    }

    render() {
        let post = this.props.post;
        return(
            <div className="card">
                <div className="row px-2">
                    <div className="col-2 mt-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" width="50px" height="50px" alt="" />
                    </div>
                    <div className="col-5 mt-2">
                        <h4>{post.title}</h4>
                        <p>{post.desc}</p>
                    </div>
                    <div className="col-5 mt-3">
                        <Link to={`/post/${post.id}`} state={{post:post}}>
                            <button className="btn btn-sm btn-info me-1">
                                <i className="fa fa-eye"></i>
                            </button>
                        </Link>
                        <button className="btn btn-sm btn-warning me-1">
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={this.delete.bind(this)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard;