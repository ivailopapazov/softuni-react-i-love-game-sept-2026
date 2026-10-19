import { createContext } from "react";
import { useReducer } from "react";
import { commentReducer } from "../components/comment-list/comment-reducer";

const CommentContext = createContext();

export function CommentProvider({ children }) {
    const [comments, dispatch] = useReducer(commentReducer, []);
    
    return (
        <CommentContext.Provider value={{ comments, dispatch }}>
            {children}
        </CommentContext.Provider>
    );
}

export default CommentContext;
