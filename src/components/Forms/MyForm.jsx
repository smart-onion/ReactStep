import {useActionState} from "react";
import "./MyForm.css";

class FormTemplate{
    constructor(userId, title, body){
        this.title = title || "";
        this.body = body || "";
        this.userId = userId || null;
    }
}

function onInputChange(event, setter){
    setter(event.target.value);
}

export const MyForm = () => {
    const [state, formAction, isPending] = useActionState(async (prev, formData) => {
        const request = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers: {"Content-Type" : "application/json;"},
            body: JSON.stringify({
                title: formData.get("title"),
                body: formData.get("body"),
                userId: formData.get("userId"),
            })
        })
        if(request.ok){

            let data = await request.json();
            return {success: true, data: data.id};
        }else{
            throw "Failed to fetch posts";
        }


    }, {success: null, data: {}});

    return (
        <div className="myForm">
            <form action={formAction}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" placeholder="Title" />
                <label htmlFor="title">Body</label>
                <input type="text" id="body" name="body" placeholder="Body"/>
                <label htmlFor="title">User ID</label>
                <input type="text" id="userId" name="userId" placeholder="User Id"/>
                <input type="submit" disabled={isPending} value={isPending ? "Pending..." : "Submit"}/>
                {state.success && (
                    <p className="result"> Added with id: {state.data} </p>
                )}
            </form>
        </div>
    );
}