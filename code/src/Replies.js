import React from 'react'
import moment from 'moment'

export const Replies = ({allReplies, onLike}) => {

    // post a like to the server and then update the DOM
    const likeThought = (messageID) => {
        fetch(`https://thessans-happythoughts-api.herokuapp.com/thoughts/${messageID}/like`, { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        })
        .then(onLike)
    }  
    
    return (
        <section className="allRepliesContainer">
            {allReplies.map(message => { // returns a div for each thought with the message, number of likes and timestamp
                return(                    
                <div className="replyContainer" key={message._id}>
                    <p className="replyText">{message.message}</p>
                    <div className="details">
                        <div className="likeContainer">
                            <button className={message.hearts === 0 ? 'button-unliked' : 'button-liked'}
                            onClick={()=>likeThought(message._id)}>
                                <span className="likeHeartIcon" role="img" aria-label="heart icon">❤️️</span>
                            </button>
                            <p className="likeDetail"> x {message.hearts}</p>
                            <p className="timeStamp">{ // displays what time thoughts has been sent
                        moment(message.createdAt).fromNow()}</p> 
                        </div>
                        
                    </div>
                </div>
                )
            })}
        </section>
    )
}
