import React from "react";

function User({data}) {
    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-3">
                    <img src={data.image} alt="react" width="50px" height="50px" />
                </div>
                <div className="col-5">
                    <strong>Phone: {data.phone}</strong><br />
                    <strong>Cell: {data.cell}</strong>
                </div>
                <div className="col-3">
                    <h5 className="mt-2">{data.name}</h5>
                </div>
                <div className="col-1">
                    <button className="btn btn-danger btn-sm mt-2">
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default User;