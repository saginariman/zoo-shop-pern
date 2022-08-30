
const CommentForm = () => {
  return (
    <div class="blog-reply-wrapper mt-50">
        <h4 class="blog-dec-title">post a comment</h4>
        <form action="#">
            <div class="row">
                <div class="col-md-6">
                    <div class="leave-form">
                        <input type="text" placeholder="Full Name"/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="leave-form">
                        <input type="email" placeholder="Eail Address "/>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="text-leave">
                        <textarea placeholder="Massage"></textarea>
                        <input type="submit" value="SEND MASSAGE"/>
                    </div>
                </div>
            </div>
        </form>
    </div>  
  )
}

export default CommentForm