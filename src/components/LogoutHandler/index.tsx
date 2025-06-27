import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function LogoutHandler() {
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        logout();
    }, []);

    return null;
}
