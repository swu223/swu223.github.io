import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const user = localStorage.getItem('token')
    if (!user) {
        return <Navigate to="/auth" replace />
    }
    return (
        <>
            {children}
        </>
    );
}