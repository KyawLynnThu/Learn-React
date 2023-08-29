import { Component } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

class EditPost extends Component {
    constructor(props) {
        super(props);
        const post = this.props.state.state.post;
        this.state = {
            id: post.id,
            title: post.title,
            desc: post.desc
        }
    }

    updatePost(e) {
        e.preventDefault();
        this.props.updatePost(this.state);
        this.props.navigate("/");
    }

    render() {
        return (
            <div>
                <Link to="/" >
                    <button className="btn btn-sm btn-primary float-end">
                        <i className="fa fa-arrow-left"></i>
                    </button>
                </Link>
                <br /><br />
                <div className="card bg-dark px-5">
                    <h3 className="text-white text-center mt-3">Add new Post</h3>
                    <form onSubmit={this.updatePost.bind(this)}>
                        <div className="mb-1">
                            <label htmlFor="title" className="form-label">Post Title</label>
                            <input type="text" className="form-control rounded-0" id="title" onChange={e => this.setState({ title: e.target.value })} value={this.state.title}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">Post Description</label>
                            <input type="text" className="form-control rounded-0" id="desc" onChange={e => this.setState({ desc: e.target.value })} value={this.state.desc}></input>
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm float-end mb-3">Update</button>
                    </form>
                </div>
            </div>
        )
    }
}

const WrappedEditPost = (props) => {
    let navigate = useNavigate();
    let state = useLocation();
    return <EditPost {...props} navigate={navigate} state={state} />
}

export default WrappedEditPost;