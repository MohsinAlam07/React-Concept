export default function Post({post}){
    const {title,body}=post;
    return(
        <div className="card">
            <h1>Title:{title}</h1>
            <p>{body}</p>
        </div>
    )
}