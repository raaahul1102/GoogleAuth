import React, { useState, useEffect } from 'react';

function OneboxScreen() {
    const [threads, setThreads] = useState([]);
    const [selectedThread, setSelectedThread] = useState(null);

    useEffect(() => {
        const fetchThreads = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setThreads(data);
            } catch (error) {
                console.error('Error fetching threads:', error);
            }
        };

        fetchThreads();
    }, []);

    const handleThreadClick = async (threadId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/${threadId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            const data = await response.json();
            setSelectedThread(data);
        } catch (error) {
            console.error('Error fetching thread details:', error);
        }
    };

    const handleDeleteThread = async (threadId) => {
        try {
            const token = localStorage.getItem('token');
            await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/${threadId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setThreads(threads.filter(thread => thread.id !== threadId));
        } catch (error) {
            console.error('Error deleting thread:', error);
        }
    };

    return (
        <div>
            <h2>Onebox</h2>
            <ul>
                {threads.map(thread => (
                    <li key={thread.id}>
                        <button onClick={() => handleThreadClick(thread.id)}>
                            {thread.subject}
                        </button>
                        <button onClick={() => handleDeleteThread(thread.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {selectedThread && (
                <div>
                    <h3>{selectedThread.subject}</h3>
                    <p>{selectedThread.body}</p>
                </div>
            )}
        </div>
    );
}

export default OneboxScreen;
