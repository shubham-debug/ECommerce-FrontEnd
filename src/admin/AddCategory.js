import React, { useState } from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";

const AddCategory = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const {user, token} = isAuthenticated();

    return (
        <Base title="Create a Category here" description="Add a new category for the collection" 
        className="container bg-success p-4">
            <div className="row bg-white rounded">

                <div className="col-md-8 offset-md-2">
                    hi there
                </div>

            </div>
        </Base>
    );
}

export default AddCategory;