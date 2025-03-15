import React from "react";

const AuthenticatedProps = {
    children: React.ReactNode,
    fallback: React.ReactNode
}

const Authenticated = ({ children, fallback }: AuthenticatedProps) => {
    // Check if the user is authenticated
    const isAuthenticated = true; // Replace with your authentication logic
    return <div>{isAuthenticated ? children : fallback}</div>;
}

export default Authenticated;