import React from "react";

function User({image, phone, cell}) {
    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-3">
                    <img src={image} alt="react" width="50px" height="50px" />
                </div>
                <div className="col-5">
                    <strong>Ph: {phone}</strong><br />
                    <strong>Cell: {cell}</strong>
                </div>
                <div className="col-4">
                    <button className="btn btn-danger btn-sm mt-2">
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default User;