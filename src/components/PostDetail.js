import React, { Component} from "react";
import { useLocation, Link } from "react-router-dom";

class PostDetail extends Component {
    render() {
        const post = this.props.state.state.post;
        return(
            <div>
                <Link to="/" >
                    <button className="btn btn-sm btn-primary">
                        <i className="fa fa-arrow-left"></i>
                    </button>
                </Link>
                <div className="card">
                    <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="userimage" />
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const WrappedPostDetail = (props) => {
    const state = useLocation();
    return <PostDetail {...props} state={state} />
};

export default WrappedPostDetail;