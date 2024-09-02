import { useState, useEffect } from 'react';

function useReadmeFetcher(owner, repo) {
    const [readmeContent, setReadmeContent] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchReadme = async () => {
            const url = `https://api.github.com/repos/${owner}/${repo}/readme`;

            const options = {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'Authorization': process.env.REACT_APP_API_KEY? process.env.REACT_APP_API_KEY : '' 
                }
            };

            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`Error al obtener el README: ${response.statusText}`);
                }

                const data = await response.json();

                // El contenido del archivo README está en base64, decodifícalo
                const decodedContent = atob(data.content);
                setReadmeContent(decodedContent);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchReadme();
    }, [owner, repo]); // Efecto depende de owner y repo

    return { readmeContent, error };
}

export default useReadmeFetcher;
