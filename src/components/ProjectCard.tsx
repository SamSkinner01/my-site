function getGithubThumbnailUrl(githubUrl: string) {
    const url = new URL(githubUrl);
    const pathParts = url.pathname.split('/');
    const repoName = pathParts[pathParts.length - 1];
    const ownerName = pathParts[pathParts.length - 2];
    return `https://opengraph.githubassets.com/1/${ownerName}/${repoName}`;
}

function ProjectCard({ title, description, imageUrl, privateRepo }: { title: string; description: string; imageUrl: string, privateRepo: boolean }) {
    return (
        <div className="w-3/4 mx-auto mt-6 mb-6 flex flex-col md:flex-row items-center justify-between bg-gray-200 rounded-lg shadow-lg p-4 hover:bg-gray-300 transition duration-300">
            <div className="md:w-3/4 w-full mb-4 md:mb-0">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
                <p className="text-gray-500">{description}</p>
            </div>
            <div className="md:w-1/4 w-full">
                {privateRepo ? (
                    <p className="text-gray-500 font-semibold">Private Repository</p>
                ) : (
                    <a href={imageUrl} target="_blank" rel="noopener noreferrer">
                        <img src={getGithubThumbnailUrl(imageUrl)} alt={title} className="rounded-lg shadow-md mx-auto" />
                    </a>
                )}

            </div>
        </div>
    );
}

export default ProjectCard;