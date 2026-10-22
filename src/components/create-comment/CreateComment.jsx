import { commentApi } from "../../api";
import { useContext } from "react";
import CommentContext from "../../contexts/comment-context";
import { toast } from "react-toastify";

export default function CreateComment({
    user,
    gameId,
}) {
    const { dispatch } = useContext(CommentContext);
    const addCommentAction = async (formData) => {
        const newComment = {
            text: formData.get('text'),
            author: user?.email,
            game_id: gameId,
            user_id: user?.id
        }

        try {
            const result = await commentApi.create(newComment);

            dispatch({ type: 'ADD_COMMENT', payload: result[0] });
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <>
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" action={addCommentAction}>
                    <textarea name="text" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </>
    );
}
