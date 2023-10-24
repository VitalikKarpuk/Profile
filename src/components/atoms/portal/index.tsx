import React, { useEffect, useState, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
    children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
    const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        const portalNode = document.createElement('div');
        document.body.appendChild(portalNode);
        setPortalNode(portalNode);

        return () => {
            document.body.removeChild(portalNode);
        };
    }, []);

    if (!portalNode) return null;

    return ReactDOM.createPortal(children, portalNode);
};

export default Portal;
